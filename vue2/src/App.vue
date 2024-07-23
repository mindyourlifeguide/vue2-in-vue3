<template>
  <div>
    <h3>Vue2 App</h3>
    <Content :count="count"/>
    <Button @btnClick="inc"/>
    <Counter/>
    <Counter2/>
  </div>
</template>

<script>
import Content from "./components/Content";
import Button from './components/Button';
import Counter2 from "./components/Counter2.vue";
import Counter from "./components/Counter.vue";

export default {
  components: {
    Counter, Counter2,
    Content,
    Button,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    inc() {
      this.count++;
      console.log('inc vue 2',this.count )
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
