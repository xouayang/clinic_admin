<template>
  <div>
    <LineChart :data="chartData" :option="chartOptions" />
  </div>
</template>
<script>
import { Bar, Line as LineChart } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
);
export default {
  name: "AnalyChart",
  components: { Bar, LineChart },

  data() {
    return {
      chartData: {
        labels: ["ມັງກອນ", "ກຸມພາ", "March", "Apri", "May", "June", "July"],
        datasets: [
          {
            label: "ນັດໝາຍ",
            backgroundColor: "#9155FD",
            data: [0, 15, 20, 9, 1, 14, 8],
          },
        ],
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false, 
          
        },
      },
    };
  },
};
</script>
<style scoped>
* {
  font-family: "Noto Serif Lao", serif;
}
</style>