<template>
  <div class="item1" id="item1">
    <h1>Bounce</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import p5 from "p5";

export default defineComponent({
  name: "Item1",
  props: {},
  mounted() {
    const script = function (p: p5) {
      var speed = 4;
      var posX = 0;
      p.setup = () => {
        var canvas = p.createCanvas(600, 300);
        canvas.parent("item1");
        p.ellipse(p.width / 2, p.height / 2, 250, 250);
      };

      p.draw = () => {
        p.background(0);
        const degree = p.frameCount * 3;
        const y = p.sin(p.radians(degree)) * 50;
        p.push();
        p.translate(0, p.height / 2);
        p.ellipse(posX, y, 50, 50);
        p.pop();

        posX += speed;
        if (posX > p.width || posX < 0) {
          speed *= -1;
        }
      };
    };

    new p5(script);
  },
});
</script>
<style scoped>
canvas {
  margin: 0 auto;
}
</style>
