<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"
    >
      <!-- <el-button type="primary" @click="showComponent('ComponentA')"
        >Component A</el-button
      >
      <el-button type="success" @click="showComponent('ComponentB')"
        >Component B</el-button
      > -->

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 mt-2"
      >
        <Demo
          v-if="currentComponent === 'ComponentA'"
          v-for="post in posts1"
          :key="post.id"
          v-bind="post"
        />
        <Demo
          v-if="currentComponent === 'ComponentB'"
          v-for="post in posts2"
          :key="post.id"
          v-bind="post"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const currentComponent = ref("ComponentA");

const posts1 = ref([
  {
    id: "A001",
    component: "Demo",
    href: "#",
    status: "Pendding",
    channal: "Take Away",
    table: "01",
    time: "12.00",
  },
]);
const posts2 = ref([
  {
    id: "A002",
    component: "Demo",
    href: "#",
    status: "Pendding",
    channal: "Take Away",
    table: "01",
    time: "12.00",
  },
]);
// function showComponent(componentName) {
//   currentComponent.value = componentName;
//   console.log(componentName);
// }
</script>
