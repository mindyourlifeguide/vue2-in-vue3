<template>
  <div class="root">
    <h1>vue 2 app - remote</h1>
    <CounterLocal/>
    <Counter/>
    <Counter2/>
  </div>
</template>

<script>
import Counter2 from "./components/Counter2.vue";
import Counter from "./components/Counter.vue";
import CounterLocal from "./components/CounterLocal.vue";

export default {
  components: {
    CounterLocal,
    Counter,
    Counter2,
  },
};
</script>

<style scoped>
h1 {
  font-family: Arial, Helvetica, sans-serif;
}

.root{
  display: grid;
  grid-gap: 10px;
  background: lightgoldenrodyellow;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkblue;
}
</style>
