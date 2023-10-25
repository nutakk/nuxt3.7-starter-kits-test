<script lang="ts" setup>
</script>

<template>
  <div class="h-screen">
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
/* page transaction */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

/* layout transition */
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}

</style>