import { acceptHMRUpdate, defineStore } from "pinia";

export const useConectivitiesStore = defineStore("connectivitiesStore", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const arr = ref([
    {
      id: "A001",
      href: "#",
      status: "processing",
      channal: "dine in",
      table: "5",
      time: "20.00",
      orders: [
        {
          order: "Mineral Water",
          qty: 2,
          optionals: [
            {
              optional: "Mineral Water11",
            },
            {
              optional: "Mineral Water12",
            },
          ],
        },
      ],
    },
    {
      id: "A001",
      href: "#",
      status: "processing",
      channal: "dine in",
      table: "5",
      time: "20.00",
      orders: [
        {
          order: "Mineral Water",
          qty: 2,
          optionals: [
            {
              optional: "Mineral Water11",
            },
            {
              optional: "Mineral Water12",
            },
          ],
        },
      ],
    },
  ]);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, name, doubleCount, arr, increment };
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useConectivitiesStore, import.meta.hot)
  );
}
