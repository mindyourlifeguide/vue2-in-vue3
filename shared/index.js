import {defineStore} from 'pinia';

const initialState = ()=> {
    return {
        counter: 0
    };
}

const actions = {
    increment() {
        this.counter++;
        console.log('counter-shared', this.counter);
    },
    decrement() {
        this.counter--;
        console.log('counter-shared', this.counter);
    },
};

export const useCounterStore = defineStore('counter-shared', {
    state: initialState,
    actions,
});
