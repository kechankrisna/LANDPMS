<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant="mini"
            mini-variant-width="120"
            absolute
            permanent
            app
            clipped
            :width="325"
            :class="mini ? 'text-center':'text-left'"
        >
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-item
                        :key="item.title"
                        v-model="item.active"
                        no-action
                        @click="onMenuClick(item)"
                    >
                        <v-list-item-action>
                            <v-row row wrap>
                                <v-col class="pb-0" cols="12">
                                    <v-icon :color="item.iconColor" large>
                                        {{ item.iconName }}
                                    </v-icon>
                                </v-col>
                                <v-col v-if="mini" class="my-0 py-0" cols="12">
                                  {{ item.title }}
                                </v-col>
                            </v-row>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title class="font-weight-light">
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-divider class="pa-0 ma-0" :key="index"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app color="primary" dark clipped-left>
            <v-app-bar-nav-icon
                large
                @click.stop="mini = !mini"
                
            ></v-app-bar-nav-icon> 
            <!-- class="d-lg-none" -->
            <v-toolbar-title color="primary">
                <v-toolbar-title>MYLEKHA</v-toolbar-title>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            
            <v-btn icon border="right"> <v-icon> mdi-bell </v-icon> </v-btn>
            <SwitchLanguage class="pt-5" style="max-width:150px;"/>
            <v-avatar color="accent" size="36" class="mx-2">
                <span class="white--text headline"> {{ user.name.substr(0, 2) }} </span>
            </v-avatar> 
            <span>{{ user.email }}</span>
            <v-menu offset-y  >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" > <v-icon> mdi-menu-down </v-icon> </v-btn>
                </template>
                    <v-list dense>
                        <v-list-item @click="onLogout">
                            <v-list-item-title> {{ $t('form.logout') }} </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            
        </v-app-bar>

        <v-snackbar :color="isError ? 'error' : 'success'" v-model="snackbar">
            {{ message }}
            <v-spacer></v-spacer>
            <v-btn text @click="snackbar = !snackbar">close</v-btn>
        </v-snackbar>
    </div>
</template>

<script>
import SwitchLanguage from './SwitchLanguage.vue'

export default {
    components:{
        SwitchLanguage
    },
    data() {
        return {
            user: {},
            drawer: true,
            mini: true,
            snackbar: false,
            isError:false,
            message:"",
            items: [
                {
                  iconName: "mdi-home",
                  iconColor: "primary",
                  action: "home",
                  title: "Home",
                  active:true,
                },
                {
                    iconName: "mdi-poll",
                    iconColor: "green",
                    action: "reports",
                    title: "Reports",
                    items: [
                        {
                            title: "Sales Summary"
                        },
                        {
                            title: "Sales By item"
                        },
                        {
                            title: "Sales By category"
                        },
                        {
                            title: "Sales By employee"
                        },
                        {
                            title: "Sales By Payment type"
                        },
                        {
                            title: "Receipts"
                        },
                        {
                            title: "Sales By Modifier"
                        },
                        {
                            title: "Discounts"
                        },
                        {
                            title: "Taxes"
                        },
                        {
                            title: "Shifts"
                        }
                    ]
                },
                {
                    iconName: "mdi-cart",
                    iconColor: "red",
                    action: "items",
                    title: "Items",
                    items: [
                        { title: "Item list" },
                        { title: "Categories" },
                        { title: "Modifiers" },
                        { title: "Discounts" }
                    ]
                },
                {
                    iconName: "mdi-cart-arrow-right",
                    iconColor: "blue",
                    action: "Inventories",
                    title: "Inventory management",
                    items: [
                        { title: "Count stock" },
                        { title: "Suppliers" },
                        { title: "Vendors" }
                    ]
                },
                {
                    iconName: "mdi-contact-mail",
                    iconColor: "#009688",
                    action: "employess",
                    title: "Employees",
                    items: [
                        { title: "Employee List" },
                        { title: "Access rights" }
                    ]
                },
                {
                    iconName: "mdi-account-multiple",
                    iconColor: "purple",
                    action: "customers",
                    title: "Customers",
                    items: []
                },
                {
                    iconName: "mdi-settings",
                    iconColor: "grey",
                    action: "settings",
                    title: "Settings",
                    items: []
                }
            ]
        };
    },

    created() {
        this.getUser();
    },

    methods: {
        getUser(){
            this.user = JSON.parse(localStorage.getItem('user'));
        },
        onMenuClick(item){
        },
        onLogout(){
            this.$store
            .dispatch("logout")
            .then(res => {
                this.snackbar = true;
                this.isError = false;
                this.message = this.$t('auth.logout_success');
                setTimeout(() => {
                        this.$router.push("/");
                }, 1000);
            })
            .catch(err => {
                this.snackbar = true;
                this.isError = true;
                this.message = err.response.data.message;
                
                console.log(err);
                
            });
        }
    },
}
</script>