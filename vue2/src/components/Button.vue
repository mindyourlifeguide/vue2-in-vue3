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
  background: powderblue;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid blue;
  color: blue;
  &:hover{
  background: lightblue;
    &:active{
      background: lightskyblue;
    }
  }
}
</style>
