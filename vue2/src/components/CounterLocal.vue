<template>
  <div class="counter">
    <Content :count="count"/>
    <Button @btnClick="inc"/>
  </div>
</template>

<script>
import Content from "./Content";
import Button from './Button';

export default {
  components: {
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
      console.log('inc vue 2', this.count)
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

.counter {
  display: grid;
  grid-gap: 10px;
  background: lightgray;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid cornflowerblue;
}
</style>
