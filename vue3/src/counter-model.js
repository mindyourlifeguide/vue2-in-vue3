import {defineStore} from 'pinia';

const initialState = ()=> {
    return {
        counter: 0
    };
}

const actions = {
    increment() {
        this.counter++;
        console.log('counter-3', this.counter);
    },
    decrement() {
        this.counter--;
        console.log('counter-3', this.counter);
    },
};

export const useCounterStore = defineStore('counter-3', {
    state: initialState,
    actions,
});
