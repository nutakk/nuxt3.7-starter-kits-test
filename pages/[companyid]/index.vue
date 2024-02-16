<script lang="ts" setup>
const route = useRoute();
const { companyid } = route.params;
</script>
<template>
  <div id="page-main" class="page-main">{{ companyid }} {{ 1 + 1 }}</div>
</template>
<style scoped></style>
