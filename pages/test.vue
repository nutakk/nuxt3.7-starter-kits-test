<script lang="ts" setup>
const router = useRouter();

const back = () => {
  router.push('/');
}
</script>
<template>
  <div id="page-main" class="page-main">
    Hello test <span @click="back" class="text-lg text-red-500 cursor-pointer mx-3">back</span>
  </div>
</template>
<style scoped>
</style>