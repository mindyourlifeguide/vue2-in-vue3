<template>
  <div>
    <h3>Vue3 App</h3>
    <Content :count="count"/>
    <div id="vue2Button"></div>
    <Counter/>
    <Counter2/>
    <vue2-button @btnClick="inc"/>
    <div id="vue2app"></div>
    <App2/>
  </div>
</template>

<script>
import Content from "./components/Content";
import {vue2ToVue3} from './utils';
import Button from 'vue2App/Button';
import App2 from 'vue2App/App';
import Counter from "./Counter.vue";
import Counter2 from "./Counter2.vue";

export default {
  components: {
    Counter2,
    Counter,
    Content,
    App2: vue2ToVue3(App2, 'vue2app'),
    vue2Button: vue2ToVue3(Button, 'vue2Button'),
  },
  data() {
    return {
      count: 0
    };
  },
  methods: {
    inc() {
      this.count++;
      console.log('inc vue 2.7', this.count);
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
