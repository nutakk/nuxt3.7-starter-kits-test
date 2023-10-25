<script lang="ts" setup>
const route = useRoute();
const { companyid, id } = route.params;

definePageMeta({
  layout: 'login',
});

const name = ref('ake');
const testChange = () => {
  console.log('===> ', 'hello' + name.value);
  
}
</script>
<template>
  <div id="page-main" class="page-main">
    {{ companyid }} : {{ id }} <input type="text" :value="name" @change="testChange()" />
  </div>
</template>
<style scoped>
</style>