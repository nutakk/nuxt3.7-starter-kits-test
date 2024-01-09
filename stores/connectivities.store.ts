import { acceptHMRUpdate, defineStore } from "pinia";

export const useConectivitiesStore = defineStore("connectivitiesStore", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const arr = ref([
    {
      id: "A001",
      href: "#",
      status: "Processing",
      channal: "dine in",
      table: "5",
      time: "20.00",
      orders: [
        {
          order: "Mineral Water",
          qty: 2,
          optionals: [
            {
              optional: "Ice",
            },
          ],
        },
        {
          order: "Hamburger",
          qty: 1,
          optionals: [
            {
              optional: "No Mayonnause",
            },
            {
              optional: "No Lettuce",
            },
          ],
        },
      ],
    },
    {
      id: "A002",
      href: "#",
      status: "Completely",
      channal: "take away",
      table: "2",
      time: "18.00",
      orders: [
        {
          order: "Mineral Water",
          qty: 5,
          optionals: [
            {
              optional: "Ice",
            },
          ],
        },
        {
          order: "Hamburger",
          qty: 1,
          optionals: [
            {
              optional: "No Mayonnause",
            },
            {
              optional: "No Lettuce",
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
