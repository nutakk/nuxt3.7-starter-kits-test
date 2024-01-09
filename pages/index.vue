<script setup lang="ts">
import { ElButton, ElRow, ElIcon } from "element-plus";
import { Connection } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useConectivitiesStore } from "../stores/connectivities.store";

const router = useRouter();
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});

useHead({
  title: "Hello world...",
  meta: [{ name: "Activities" }],
});

const connectivitiesStore = useConectivitiesStore();
const { name } = storeToRefs(connectivitiesStore);
const { $testPlugin2 } = useNuxtApp();
const changeName = (newName: string) => {
  name.value = newName;
};

const goTest = () => {
  router.push("/test");
};

const xx = (data: string) => {
  return $testPlugin2(data);
};
</script>
<template>
  <div class="flex justify-between gap-3">
    <div class="p-5 rounded-md">
      <span class="i-mdi-bat w-8"></span>
      <span class="i-lucide-alarm-minus"></span>
      <span
        class="i-mdi-home hover:i-mdi-home-alert text-5xl text-green-800"
        v-show="false"
      ></span>
      Hello {{ name }} - {{ xx("aaa") }}
    </div>
    <div class="opacity-70 p-5 rounded-md">
      <el-icon><Connection /></el-icon>
      <el-button type="primary" @click="changeName('pichean')">Ok </el-button>
    </div>
    <div>
      <el-row class="mb-4">
        <el-button disabled>Default</el-button>
        <el-button type="primary" @click="goTest">Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </el-row>

      <el-row>
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </el-row>
    </div>
    <div class="bg-red-500 opacity-70 p-5 rounded-md">World</div>
  </div>
</template>
<style scoped>
.home-enter-from {
  opacity: 0;
}
.home-enter-to {
  opacity: 1;
}
.home-enter-active {
  transition: all 1s ease;
}

.home-leave-from {
  opacity: 1;
}
.home-leave-to {
  opacity: 0;
}
.home-leave-active {
  transition: all 1s ease;
}
</style>
