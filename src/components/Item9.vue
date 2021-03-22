<template>
  <div class="item9" id="item9">
    <h1>Item9</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import p5 from "p5";

export default defineComponent({
  name: "Item9",
  props: {},
  mounted() {
    const script = function (p: p5) {
      p.setup = () => {
        var canvas = p.createCanvas(600, 300);
        canvas.parent("item9");
      };

      p.draw = () => {
        p.background(0);
      };
    };

    new p5(script);
  },
});
</script>
<style>
canvas {
  margin: 0 auto;
}
</style>
