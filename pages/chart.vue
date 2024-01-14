<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script lang="ts" setup>
import Chart from "chart.js/auto";

const labels = ["jan", "feb", "feb", "feb", "feb", "feb"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "my chart",
      backgroundColor: "rgb(255,99,143)",
      borderColor: "rgb(255,99,142)",
      data: [0, 9, 5, 2, 34, 21, 14],
    },
    {
      label: "my chart",
      backgroundColor: "rgb(255,99,143)",
      borderColor: "rgb(255,99,142)",
      data: [0, 10, 5, 2, 34, 21, 14],
    },
  ],
};
const config: any = {
  type: "line",
  data: data, // Corrected this line
  options: {},
};

onMounted(() => {
  const canvasElement = document.getElementById("myChart");

  if (canvasElement instanceof HTMLCanvasElement) {
    const myChart = new Chart(canvasElement, config);
  } else {
    console.error("Canvas element not found");
  }
});
</script>
