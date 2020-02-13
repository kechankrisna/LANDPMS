<template>
    <v-app class="px-3">
        <v-row>
            <v-col cols="12" lg="9">
                <v-card class="border-top border-primary">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="incomes"
                        :options.sync="options"
                        :server-items-length="totalIncomes"
                        :loading="loading"
                        :items-per-page="itemsPerPage"
                        :footer-props="footerprops"
                        :show-select="showSelect"
                        loading-text="Loading... Please wait"
                    >
                        <template v-slot:top>
                            <v-toolbar color="white" flat>
                                <v-toolbar-title>
                                    <v-icon :size="45">
                                        mdi-account-multiple
                                    </v-icon>
                                    {{ $t("income") }}
                                </v-toolbar-title>
                                <v-divider
                                    class="mx-4"
                                    inset
                                    vertical
                                ></v-divider>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="primary"
                                    rounded
                                    dark
                                    class="mb-2"
                                    @click="initIncome"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                    {{ $t("New Income") }}</v-btn
                                >
                                <v-dialog
                                    v-model="dialogIncome"
                                    max-width="500px"
                                >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{
                                                editedIncome["id"] != null
                                                    ? $t("Edit Income")
                                                    : $t("New Income")
                                            }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedIncome.title
                                                            "
                                                            :label="
                                                                $t('form.title')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            v-model="
                                                                editedIncome.description
                                                            "
                                                            :label="
                                                                $t('form.description')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="number"
                                                            v-model="
                                                                editedIncome.amount
                                                            "
                                                            :label="
                                                                $t('form.amount')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-menu
                                                            v-model="dateMenu"
                                                            :close-on-content-click="
                                                                false
                                                            "
                                                            :nudge-right="40"
                                                            transition="scale-transition"
                                                            offset-y
                                                            min-width="290px"
                                                        >
                                                            <template
                                                                v-slot:activator="{
                                                                    on
                                                                }"
                                                            >
                                                                <v-text-field
                                                                    prepend-inner-icon="mdi-calendar-check"
                                                                    :label="
                                                                        $t(
                                                                            'Date'
                                                                        )
                                                                    "
                                                                    v-model="
                                                                        editedIncome.received_at
                                                                    "
                                                                    readonly
                                                                    v-on="on"
                                                                ></v-text-field>
                                                            </template>
                                                            <v-date-picker
                                                                v-model="
                                                                    editedIncome.received_at
                                                                "
                                                                @input="
                                                                    dateMenu = false
                                                                "
                                                            ></v-date-picker>
                                                        </v-menu>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="close"
                                                >{{$t('form.cancel')}}</v-btn
                                            >
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="onSaveIncome"
                                                >{{$t('form.save')}}</v-btn
                                            >
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>

                                <v-menu offset-y bottom left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon v-on="on">
                                            <v-icon>
                                                mdi-menu-down
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list>
                                        <v-list-item dense>
                                            <v-list-item-icon>
                                                <v-icon>
                                                    mdi-file-excel-outline
                                                </v-icon>
                                            </v-list-item-icon>
                                            <v-list-item-content left>
                                                <v-list-item-title>
                                                    Exports Excel
                                                </v-list-item-title>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-toolbar>

                            <v-col cols="12" sm="12" md="4">
                                <v-text-field
                                    v-model="search"
                                    label="Search"
                                    single-line
                                    v-on:keyup.enter="onSearchIncome"
                                >
                                    <template v-slot:append>
                                        <v-btn
                                            v-if="search != ''"
                                            @click="onCancelSearch"
                                            small
                                            icon
                                            class="pa-0 ma-0"
                                        >
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                        <v-btn
                                            @click="onSearchIncome"
                                            small
                                            icon
                                            class="pa-0 ma-0"
                                        >
                                            <v-icon> mdi-crosshairs </v-icon>
                                        </v-btn>
                                    </template>
                                </v-text-field>
                            </v-col>
                        </template>

                        <template v-slot:item.selected="{ item }">
                            <v-simple-checkbox
                                color="green"
                                v-model="item.selected"
                            >
                            </v-simple-checkbox>
                        </template>

                        <template  v-slot:item.received_at="{ item }">
                            <span>{{ moment(item.received_at).format('DD-MMM-Y') }}</span>
                        </template>

                        <template  v-slot:item.amount="{ item }">
                            <span class="green--text font-weight-bold"> <v-icon :size="15"> mdi-currency-usd </v-icon> {{ item.amount }}</span>
                        </template>

                        <template v-slot:item.action="{ item }">
                            <!-- <v-icon small class="mr-2" @click="viewItem(item)">
                                mdi-eye
                            </v-icon> -->
                            <v-icon small class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                            <v-icon small @click="deleteItem(item)">
                                mdi-trash-can-outline
                            </v-icon>
                        </template>

                        <template v-slot:item.name="{ item }">
                            <v-icon class="mr-5" color="primary">
                                mdi-account-circle-outline
                            </v-icon>
                            <span class="caption">{{ item.name }}</span>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>

        <v-snackbar :color="isError ? 'error' : 'success'" v-model="snackbar">
            {{ message }}
            <v-spacer></v-spacer>
            <v-btn text @click="snackbar = !snackbar">close</v-btn>
        </v-snackbar>
    </v-app>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            snackbar: false,
            isError: false,
            message: "",
            incomeselections: [],
            editedIncome: {
                id: null,
                title: "",
                description: "",
                amount: "",
                land_id: null,
                user_id: null,
                received_at: null
            },
            dateMenu: false,
            viewIncome: {},
            editedIndex: 0,
            incomeId: null,
            dialogIncome: false,
            itemsPerPage: 10,
            footerprops: {
                "items-per-page-options": [5, 10, 15, 100]
            },
            search: "",
            selected: [],
            showSelect: true,
            totalIncomes: 0,
            incomes: [],
            loading: true,
            options: {},
            headers: [
                {
                    text: this.$t("form.title"),
                    align: "left",
                    sortable: true,
                    value: "title"
                },
                {
                    text: this.$t("form.description"),
                    value: "description",
                    sortable: false
                },
                {
                    text: this.$t("form.amount"),
                    value: "amount",
                    sortable: false
                },
                {
                    text: this.$t("form.received_at"),
                    value: "received_at",
                    sortable: false
                },
                {
                    text: this.$t("form.actions"),
                    value: "action",
                    sortable: false
                }
            ]
        };
    },
    watch: {
        options: {
            handler() {
                // console.log(this.options);
                this.fetchIncomeFromServer().then(data => {
                    this.incomes = data.items;
                    this.totalIncomes = data.total;
                });
            },
            deep: true
        }
    },

    methods: {
        fetchIncomeFromServer() {
            this.loading = true;
            var url = `/api/incomes/`;

            if (typeof this.options.itemsPerPage == "number") {
                url += `?paginate=${this.options.itemsPerPage}`;
                if (this.options.page) {
                    console.log(`page ${this.options.page}`);
                    url += `&&page=${this.options.page}`;
                }
            }
            if (typeof this.options.sortBy[0] != "undefined") {
                url += `&&sortBy=${this.options.sortBy[0]}`;
            }

            if (this.options.sortDesc.length > 0) {
                console.log(this.options.sortDesc);
                url += `&&sortDesc=${this.options.sortDesc[0]}`;
            }

            if (typeof this.search[0] != "undefined") {
                url = `/api/incomes/?search=${this.search}`;
            }

            console.log("loaded");

            return new Promise((resolve, reject) => {
                axios
                    .get(url)
                    .then(result => {
                        // console.log(result.data)

                        const {
                            sortBy,
                            sortDesc,
                            page,
                            itemsPerPage
                        } = this.options;
                        let items = [];
                        if (typeof result.data.data != "undefined") {
                            items = result.data.data; //!
                        }
                        let total = 0;
                        if (typeof result.data.meta != "undefined") {
                            total = result.data.meta.total; //!
                            this.footerprops["items-per-page-options"] = [
                                5,
                                10,
                                15,
                                100,
                                total
                            ];
                        } else {
                            total = result.data.data.length;
                            this.footerprops["items-per-page-options"] = [
                                total
                            ];
                        }

                        // console.log(result.data.meta.total);

                        this.loading = false;
                        resolve({
                            items,
                            total
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        reject(err);
                    });
            });
        },

        initIncome() {
            this.editedIncome = {
                id: null,
                title: "",
                description: "",
                amount: "",
                land_id: null,
                user_id: null,
                received_at: null
            };
            this.viewIncome = {};
            this.incomeId = null;
            this.dialogIncome = true;
            this.fetchIncomeSelections();
        },

        onSaveIncome() {
            const {
                title,
                description,
                amount,
                land_id,
                user_id,
                received_at
            } = this.editedIncome;
            let income = {
                title: title,
                description: description,
                amount: amount,
                land_id: land_id,
                user_id: user_id,
                received_at: received_at
            };
            if (this.incomeId == null) {
                // console.log("create");

                axios
                    .post(`/api/incomes`, income)
                    .then(result => {
                        // console.log(result);
                        this.incomes.push(result.data.data);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("incomes.created");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            } else {
                // console.log('update');
                axios
                    .put(`/api/incomes/${this.incomeId}`, income)
                    .then(result => {
                        // console.log(result.data.data);
                        Object.assign(
                            this.incomes[this.editedIndex],
                            result.data.data
                        );

                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("incomes.updated");
                    })
                    .catch(error => {
                        console.log(error.response);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            }

            this.dialogIncome = false;
            // console.log("saved");
        },

        deleteItem(item) {
            const index = this.incomes.indexOf(item);
            confirm("Are you sure you want to delete this income?") &&
                axios
                    .delete(`/api/incomes/${item.id}`)
                    .then(result => {
                        // console.log(result);
                        this.incomes.splice(index, 1);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t("incomes.deleted");
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });

            console.log(item);
        },

        onSearchIncome() {
            this.fetchIncomeFromServer().then(data => {
                this.incomes = data.items;
                this.totalIncomes = data.total;
            });
        },
        onCancelSearch() {
            this.search = "";
            this.fetchIncomeFromServer().then(data => {
                this.incomes = data.items;
                this.totalIncomes = data.total;
            });
        },

        cancel() {
            this.dialogIncome = false;
            this.initIncome();
            console.log("canceled");
        },
        close() {
            this.dialogIncome = false;
            console.log("closed");
        },
        editItem(income) {
            this.editedIndex = this.incomes.indexOf(income);
            this.incomeId = income.id;
            var getIncome = income;
            getIncome.received_at = moment(getIncome.received_at).format("YYYY-MM-DD");
            this.editedIncome = Object.assign({}, getIncome);
            this.dialogIncome = true;
            console.log(income);
            this.fetchIncomeSelections();
        },
        // viewItem(income) {
        //     axios
        //         .get(`/api/incomes/${income.id}`)
        //         .then(result => {
        //             console.log(result);
        //             this.viewIncome = result.data.data;
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         });
        // },
        fetchIncomeSelections() {
            axios
                .get(`/api/users/selections`)
                .then(result => {
                    console.log(result);
                    this.incomeselections = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
    }
};
</script>
