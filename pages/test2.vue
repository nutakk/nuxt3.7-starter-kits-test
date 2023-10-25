<script lang="ts" setup>
const name = ref('j-dea');
console.log('name :', name.value);

const test = async (test: string) => {
  
}
</script>
<template>
  <div id="page-main" class="page-main">
    <div class="bg-red-400 p-2 flex flex-row md:flex-col">
      <div class="m-2 bg-green-300 md:bg-purple-400 lg:bg-black w-[50%] md:w-full">
        {{ name }}
      </div>
      <div class="m-2 bg-green-300 md:bg-purple-400 lg:bg-black w-[50%] md:w-full">
        zzzz
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>