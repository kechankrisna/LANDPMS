<template>
    <v-app class="px-3">
        <v-row >
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

            <v-col cols="12" lg="3" sm="12" style="max-height:60px;">
                <v-select
                    :items="locations"
                    v-model="location"
                    label="Select location"
                    item-text="name"
                    item-value="id"
                    solo
                    @change="fetchReports"
                ></v-select>
            </v-col>

            <v-col cols="12" lg="3" sm="12" style="max-height:60px;" >
                <v-select
                    :items="users"
                    v-model="user"
                    label="Select user"
                    item-text="name"
                    item-value="id"
                    solo
                    @change="fetchReports"
                    
                ></v-select>
            </v-col>
            <v-col cols="12" lg="2" sm="12" style="max-height:60px;">
                <v-select
                    solo
                    :items="types"
                    v-model="type"
                    label="Chart Type"
                ></v-select>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" lg="12">
                <v-card>
                    <v-tabs @change="fetchReports" v-model="currentTab">
                        <v-tab v-for="(tab, index) in tabTypes" :key="index">
                            {{ $t(tab).toUpperCase() }}
                        </v-tab>
                    </v-tabs>
                    <v-card-text>
                        <line-chart
                            v-show="type == 'LINE'"
                            :height="150"
                            :chart-data="datas"
                        ></line-chart>
                        <bar-chart
                            v-show="type == 'BAR'"
                            :height="150"
                            :chart-data="datas"
                        ></bar-chart>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="6">
                <v-card>
                    <v-card-title primary-title>
                        {{ $t('users') }}
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            {{ $t("form.name") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.email") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.phone") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.created_at") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.updated_at") }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="user in lastestUsers"
                                        :key="user.id"
                                    >
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.name }}</td>
                                        <td>{{ user.phone }}</td>
                                        <td>{{ user.created_at ? moment(user.created_at).format("YYYY-MM-DD") : '' }}</td>
                                        <td>{{ user.updated_at ? moment(user.updated_at).format("YYYY-MM-DD") : '' }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="12" lg="6">
                <v-card>
                    <v-card-title primary-title>
                        {{ $t('clients') }}
                    </v-card-title>
                    <v-card-text>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            {{ $t("form.name") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.email") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.phone") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.created_at") }}
                                        </th>
                                        <th class="text-left">
                                            {{ $t("form.updated_at") }}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="client in lastestClients"
                                        :key="client.id"
                                    >
                                        <td>{{ client.name }}</td>
                                        <td>{{ client.name }}</td>
                                        <td>{{ client.phone }}</td>
                                        <td>{{ client.created_at ? moment(client.created_at).format("YYYY-MM-DD") : '' }}</td>
                                        <td>{{ client.updated_at ? moment(client.updated_at).format("YYYY-MM-DD") : '' }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>
    </v-app>
</template>

<script>
import moment from "moment";
import LineChart from "./../components/LineChart.vue";
import BarChart from "./../components/BarChart.vue";
import HorizontalBar from "./../components/HorizontalBar.vue";

export default {
    components: {
        LineChart,
        BarChart,
        HorizontalBar
    },
    data() {
        return {
            types: ["BAR", "LINE"],
            type: "LINE",
            currentTab: 0,
            datas: null,
            range: true,
            showCurrent: true,
            pickers: [],
            pickedString: "",
            startDate: null,
            endDate: null,
            min: null,
            max: new Date().toISOString().substr(0, 10),
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: new Date().toISOString().substr(0, 10),
            calenderMenu: false,
            rangeSidebar: null,
            rangeSidebars: [],
            locations: [],
            location: 0,
            user: 0,
            users: [],
            tabTypes: ["sales", "revenues", "expenses"],
            lastestUsers: [],
            lastestClients: []
        };
    },

    mounted() {
        this.init();
        this.fetchLocations();
        this.fetchUsers();
        this.fetchReports();
        this.fetchLatestUser();
        this.fetchLatestClient();
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
                this.fetchReports();
            }
        },
        onDone() {
            console.log("onDone");
            this.calenderMenu = false;
        },
        onCancel() {
            console.log("onCancel");
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
            this.fetchReports();
        },
        onNext() {
            console.log("onNext");
        },
        onPrevious() {
            console.log("onPrevious");
        },

        onChangeLocation() {
            console.log(this.location);
            this.fetchReports();
        },
        fetchReports() {
            const reportType = this.tabTypes[this.currentTab];

            var url = `/api/reports?from=${this.startDate}&to=${this.endDate}&location_id=${this.location}&user_id=${this.user}&reportType=${reportType}`;

            axios
                .get(url)
                .then(result => {
                    console.log(result.data);
                    const datas = result.data;
                    this.datas = {
                        labels: datas[0],
                        datasets: [
                            {
                                label: this.$t(reportType),
                                fill: false,
                                backgroundColor: "red",
                                data: datas[1]
                            }
                        ]
                    };
                })
                .catch(err => {
                    console.log(err);
                });
        },

        fetchUsers() {
            axios
                .get(`/api/users/selections`)
                .then(result => {
                    console.log(result);
                    this.users = [
                        {
                            id: 0,
                            name: "All Users"
                        },
                        ...result.data
                    ];
                })
                .catch(err => {
                    console.log(err);
                });
        },

        fetchLocations() {
            axios
                .get(`/api/locations/selections`)
                .then(result => {
                    console.log(result);
                    this.locations = [
                        {
                            id: 0,
                            name: "All Locations"
                        },
                        ...result.data
                    ];
                })
                .catch(err => {
                    console.log(err);
                });
        },

        fetchLatestUser(){
            axios
                .get(`/api/users/latest`)
                .then(result => {
                    console.log(result);
                    this.lastestUsers = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fetchLatestClient(){
            axios
                .get(`/api/clients/latest`)
                .then(result => {
                    console.log(result);
                    this.lastestClients = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
