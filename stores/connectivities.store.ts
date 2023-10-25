import { acceptHMRUpdate, defineStore } from 'pinia';

export const useConectivitiesStore = defineStore('connectivitiesStore', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
});

if (import.meta.hot){
  import.meta.hot.accept(acceptHMRUpdate(useConectivitiesStore, import.meta.hot));
}