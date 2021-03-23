<template>
  <div class="item6" id="item6">
    <h1>Item6</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import p5 from "p5";

export default defineComponent({
  name: "Item6",
  props: {},
  mounted() {
    const script = function (p: p5) {
      p.setup = () => {
        var canvas = p.createCanvas(600, 300);
        canvas.parent("item6");
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
