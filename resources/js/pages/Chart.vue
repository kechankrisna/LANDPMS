<template>
    <div>
        <v-btn @click="fillData()">Randomize</v-btn>
        <v-row row wrap>
            <v-col cols="3">
                <line-chart :chart-data="datacollection"></line-chart>
            </v-col>
            <v-col cols="3">
                <pie-chart :chart-data="datacollection"></pie-chart>
            </v-col>
            <v-col cols="3">
                <radar-chart :chart-data="datacollection"></radar-chart>
            </v-col>
            <v-col cols="3">
                <polar-area-chart
                    :chart-data="datacollection"
                ></polar-area-chart>
            </v-col>
            <v-col cols="3">
                <bar-chart :chart-data="datacollection"></bar-chart>
            </v-col>
            <v-col cols="3">
                <bubble-chart :chart-data="newcollection"></bubble-chart>
            </v-col>
            <v-col cols="3">
                <scatter-chart :chart-data="newcollection"></scatter-chart>
            </v-col>


        </v-row>
    </div>
</template>

<script>
import BarChart from "./../components/BarChart";
import LineChart from "./../components/LineChart";
import PieChart from "./../components/PieChart";
import RadarChart from "./../components/RadarChart";
import PolarAreaChart from "./../components/PolarAreaChart";
import ScatterChart from "./../components/ScatterChart";
import BubbleChart from "./../components/BubbleChart";


export default {
    components: {
        BarChart,
        LineChart,
        PieChart,
        RadarChart,
        PolarAreaChart,
        ScatterChart,
        BubbleChart
    },
    data() {
        return {
            datacollection: null,
            newcollection: null
        };
    },
    mounted() {
        this.fillData();
        
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: [
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt()
                ],
                datasets: [
                    {
                        label: "DATA 1",
                        fill: false,
                        backgroundColor: "#f87979",
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt()
                        ]
                    },
                    {
                        label: "DATA 2",
                        backgroundColor: "aqua",
                        fill: false,
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt()
                        ]
                    },
                    {
                        label: "DATA 3",
                        backgroundColor: "blue",
                        fill: false,
                        data: [
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt(),
                            this.getRandomInt()
                        ]
                    }
                ]
            };
            this.newcollection = {
                labels: [
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt(),
                    this.getRandomInt()
                ],
                datasets: [
                    {
                        label: "DATA 1",
                        fill: false,
                        backgroundColor: "#f87979",
                        borderColor: '#f87979',
                        data: [
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            }
                        ]
                    },
                    {
                        label: "DATA 2",
                        fill: false,
                        backgroundColor: "aqua",
                        borderColor: 'aque',
                        
                        data: [
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt(),
                                
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            }
                        ]
                    },
                    {
                        label: "DATA 3",
                        fill: false,
                        backgroundColor: "blue",
                        borderColor: 'blue',
                        data: [
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            },
                            {
                                x: this.getRandomInt(),
                                y: this.getRandomInt()
                            }
                        ]
                    }
                ]
            };
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
        }
    }
};
</script>
