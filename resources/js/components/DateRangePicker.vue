<template>
    <div>
        <v-row>
            <v-col cols="12" lg="3" sm="12" max-width="500">
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
                            v-model="picker"
                            text-lg-center
                            readonly
                            v-on="on"
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
                                    class="pt-0"
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
                                        v-model="picker"
                                        full-width
                                    ></v-date-picker>

                                    <v-layout>
                                        <v-row class="px-3">
                                            <v-col cols="6" class="py-0">
                                                <v-text-field
                                                    name="Start date"
                                                    label="Start date"
                                                    id="start_date"
                                                    title="Start day"
                                                    v-model="min"
                                                ></v-text-field>
                                            </v-col>
                                            <v-col cols="6" class="py-0">
                                                <v-text-field
                                                    name="End date"
                                                    label="End date"
                                                    id="end_date"
                                                    title="End day"
                                                    v-model="max"
                                                ></v-text-field>
                                            </v-col>
                                        </v-row>
                                    </v-layout>
                                </v-col>
                                <v-col cols="12" sm="4" class="pa-0">
                                    <v-list dense>
                                        <v-list-item-group
                                            v-model="calendarSidbar"
                                            color="primary"
                                        >
                                            <v-list-item
                                                v-for="(item,
                                                i) in calendarSidbars"
                                                :key="i"
                                                @click="onSelectPeriod"
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
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {

            range: true,
            showCurrent: true,
            picker: [],
            min: "2016-06-15",
            max: "2020-02-12",
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: new Date().toISOString().substr(0, 10),
            calenderMenu: false,
            calendarSidbar: null,
            calendarSidbars: [{
                    text: "Today"
                },
                {
                    text: "Yesterday"
                },
                {
                    text: "This week"
                },
                {
                    text: "Last week"
                },
                {
                    text: "This month"
                },
                {
                    text: "Last month"
                },
                {
                    text: "Last 7 days"
                },
                {
                    text: "Last 30 days"
                },
            ]
        };
    },
    methods: {

        onChange(e) {
            console.log(e);
        },
        onDone() {
            console.log("onDone");
            this.calenderMenu = false
        },
        onCancel() {
            console.log("onCancel");
            this.calenderMenu = false
        },
        onSelectPeriod(e){
            console.log(e);
        },
        onNext(){
            console.log("onNext");
        },
        onPrevious(){
            console.log("onPrevious");
        }
    },
};
</script>
