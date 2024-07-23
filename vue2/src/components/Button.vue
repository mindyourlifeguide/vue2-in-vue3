<template>
  <button class="button" @click="click">vue2 button click</button>
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

<style scoped>
.button{
  width: min-content;
  text-wrap: nowrap;
  background: palevioletred;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid darkred;
  color: wheat;
  &:hover{
  background: hotpink;
  color: white;

    &:active{
      background: darkred;
    }
  }
}
</style>
