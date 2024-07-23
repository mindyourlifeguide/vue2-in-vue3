<template>
  <div>
    <h2>Counter - vue 3 - local - from props</h2>
    <h3>{{ count }}</h3>
  </div>
</template>

<script>
export default {
  props: ['count'],
};
</script>
