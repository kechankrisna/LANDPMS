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

            
            <v-btn icon border="right" @click="onOpenNotification"> <v-icon> mdi-bell </v-icon> </v-btn>
            <SwitchLanguage class="pt-5" style="max-width:150px;"/>
            <v-avatar color="accent" size="36" class="mx-2">
                <span class="white--text headline"> {{ user.name.substr(0, 2) }} </span>
            </v-avatar> 
            <span>{{ user.email }}</span>
            <v-menu offset-y  >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on" > <v-icon> mdi-menu-down </v-icon> </v-btn>
                </template>
                    <v-list dense >
                        <v-list-item style="text-decoration:none" :to="{'name': 'profile'}" >
                            <v-list-item-icon> <v-icon> mdi-account-circle </v-icon> </v-list-item-icon>
                            <v-list-item-title> {{ $t('form.profile') }} </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="onLogout">
                            <v-list-item-icon> <v-icon> mdi-logout-variant </v-icon> </v-list-item-icon>
                            <v-list-item-title> {{ $t('form.logout') }} </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
        </v-app-bar>

        <v-navigation-drawer v-model="enddrawer" absolute temporary right :width="400"  >
            <v-list>
                <v-list-item v-for="(item, index) in 10" :key="index" two-line>
                    <v-list-item-content>
                        <v-list-item-title> Notication {{index}} </v-list-item-title>
                        <v-list-item-subtitle> Secondary text {{index}} </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                        <v-btn icon>
                            <v-icon color="grey lighten-1">mdi-information</v-icon>
                        </v-btn>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

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
            enddrawer:false,
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
            ],
            notifications:[]
        };
    },

    created() {
        this.getUser();
    },

    methods: {
        onOpenNotification(){
            this.enddrawer = !this.enddrawer;
        },
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