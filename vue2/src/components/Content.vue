<template>
  <div>
    <h2>Counter - vue 2 - local - from props</h2>
    <h3>{{ count }}  ⬅️ - <span class="warn">bug when updating pina</span></h3>
  </div>
</template>

<script>
export default {
  props: ['count'],
};
</script>

<style scoped>
.warn{
 color: red;
}
</style>
