import Vue2 from 'vue2App/vue2';
import {getCurrentInstance, watch} from "vue";

function bindSlotContext(target = {}, context) {
    return Object.keys(target).map(key => {
        const vnode = target[key];
        vnode.context = context;
        return vnode;
    });
}


export const vue2ToVue3 = (WrapperComponent, wrapperId) => {
    let vm;
    let unwatch = [];

    return {
        mounted() {
            const componentContext = this;

            const slots = bindSlotContext(componentContext.$slots, componentContext.__self);
            vm = new Vue2({
                data: () => ({
                    triggerUpdate: 0, // for rerender component after update
                }),
                render(createElement) {
                    return createElement(
                        'div',
                        // Now the rerender for pinia works,
                        // but does not save the local state.
                        // If you comment it out, the local state will work,
                        // but there will be no rerender after pinia changes
                        { key: this.triggerUpdate },
                        [
                            createElement(
                                WrapperComponent, {
                                    on: componentContext.$attrs,
                                    attrs: componentContext.$attrs,
                                    props: {...componentContext.$props, triggerUpdate: this.triggerUpdate},
                                    scopedSlots: componentContext.$scopedSlots, // Используем componentContext для доступа к $scopedSlots
                                },
                                slots
                            ),
                        ]
                    );
                },
            }).$mount(`#${wrapperId}`);

            const instance = getCurrentInstance().proxy;
            if (instance && instance.$pinia) {
                const storesMap = instance.$pinia._s;
                storesMap.forEach(store => {
                    const unsubscribe = watch(
                        () => store.$state,
                        () => {
                            vm.triggerUpdate++;
                        },
                        { deep: true }
                    );
                    unwatch.push(unsubscribe);
                });
            }
        },
        beforeUnmount() {
            unwatch.forEach(unsubscribe => unsubscribe());
        },
        props: WrapperComponent.props,
        render() {
            vm && vm.$forceUpdate();
        },
    };
};
