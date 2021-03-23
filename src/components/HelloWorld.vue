<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 v-if="msg">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<style scoped>
img {
  margin: 0 auto;
}
</style>
