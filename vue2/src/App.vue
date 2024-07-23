<template>
  <div class="root">
    <h1>vue 2 app - remote</h1>
    <div class="content">
    <CounterLocal/>
    <Counter/>
    <Counter2/>
    </div>
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

.content{
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  justify-content: space-between
}
</style>
