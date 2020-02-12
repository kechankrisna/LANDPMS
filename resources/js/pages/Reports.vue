<template>
    <v-app>
        <v-container grid-list-xs>
            <v-row>
                <v-col cols="12" lg="4" sm="12" max-width="500" style="max-height:60px;">
                <!-- Date field -->
                <v-menu
                    ref="calenderMenu"
                    v-model="calenderMenu"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    max-width="500px"
                >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                            solo
                            v-model="pickedString"
                            readonly
                            v-on="on"
                            class="centered-input"
                        >
                            <template v-slot:prepend-inner>
                                <v-btn
                                    style="border:1px solid grey;"
                                    class="pa-0 ma-0"
                                    text
                                    icon
                                    color="text"
                                    @click="onPrevious"
                                >
                                    <v-icon>mdi-chevron-left</v-icon>
                                </v-btn>
                            </template>

                            <template v-slot:append>
                                <v-btn
                                    style="border:1px solid grey;"
                                    class="pa-0 ma-0"
                                    text
                                    icon
                                    color="text"
                                    @click="onNext"
                                >
                                    <v-icon>mdi-chevron-right</v-icon>
                                </v-btn>
                            </template>
                        </v-text-field>
                    </template>

                    <!-- pop up date -->
                    <v-card>
                        <v-card-text class="ma-0 pa-0">
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="8"
                                    class="py-0"
                                    style="border-right:1px solid #e6e6e6;"
                                >
                                    <v-date-picker
                                        style="box-shadow:none;"
                                        no-title
                                        success
                                        landscape
                                        :max="max"
                                        @change="onChange"
                                        :range="range"
                                        :show-current="showCurrent"
                                        v-model="pickers"
                                        full-width
                                    ></v-date-picker>

                                    <v-layout>
                                        <v-row class="px-3">
                                            <v-col cols="6" class="py-0">
                                                <v-text-field
                                                    prepend-inner-icon="mdi-calendar"
                                                    :label="$t('Start date')"
                                                    id="start_date"
                                                    :title="$t('Start date')"
                                                    v-model="startDate"
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="py-0">
                                                <v-text-field
                                                    prepend-inner-icon="mdi-calendar"
                                                    :label="$t('End date')"
                                                    id="end_date"
                                                    :title="$t('End date')"
                                                    v-model="endDate"
                                                    readonly
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-layout>
                                </v-col>
                                <v-col cols="12" sm="4" class="pa-0 d-none d-lg-block d-md-block d-md-flex">
                                    <v-list dense>
                                        <v-list-item-group
                                            v-model="rangeSidebar"
                                            color="primary"
                                        >
                                            <v-list-item
                                                v-for="(item,
                                                i) in rangeSidebars"
                                                :key="i"
                                                @click="onSelectRange(item)"
                                            >
                                                <v-list-item-content>
                                                    <v-list-item-title
                                                        v-text="item.text"
                                                    ></v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                        </v-list-item-group>
                                    </v-list>
                                </v-col>
                            </v-row>
                            <v-divider class="pa-0 ma-0"></v-divider>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text color="black" @click="onCancel"
                                >CANCEL</v-btn
                            >
                            <v-btn text color="primary" @click="onDone"
                                >DONE</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-menu>
            </v-col>

                <v-col cols="12" lg="8">
                <v-card>
                    <v-card-title >
                        <v-icon> mdi-cash </v-icon> {{ $t('incomes') }}
                    </v-card-title>

                    <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">{{ $t('form.date') }}</th>
                                            <th class="text-left">{{ $t('form.title') }}</th>
                                            <th class="text-left">{{ $t('form.description') }}</th>
                                            <th class="text-left">{{ $t('form.amount') }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in incomes" :key="item.name">
                                            <td>{{ item.received_at }}</td>
                                            <td>{{ item.title }}</td>
                                            <td>{{ item.description }}</td>
                                            <td>{{ item.amount }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>


                        <v-card-title >
                        <v-icon> mdi-cash-marker</v-icon> {{ $t('expense') }}
                    </v-card-title>

                    <v-card-text>
                            <v-simple-table>
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th class="text-left">{{ $t('form.date') }}</th>
                                            <th class="text-left">{{ $t('form.title') }}</th>
                                            <th class="text-left">{{ $t('form.description') }}</th>
                                            <th class="text-left">{{ $t('form.amount') }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in expenses" :key="item.name">
                                            <td>{{ item.paid_at }}</td>
                                            <td>{{ item.title }}</td>
                                            <td>{{ item.description }}</td>
                                            <td>{{ item.amount }}</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card-text>


                        <v-card-actions>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-action>
                                        <v-icon> mdi-bank </v-icon>
                                    </v-list-item-action>

                                    <v-list-item-title :class=" totalIncome - totalExpense >=0 ? 'green--text': 'red--text' " >
                                        {{totalIncome - totalExpense}}
                                    </v-list-item-title>

                                    <v-list-item-subtitle>
                                        {{ $t('balance') }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-card-actions>
                    
                </v-card>
                
                </v-col>
            </v-row>            
        </v-container>
    </v-app>
</template>

<script>
import moment from 'moment';



export default {

    data() {
        return {
            incomes:[],
            expenses:[],
            totalIncome:0.00,
            totalExpense:0.00,

            range: true,
            showCurrent: true,
            pickers: [],
            pickedString: "",
            startDate: null,
            endDate: null,
            min: null,
            max: moment().format("YYYY-MM-DD"),
            date: moment().format("YYYY-MM-DD"),
            dateFormatted: moment().format("YYYY-MM-DD"),
            calenderMenu: false,
            rangeSidebar: null,
            rangeSidebars: [],
        };
    },

    mounted() {
        this.init();
        this.fetchReport();
    },

    methods: {

        init() {
            this.startDate = moment()
                .startOf("month")
                .format("YYYY-MM-DD");
            this.endDate = moment().format("YYYY-MM-DD");
            this.pickedString =
                moment(this.startDate).format("MMM DD, YYYY") +
                " - " +
                moment(this.endDate).format("MMM DD, YYYY");
            this.pickers = [this.startDate, this.endDate];

            this.rangeSidebars = [
                {
                    text: this.$t("Today"),
                    from: moment().format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                },
                {
                    text: this.$t("Yesterday"),
                    from: moment()
                        .subtract(1, "days")
                        .format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                },
                {
                    text: this.$t("This week"),
                    from: moment()
                        .startOf("week")
                        .format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                },
                {
                    text: this.$t("Last week"),
                    from: moment()
                        .subtract(14, "days")
                        .format("YYYY-MM-DD"),
                    to: moment()
                        .subtract(7, "days")
                        .format("YYYY-MM-DD")
                },
                {
                    text: this.$t("This month"),
                    from: moment()
                        .startOf("month")
                        .format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                },
                {
                    text: this.$t("Last month"),
                    from: moment()
                        .subtract(1, "month")
                        .startOf("month")
                        .format("YYYY-MM-DD"),
                    to: moment()
                        .subtract(1, "month")
                        .endOf("month")
                        .format("YYYY-MM-DD")
                },
                {
                    text: this.$t("Last 7 days"),
                    from: moment()
                        .subtract(6, "days")
                        .format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                },
                {
                    text: this.$t("Last 30 days"),
                    from: moment()
                        .subtract(29, "days")
                        .format("YYYY-MM-DD"),
                    to: moment().format("YYYY-MM-DD")
                }
            ];
        },
        //!DateRange Picker function
        onChange(durations) {
            if (durations.length == 2) {
                if (moment(durations[0]) > moment(durations[1])) {
                    this.pickers = durations.reverse();
                    //!
                }

                this.startDate = this.pickers[0];
                this.endDate = this.pickers[1];
                this.pickedString =
                    moment(this.startDate).format("MMM DD, YYYY") +
                    " - " +
                    moment(this.endDate).format("MMM DD, YYYY");
                console.log(durations);
                this.fetchReport();
            }
        },
        onDone() {
            // console.log("onDone");
            this.calenderMenu = false;
        },
        onCancel() {
            // console.log("onCancel");
            this.calenderMenu = false;
        },
        onSelectRange(date) {
            this.startDate = date.from;
            this.endDate = date.to;
            this.pickers = [date.from, date.to];
            this.pickedString =
                moment(this.startDate).format("MMM DD, YYYY") +
                " - " +
                moment(this.endDate).format("MMM DD, YYYY");
            console.log(date.from, date.to);
            this.fetchReport();
        },
        onNext() {
            console.log("onNext");
        },
        onPrevious() {
            console.log("onPrevious");
        },

        fetchReport(){
            this.fetchIncomes();
            this.fetchExpenses();
        },
        
        fetchIncomes(){
            let url = `api/reports/statement?from=${this.startDate}&to=${this.endDate}&reportType=incomes`;
            axios.get(url).then((result) => {
                // console.log(result);
                this.incomes = result.data;
                result.data.forEach(i => {
                    this.totalIncome += parseFloat(i.amount);
                });
            }).catch((err) => {
                console.log(err)
            });
        },
        fetchExpenses(){
            let url = `api/reports/statement?from=${this.startDate}&to=${this.endDate}&reportType=expenses`;
            axios.get(url).then((result) => {
                // console.log(result);
                this.expenses = result.data;
                result.data.forEach(e => {
                    this.totalExpense += parseFloat(e.amount);
                });
            }).catch((err) => {
                // console.log(err)
            });
        }

    }
};
</script>
