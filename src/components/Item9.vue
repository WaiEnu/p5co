<template>
  <div class="item9" id="item9">
    <div id="calculator">
      <div id="result">
        <span>{{ state.current }}</span>
      </div>
      <div id="pad">
        <button
          id="clear"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="reset()"
        >
          C
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="opNum(4)"
        >
          /
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(7)"
        >
          7
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(8)"
        >
          8
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(9)"
        >
          9
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="opNum(3)"
        >
          *
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(4)"
        >
          4
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(5)"
        >
          5
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(6)"
        >
          6
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="opNum(2)"
        >
          -
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(1)"
        >
          1
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(2)"
        >
          2
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(3)"
        >
          3
        </button>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="opNum(1)"
        >
          +
        </button>
        <button
          id="zero"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="addNum(0)"
        >
          0
        </button>
        <button
          id="equal"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          @click="calicurate()"
        >
          =
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Item9",
  props: {},
  setup() {
    const state = reactive({
      current: 0,
      saved: 0,
      ops: 0,
    });

    const addNum = (n: number) => {
      if (state.ops > 0) {
        state.saved = state.current;
      }
      state.current = n;
    };
    const opNum = (n: number) => {
      if (state.ops == 0) {
        state.ops = n;
      }
    };
    const calicurate = () => {
      switch (state.ops) {
        case 1:
          state.current = state.saved + state.current;
          break;
        case 2:
          state.current = state.saved - state.current;
          break;
        case 3:
          state.current = state.saved * state.current;
          break;
        case 4:
          state.current = state.saved / state.current;
          break;
        default:
          break;
      }
      state.ops = 0;
      state.saved = 0;
    };
    const reset = () => {
      state.current = 0;
      state.saved = 0;
      state.ops = 0;
    };

    return {
      state,
      addNum,
      opNum,
      calicurate,
      reset,
    };
  },
});
</script>
<style scoped>
#item9 {
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 0 !important;
}
#calculator {
  height: 100%;
  font-family: sans-serif;
  color: #222;
  background: #ccc;
  border: 2px solid #222;
  border-radius: 4px;
  max-width: 350px;
}
#result {
  font-size: 42px;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  display: grid;
  padding: 8px;
  justify-items: end;
  align-items: center;
  border-bottom: 2px solid #222;
}
#pad {
  display: grid;
  grid-template-columns: repeat(4, minmax(60px, 1fr));
  grid-gap: 8px;
  padding: 12px;
}
#pad button {
  cursor: pointer;
  font-size: 16px;
  display: grid;
  padding: 12px 8px;
  justify-items: center;
  align-items: center;
  color: #fafafa;
  border: 1px solid #222;
  border-radius: 4px;
  background: #777;
}
#clear {
  background: steelblue;
  grid-column: 1/4;
}
#zero {
  grid-column: 1/4;
}
#equal {
  background: seagreen;
}
</style>
