<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
      >
        <Demo v-for="post in posts" :key="post.id" v-bind="post" />
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import Demo from "~/components/Demo.vue";

export default {
  setup() {
    const posts = ref([
      {
        id: "A001",
        component: "Demo",
        href: "#",
        status: "Pendding",
        channal: "Take Away",
        table: "01",
        time: "12.00",
      },
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

    return {
      posts,
    };
  },
};
</script>
