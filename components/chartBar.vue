<template>
    <div>
    <h2>ກຣາສະແດງຄົນທີ່ຖືກແຕ່ລະງວດ</h2>
    <LineChartGenerator
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
    />
</div>
</template>

<script>
import { Bar as LineChartGenerator } from 'vue-chartjs'

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    BarElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement,
    BarElement
)

export default {
    name: 'BarChart',
    components: {
        LineChartGenerator,
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart',
        },
        datasetIdKey: {
            type: String,
            default: 'label',
        },
        width: {
            type: Number,
            default: 400,
        },
        height: {
            type: Number,
            default: 400,
        },
        cssClasses: {
            default: '',
            type: String,
        },
        styles: {
            type: Object,
            default: () => {},
        },
        plugins: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            chartData: {
                labels: [
                    'ງວດທີ1',
                    'ງວດທີ2',
                    'ງວດທີ3',
                    'ງວດທີ4',
                    'ງວດທີ5',
                    'ງວດທີ6',
                    'ງວດທີ7',
                    'ງວດທີ8',
                    'ງວດທີ9',
                    'ງວດທີ10',
                    'ງວດທີ11',
                    'ງວດທີ12',
                ],
                datasets: [
                    {
                        label: 'ຈຳນວນຄົນທີ່ຖືກ',
                        data: [20, 40, 25, 40, 39, 10, 30, 20, 80, 100, 50, 20],
                        borderColor: '#0000FF',
                    },
                ],
            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
            },
        }
    },
}
</script>