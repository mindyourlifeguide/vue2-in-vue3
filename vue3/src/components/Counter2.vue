<template>
  <div class="counter">
    <h2>Counter - vue 3 - pinia shared</h2>
    <h3>{{ counterStore.counter }}</h3>

    <button @click="counterStore.decrement()">-</button> |
    <button @click="counterStore.increment()">+</button>

  </div>
</template>

<script setup>

import {useCounterStore} from "@mvp/shared";

const counterStore = useCounterStore();

</script>

<style scoped>
.counter{
  background: lightgreen;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkcyan;
}
</style>
