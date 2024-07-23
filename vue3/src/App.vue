<template>
  <div class="root-vue3">
    <h1>vue 3 app - host</h1>
    <CounterLocal/>
    <Counter/>
    <Counter2/>
    <div id="vue2app"></div>
    <App2/>
  </div>
</template>

<script>
import {vue2ToVue3} from './utils';
import Button from 'vue2App/Button';
import App2 from 'vue2App/App';
import Counter from "./components/Counter.vue";
import Counter2 from "./components/Counter2.vue";
import CounterLocal from "./components/CounterLocal.vue";

export default {
  components: {
    CounterLocal,
    Counter2,
    Counter,
    App2: vue2ToVue3(App2, 'vue2app'),
    vue2Button: vue2ToVue3(Button, 'vue2Button'),
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

.root-vue3{
  display: grid;
  grid-gap: 10px;
  background: lightseagreen;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkblue;
}
</style>
