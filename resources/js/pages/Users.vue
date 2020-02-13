<template>
    <v-app class="px-3">
        <v-row>
            <v-col cols="12" lg="8">
                <v-card class="border-top border-primary">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="users"
                        :options.sync="options"
                        :server-items-length="totalUsers"
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
                                        mdi-folder-account-outline
                                    </v-icon>
                                    {{ $t("user") }}
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
                                    @click="initUser"
                                >
                                    <v-icon>mdi-plus</v-icon>
                                    {{ $t("New User") }}</v-btn
                                >
                                <v-dialog
                                    v-model="dialogUser"
                                    max-width="500px"
                                >
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{
                                                editedUser["id"] != null
                                                    ? $t("Edit User")
                                                    : $t("New User")
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
                                                                editedUser.name
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
                                                                editedUser.email
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
                                                                editedUser.phone
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
                                                        <v-text-field
                                                            type="password"
                                                            v-model="
                                                                editedUser.password
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.password'
                                                                )
                                                            "
                                                        ></v-text-field>
                                                    </v-col>

                                                    <v-col
                                                        cols="12"
                                                        sm="12"
                                                        md="12"
                                                    >
                                                        <v-text-field
                                                            type="password"
                                                            v-model="
                                                                editedUser.password_confirmation
                                                            "
                                                            :label="
                                                                $t(
                                                                    'form.password_confirmation'
                                                                )
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
                                                                userselections
                                                            "
                                                            v-model="
                                                                editedUser.reference_id
                                                            "
                                                            :label="
                                                                $t(
                                                                    'reference by'
                                                                )
                                                            "
                                                            item-text="name"
                                                            item-value="id"
                                                        ></v-select>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        sm="6"
                                                        md="6"
                                                    >
                                                        <v-switch
                                                            :label="
                                                                $t(
                                                                    'form.active'
                                                                )
                                                            "
                                                            v-model="
                                                                editedUser.active
                                                            "
                                                        ></v-switch>
                                                    </v-col>

                                                    <v-col
                                                        cols="6"
                                                        sm="6"
                                                        md="6"
                                                    >
                                                        <v-switch
                                                            :label="
                                                                $t('form.admin')
                                                            "
                                                            v-model="
                                                                editedUser.isAdmin
                                                            "
                                                        ></v-switch>
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
                                                @click="onSaveUser"
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

                            <v-col cols="4">
                                <v-text-field
                                    v-model="search"
                                    label="Search"
                                    single-line
                                    v-on:keyup.enter="onSearchUser"
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
                                            @click="onSearchUser"
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

                        <template v-slot:item.active="{ item }">
                            <v-icon > {{item.active == 1 || item.active == true ? 'mdi-account-check' : 'mdi-account-off-outline' }}  </v-icon>
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

            <v-col cols="12" lg="4">
                <v-card class="border-top border-blue">
                    <v-card-title primary-title>
                        {{ $t("referenced_by").toUpperCase() }}
                    </v-card-title>
                    <v-card-text>
                        <v-chip
                            v-if="viewUser.reference != null"
                            @click="viewItem(viewUser.reference)"
                        >
                            {{ viewUser.reference.name }}
                        </v-chip>
                    </v-card-text>
                </v-card>
                <v-card class="border-top border-blue mt-3">
                    <v-card-title primary-title>
                        {{ $t("references").toUpperCase() }}
                    </v-card-title>
                    <v-card-text>
                        <v-list v-if="viewUser.references.length > 0">
                            <v-list-item
                                v-for="(user, index) in viewUser.references"
                                :key="index"
                            >
                                <v-list-item-content>
                                    <v-list-item-title>
                                        {{ user.name }}
                                    </v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ user.phone }}
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
            userselections: [],
            editedUser: {
                id: null,
                name: "",
                email: "",
                phone: "",
                active: false,
                isAdmin: false,
                reference_id: null
            },
            viewUser: {
                references: [],
                reference: null
            },
            editedIndex: 0,
            userId: null,
            dialogUser: false,
            dialogCategory: false,
            itemsPerPage: 10,
            footerprops: {
                "items-per-page-options": [5, 10, 15, 100]
            },
            search: "",
            selected: [],
            showSelect: true,
            totalUsers: 0,
            users: [],
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
                    text: this.$t("form.active"),
                    value: "active",
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
                this.fetchUserFromServer().then(data => {
                    this.users = data.items;
                    this.totalUsers = data.total;
                });
            },
            deep: true
        }
    },

    methods: {
        fetchUserFromServer() {
            this.loading = true;
            var url = `/api/users/`;

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
                url = `/api/users/?search=${this.search}`;
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

        initUser() {
            this.editedUser = {
                id: null,
                name: "",
                email: "",
                phone: "",
                password: "",
                password_confirmation: "",
                active: false,
                isAdmin: false,
                reference_id: null
            };
            this.viewUser = {
                references: [],
                reference: null
            };
            this.userId = null;
            this.dialogUser = true;
            this.fetchUserSelections();
        },

        onSaveUser() {
            const {
                name,
                email,
                phone,
                password,
                password_confirmation,
                active,
                isAdmin,
                reference_id
            } = this.editedUser;
            let user = {
                name: name,
                email: email,
                phone: phone,
                password: password,
                password_confirmation: password_confirmation,
                active: active,
                isAdmin: isAdmin,
                reference_id: reference_id
            };
            if (this.userId == null) {
                // console.log("create");

                axios
                    .post(`/api/users`, user)
                    .then(result => {
                        // console.log(result);
                        this.users.push(result.data.data);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('users.created');
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
                    .put(`/api/users/${this.userId}`, user)
                    .then(result => {
                        // console.log(result.data.data);
                        Object.assign(
                            this.users[this.editedIndex],
                            result.data.data
                        );
                        this.lands.push(result.data.data);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('users.created');
                    })
                    .catch(error => {
                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                    });
            }

            this.dialogUser = false;
            // console.log("saved");
        },

        deleteItem(item) {
            const index = this.users.indexOf(item);
            confirm("Are you sure you want to delete this user?") &&
                axios
                    .delete(`/api/users/${item.id}`)
                    .then(result => {
                        console.log(result);
                        this.users.splice(index, 1);
                        this.snackbar = true;
                        this.isError = false;
                        this.message = this.$t('users.deleted');
                    })
                    .catch(error => {

                        // console.log(error);
                        this.snackbar = true;
                        this.isError = true;
                        this.message = error.response.data.message;
                   
                   });
            // console.log(item);
        },

        onSearchUser() {
            this.fetchUserFromServer().then(data => {
                this.users = data.items;
                this.totalUsers = data.total;
            });
        },
        onCancelSearch() {
            this.search = "";
            this.fetchUserFromServer().then(data => {
                this.users = data.items;
                this.totalUsers = data.total;
            });
        },

        cancel() {
            this.dialogUser = false;
            this.initUser();
            console.log("canceled");
        },
        close() {
            this.dialogUser = false;
            console.log("closed");
        },
        editItem(user) {
            this.editedIndex = this.users.indexOf(user);
            this.userId = user.id;
            this.editedUser = Object.assign({}, user);
            this.dialogUser = true;
            console.log(user);
            this.fetchUserSelections();
        },
        viewItem(user) {
            axios
                .get(`/api/users/${user.id}`)
                .then(result => {
                    console.log(result);
                    this.viewUser = result.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        fetchUserSelections() {
            axios
                .get(`/api/users/selections`)
                .then(result => {
                    console.log(result);
                    this.userselections = result.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
