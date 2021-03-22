<template>
  <div class="item1" id="item1">
    <!-- <h1>Item1</h1> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import p5 from "p5";

export default defineComponent({
  name: "Item1",
  props: {},
  mounted() {
    const script = function (p5: p5) {
      var speed = 2;
      var posX = 0;
      p5.setup = () => {
        var canvas = p5.createCanvas(600, 300);
        canvas.parent("item1");
        p5.ellipse(p5.width / 2, p5.height / 2, 250, 250);
      };

      p5.draw = () => {
        p5.background(0);
        const degree = p5.frameCount * 3;
        const y = p5.sin(p5.radians(degree)) * 50;
        p5.push();
        p5.translate(0, p5.height / 2);
        p5.ellipse(posX, y, 50, 50);
        p5.pop();

        posX += speed;
        if (posX > p5.width || posX < 0) {
          speed *= -1;
        }
      };
    };

    new p5(script);
  },
});
</script>
<style>
canvas{
  margin: 0 auto;
}
</style>