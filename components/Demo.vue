<script defineAsyncComponent lang="ts" setup>
import { useConectivitiesStore } from "../stores/connectivities.store";
import { storeToRefs } from "pinia";
const connectivitiesStore = useConectivitiesStore();
const { arr } = storeToRefs(connectivitiesStore);
const card = await arr.value.length;
//const odersCount = arr.value[0].orders.length;
function ordersCount(i: any) {
  return arr.value[i - 1].orders.length;
}
function optionalCount(i: any, j: any) {
  return arr.value[i - 1].orders[j - 1].optionals.length;
}
</script>
<template>
  <!-- <div
    class="group shadow-xl border-t-4 border-indigo-500 rounded-xl p-5"
    v-for="i in card"
  >
    <div class="flex justify-between bg-neutral-100 rounded-2xl p-3 mb-1">
      <div class="grid grid-cols content-between">
        <p class="font-bold text-4xl">{{ arr[i - 1].id }}</p>
        <p class="text-2xl text-gray-500">{{ arr[i - 1].channal }}</p>
      </div>
      <div class="grid-cols text-right">
        <p class="text-indigo-500 font-bold">{{ arr[i - 1].status }}</p>
        <p class="font-bold text-2xl">{{ arr[i - 1].time }}</p>
        <p class="text-gray-500">table {{ arr[i - 1].table }}</p>
      </div>
    </div>
    <div class="grid_cols justify-between pt-2">
      <div class="grid-cols-2 w-full" v-for="j in ordersCount(i)">
        <div class="grid-rows flex justify-between">
          <p class="font-bold">{{ arr[i - 1].orders[j - 1].order }}</p>
          <p class="text-gray-500 text-sm">
            {{ arr[i - 1].orders[j - 1].qty }}
          </p>
        </div>
        <p class="text-gray-500 text-sm" v-for="k in optionalCount(i, j)">
          {{ arr[i - 1].orders[j - 1].optionals[k - 1].optional }}
        </p>
      </div>
    </div>
    <button
      type="button"
      class="w-full text-white bg-indigo-500 rounded-xl mt-3 py-1"
    >
      Bump
    </button>
    <div class="flex justify-center">
      <button type="button" class="text-indigo-500 rounded-xl mt-2 pt-1">
        Recall
      </button>
    </div>
  </div> -->
  <nuxt-link
    class="group shadow-xl border-t-4 border-indigo-500 rounded-xl p-5"
  >
    <div class="flex justify-between bg-neutral-100 rounded-2xl p-3 mb-1">
      <div class="grid grid-cols content-between">
        <p class="font-bold text-4xl">{{ id }}</p>
        <p class="text-2xl text-gray-500">{{ channal }}</p>
      </div>
      <div class="grid-cols text-right">
        <p class="text-indigo-500 font-bold">{{ status }}</p>
        <p class="font-bold text-2xl">{{ time }}</p>
        <p class="text-gray-500">table {{ table }}</p>
      </div>
    </div>
    <div class="grid_cols justify-between pt-2"></div>
    <button
      type="button"
      class="w-full text-white bg-indigo-500 rounded-xl mt-3 py-1"
    >
      Bump
    </button>
    <div class="flex justify-center">
      <button type="button" class="text-indigo-500 rounded-xl mt-2 pt-1">
        Recall
      </button>
    </div>
  </nuxt-link>
</template>
<script lang="ts">
export default {
  name: "demo",
  props: {
    id: String,
    href: String,
    status: String,
    channal: String,
    table: String,
    time: String,
    orders: {
      type: Array as () => Array<{
        order: string;
        qty: string;
        optionals: Array<{ optional: string }>;
      }>,
      default: () => [
        {
          order: "",
          qty: "",
          optionals: [
            {
              optional: "",
            },
          ],
        },
      ],
    },
  },
};
</script>
