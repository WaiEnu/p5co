<template>
  <div class="item3" id="item3">
    <h1>Item3</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import p5 from "p5";

export default defineComponent({
  name: "Item3",
  props: {},
  mounted() {
    const script = function (p: p5) {
      p.setup = () => {
        var canvas = p.createCanvas(600, 300);
        canvas.parent("item3");
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
