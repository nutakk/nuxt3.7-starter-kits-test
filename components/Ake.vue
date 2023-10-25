<script lang="ts" setup>
const { mint } = defineProps(['mint']);
const name = ref(mint);
const emit = defineEmits(["onSetName"]);
const dosomething = () =>{
  console.log('mint: ', name.value);
  emit("onSetName", { name: name.value });
}
</script>
<template>
  <div id="page-main" class="page-main">
    Hello Component :: {{ mint }}<br/>
    <input type="text" :model="name" @change="dosomething" />
  </div>
</template>
<style scoped>
</style>