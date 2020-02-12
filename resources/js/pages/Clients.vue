<template>
    <v-app class="px-3">
        <v-row>
            <v-col cols="12" lg="9">
                <v-card class="border-top border-primary">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="clients"
                        :options.sync="options"
                        :server-items-length="totalClients"
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
                                    {{ $t("client") }}
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
                                    @click="initClient"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                    {{ $t("New Client") }}</v-btn
                                >
                                <v-dialog
                                    v-model="dialogClient"
                                    max-width="500px"
                                >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{
                                                editedClient["id"] != null
                                                    ? $t("Edit Client")
                                                    : $t("New Client")
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
                                                                editedClient.name
                                                            "
                                                            :label="
                                                                $t('form.name')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="email"
                                                            v-model="
                                                                editedClient.email
                                                            "
                                                            :label="
                                                                $t('form.email')
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
                                                                editedClient.phone
                                                            "
                                                            :label="
                                                                $t('form.phone')
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    

                                                    

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-select
                                                            chips
                                                            :menu-props="{
                                                                maxHeight: '400'
                                                            }"
                                                            dense
                                                            :items="
                                                                clientselections
                                                            "
                                                            v-model="
                                                                editedClient.user_id
                                                            "
                                                            :label="
                                                                $t(
                                                                    'Reference by'
                                                                )
                                                            "
                                                            item-text="name"
                                                            item-value="id"
                                                        ></v-select>
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
                                                >Cancel</v-btn
                                            >
                                            <v-btn
                                                color="blue darken-1"
                                                text
                                                @click="onSaveClient"
                                                >Save</v-btn
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

                            <v-col cols="4">
                                <v-text-field
                                    v-model="search"
                                    label="Search"
                                    single-line
                                    v-on:keyup.enter="onSearchClient"
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
                                            @click="onSearchClient"
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

                        <template v-slot:item.action="{ item }">
                            <v-icon small class="mr-2" @click="viewItem(item)">
                                mdi-eye
                            </v-icon>
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


            <v-col cols="12" lg="3">
                <v-card class="border-top border-blue">
                    <v-card-title primary-title>
                        {{ $t("Referenced by").toUpperCase() }}
                    </v-card-title>
                    <v-card-text>
                        <v-chip
                            v-if="viewClient.user != null"
                            @click="onFilterByUser(viewClient.user.id)"
                        >
                            {{ viewClient.user.name }}
                        </v-chip>
                    </v-card-text>
                </v-card>
                <v-card class="border-top border-blue mt-3">
                    <v-card-title primary-title>
                        {{ $t("Lands").toUpperCase() }}
                    </v-card-title>
                    <v-card-text>
                        <v-list v-if="viewClient.lands.length > 0">
                            <v-list-item
                                v-for="(land, index) in viewClient.lands"
                                :key="index"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                         <v-icon :size="15"> mdi-map-marker </v-icon> {{ land.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        <v-icon :size="15"> mdi-currency-usd </v-icon> {{ land.price }}
                                    </v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
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
export default {
    data() {
        return {
            snackbar: false,
            isError:false,
            message:"",
            clientselections: [],
            editedClient: {
                id: null,
                name: "",
                email: "",
                phone: "",
                user_id: null
            },
            viewClient: {
                lands: [],
                user: null
            },
            filterByUser:0,
            editedIndex: 0,
            clientId: null,
            dialogClient: false,
            dialogCategory: false,
            itemsPerPage: 10,
            footerprops: {
                "items-per-page-options": [5, 10, 15, 100]
            },
            search: "",
            selected: [],
            showSelect: true,
            totalClients: 0,
            clients: [],
            loading: true,
            options: {},
            headers: [
                {
                    text: this.$t("form.name"),
                    align: "left",
                    sortable: true,
                    value: "name"
                },
                {
                    text: this.$t("form.email"),
                    value: "email",
                    sortable: false
                },
                {
                    text: this.$t("form.phone"),
                    value: "phone",
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
                this.fetchClientFromServer().then(data => {
                    this.clients = data.items;
                    this.totalClients = data.total;
                });
            },
            deep: true
        }
    },

    methods: {
        fetchClientFromServer() {
            this.loading = true;
            var url = `/api/clients/`;

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

            console.log(this.filterByUser)
            if( this.filterByUser > 0 ){
                
                url += `&&filerByField=user_id&&filerByValue=${this.filterByUser}`;
            }

            if (typeof this.search[0] != "undefined") {
                url = `/api/clients/?search=${this.search}`;
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

        initClient() {
            this.editedClient = {
                id: null,
                name: "",
                email: "",
                phone: "",
                user_id: null
            };
            this.viewClient = {
                lands: [],
                user: null
            };
            this.filterByUser = 0,
            this.clientId = null;
            this.dialogClient = true;
            this.fetchClientSelections();
        },

        onSaveClient() {
            const {
                name,
                email,
                phone,
                user_id
            } = this.editedClient;
            let client = {
                name: name,
                email: email,
                phone: phone,
                user_id: user_id
            };
            if (this.clientId == null) {
                // console.log("create");

                axios
                    .post(`/api/clients`, client)
                    .then(result => {
                        // console.log(result);
                        this.clients.push(result.data.data);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('clients.created');

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
                    .put(`/api/clients/${this.clientId}`, client)
                    .then(result => {
                        // console.log(result.data.data);
                        Object.assign(
                            this.clients[this.editedIndex],
                            result.data.data
                        );
                        
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('clients.updated');

                    })
                    .catch(error => {
                        console.log(error.response);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;

                    });
            }

            this.dialogClient = false;
            // console.log("saved");
        },

        deleteItem(item) {
            const index = this.clients.indexOf(item);
            confirm("Are you sure you want to delete this client?") &&
                axios
                    .delete(`/api/clients/${item.id}`)
                    .then(result => {
                        // console.log(result);
                        this.clients.splice(index, 1);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('clients.deleted');

                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;

                    });

            console.log(item);
        },

        onSearchClient() {
            this.fetchClientFromServer().then(data => {
                this.clients = data.items;
                this.totalClients = data.total;
            });
        },
        onCancelSearch() {
            this.search = "";
            this.fetchClientFromServer().then(data => {
                this.clients = data.items;
                this.totalClients = data.total;
            });
        },

        cancel() {
            this.dialogClient = false;
            this.initClient();
            console.log("canceled");
        },
        close() {
            this.dialogClient = false;
            console.log("closed");
        },
        editItem(client) {
            this.editedIndex = this.clients.indexOf(client);
            this.clientId = client.id;
            this.editedClient = Object.assign({}, client);
            this.dialogClient = true;
            console.log(client);
            this.fetchClientSelections();
        },
        viewItem(client) {
            axios
                .get(`/api/clients/${client.id}`)
                .then(result => {
                    console.log(result);
                    this.viewClient = result.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fetchClientSelections() {
            axios
                .get(`/api/users/selections`)
                .then(result => {
                    console.log(result);
                    this.clientselections = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        onFilterByUser(id){
            this.filterByUser = id;
            console.log(id);
            this.fetchClientFromServer().then(data => {
                    this.clients = data.items;
                    this.totalClients = data.total;
            }); 
        }
    }
};
</script>
