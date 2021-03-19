<template>
  <div class="view">
    <h1>View CODE</h1>
    <div class="flex flex-wrap">
      <div class="w-5/6 mx-auto my-0">
        <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item1',
              'text-white bg-green-400': currentTab === 'Item1',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item1'"
            >
              Item1
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item2',
              'text-white bg-green-400': currentTab === 'Item2',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item2'"
            >
              Item2
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item3',
              'text-white bg-green-400': currentTab === 'Item3',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item3'"
            >
              Item3
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item4',
              'text-white bg-green-400': currentTab === 'Item4',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item4'"
            >
              Item4
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item5',
              'text-white bg-green-400': currentTab === 'Item5',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item5'"
            >
              Item5
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item6',
              'text-white bg-green-400': currentTab === 'Item6',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item6'"
            >
              Item6
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item7',
              'text-white bg-green-400': currentTab === 'Item7',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item7'"
            >
              Item7
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item8',
              'text-white bg-green-400': currentTab === 'Item8',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item8'"
            >
              Item8
            </a>
          </li>
          <li
            class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-bind:class="{
              'text-green-400 bg-white': currentTab !== 'Item9',
              'text-white bg-green-400': currentTab === 'Item9',
            }"
          >
            <a
              class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
              @click="currentTab = 'Item9'"
            >
              Item9
            </a>
          </li>
        </ul>
        <div
          class="relative flex flex-col min-w-0 bg-gray-700 break-words w-full mb-6 shadow-lg rounded"
        >
          <div class="px-4 py-5 flex-auto">
            <div class="tab-content tab-space">
              <component :is="currentTab"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import Item1 from "@/components/Item1.vue";
import Item2 from "@/components/Item2.vue";
import Item3 from "@/components/Item3.vue";
import Item4 from "@/components/Item4.vue";
import Item5 from "@/components/Item5.vue";
import Item6 from "@/components/Item6.vue";
import Item7 from "@/components/Item7.vue";
import Item8 from "@/components/Item8.vue";
import Item9 from "@/components/Item9.vue";

export default defineComponent({
  name: "View",
  components: {
    HelloWorld,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    Item7,
    Item8,
    Item9,
  },
  data() {
    return {
      currentTab: "HelloWorld",
    };
  },
});
</script>
