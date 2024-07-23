<template>
  <div class="home">
    <h1>Counter vue 2</h1>
    <h2>{{ counterStore.counter }}</h2>

    <button @click="counterStore.decrement()">-</button> |
    <button @click="counterStore.increment()">+</button>

  </div>
</template>

<script setup>

import {useCounterStore} from "./counter-model";

const counterStore = useCounterStore();

</script>
