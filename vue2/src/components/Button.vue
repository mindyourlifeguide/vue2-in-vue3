<template>
  <button @click="click">vue2 button click</button>
</template>

<script>


export default {
  methods: {
    click() {
      this.$emit("btnClick");
      this.$emit("onBtnClick");
    }
  }
}
</script>

