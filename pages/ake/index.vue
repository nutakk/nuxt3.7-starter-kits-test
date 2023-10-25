<script lang="ts" setup>
const getName = (e) => {
  console.log('xxx: ', e);
}

const data = ref([

])
</script>
<template>
  <div id="page-main" class="page-main">
    Helo ake
    <div 
    class="text-red-500"
    :class="{
      'text-2xl': true,
      'font-bold': true,
    }">
      Hello inline
    </div>
    <Ake :mint="i" @onSetName="getName" v-for="i in 10"/>
  </div>
</template>
<style scoped>
</style>