<template>
  <div class="counter">
    <h2>Counter - vue 2 - pinia local</h2>
    <h3>{{ counterStore.counter }}</h3>
    <button @click="counterStore.decrement()">-</button> |
    <button @click="counterStore.increment()">+</button>

  </div>
</template>

<script setup>

import {useCounterStore} from "./counter-model";

const counterStore = useCounterStore();

</script>

<style scoped>
.counter{
  background: lightblue;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkcyan;
}
</style>
