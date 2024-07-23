<template>
  <div class="counter-local">
    <Content :count="count"/>
    <div id="vue2Button"></div>
    <vue2-button @btnClick="inc"/>
  </div>
</template>

<script>
import Content from "./Content";
import {vue2ToVue3} from '../utils';
import Button from 'vue2App/Button';

export default {
  components: {
    Content,
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

.counter-local {
  display: grid;
  grid-gap: 10px;
  background: sandybrown;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid red;
}
</style>
