<script lang="ts" setup>
import { useConectivitiesStore } from "../stores/connectivities.store";
import { storeToRefs } from "pinia";
const connectivitiesStore = useConectivitiesStore();
const { arr } = storeToRefs(connectivitiesStore);
const card = arr.value.length;
const odersCount = arr.value[0].orders.length;
function myFunction(i: any) {
  return arr.value[0].orders[i - 1].optionals.length;
}
</script>

<template>
  <div class="group shadow-xl border-t-4 border-indigo-500 rounded-xl p-5" v-for="k in card">
    <div class="flex justify-between bg-neutral-100 rounded-2xl p-3 mb-1">
      <div class="grid grid-cols content-between">
        <p class="font-bold text-4xl">{{ arr[0].id }}</p>
        <p class="text-2xl text-gray-500">{{ arr[0].channal }}</p>
      </div>
      <div class="grid-cols text-right">
        <p class="text-indigo-500 font-bold">{{ arr[0].status }}</p>
        <p class="font-bold text-2xl">{{ arr[0].time }}</p>
        <p class="text-gray-500">table {{ arr[0].table }}</p>
      </div>
    </div>
    <div class="grid_cols justify-between pt-2">
      <div class="grid-cols-2 w-full" v-for="i in odersCount">
        <div class="grid-rows flex justify-between">
          <p class="font-bold">{{ arr[0].orders[i - 1].order }}</p>
          <p class="text-gray-500 text-sm">{{ arr[0].orders[i - 1].qty }}</p>
        </div>
        <p class="text-gray-500 text-sm" v-for="j in myFunction(i)">
          {{ arr[0].orders[i - 1].optionals[j - 1].optional }}
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
  </div>
</template>

<style></style>
