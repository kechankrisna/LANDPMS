<template>
<v-app>
     <v-container class="ma-0 pa-1" fluid>
        <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
        <v-row align-center >
            <v-col cols="12" lg="5" sm="12">
                <v-tabs v-model="tab" color="primary" slider-color="primary">
                    <v-tab>
                        {{ $t("revenues") }}
                    </v-tab>

                    <v-tab>
                        {{ $t("clients") }}
                    </v-tab>

                    <v-tab>
                        {{ $t("form.information") }}
                    </v-tab>
                    <v-tab>
                        {{ $t("form.password") }}
                    </v-tab>

                    <v-tab-item>

                        <v-card class="mt-3">
                            <v-card-text>
                                <v-list-item>
                                    <v-list-item-action>
                                         <v-icon>mdi-currency-usd</v-icon>
                                    </v-list-item-action>
                                   <v-list-item-content>
                                       <v-list-item-title>
                                           <span class="font-weight-bold red--text">{{totalRevenue}}</span>
                                       </v-list-item-title>
                                       <v-list-item-subtitle>
                                           {{ $t("Total Earned") }}
                                       </v-list-item-subtitle>
                                   </v-list-item-content>
                                </v-list-item>

                                <v-list-item>
                                    <v-list-item-action>
                                         <v-icon>mdi-bank</v-icon>
                                    </v-list-item-action>
                                   <v-list-item-content>
                                       <v-list-item-title>
                                           <span class="font-weight-bold green--text">{{totalReceived}}</span>
                                       </v-list-item-title>
                                       <v-list-item-subtitle>
                                           {{ $t("Total Received") }}
                                       </v-list-item-subtitle>
                                   </v-list-item-content>
                                </v-list-item>

                            </v-card-text>
                        </v-card>

                        <v-card class="mt-3" >
                            <v-card-title primary-title>
                                {{ $t("Received") }}
                            </v-card-title>
                            <v-card-text>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    {{ $t("form.title") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("land") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("form.amount") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("form.date") }}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="received in receiveds"
                                                :key="received.id"
                                            >
                                                <td>{{ received.title }}</td>
                                                <td>{{ received.land }} ( {{ received.location }} )</td>
                                                <td> <span class="green--text">{{ received.amount }}</span></td>
                                                <td style="min-width:150px;" >{{ received.paid_at ? moment(received.paid_at).format("LL") : '' }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                        </v-card>
                        

                        <v-card class="mt-3">
                            <v-card-title primary-title>
                                {{ $t("Total Earned") }}
                            </v-card-title>
                            <v-card-text>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    {{ $t("land") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("client") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("form.amount") }}
                                                </th>
                                                <th class="text-left">
                                                    {{ $t("form.date") }}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="revenue in revenues"
                                                :key="revenue.id"
                                            >
                                                <td>{{ revenue.land }} <br> ( {{ revenue.location }} ) </td>
                                                <td>{{ revenue.client }}</td>
                                                <td> <span class="blue--text">{{ revenue.amount }}</span></td>
                                                
                                                <td style="min-width:150px;" >{{ revenue.sold_at ? moment(revenue.sold_at).format("LL") : '' }}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                        </v-card>

                        
                        
                    
                    </v-tab-item>

                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <v-simple-table>
                                    <template v-slot:default>
                                    <thead>
                                        <tr>
                                        <th class="text-left"> {{$t('form.name')}} </th>
                                        <th class="text-left"> {{$t('form.phone')}} </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="client in datas.clients" :key="client.id">
                                        <td>{{ client.name }}</td>
                                        <td>{{ client.phone }}</td>
                                        </tr>
                                    </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        :hint="$t('form.name')"
                                        prepend-inner-icon=" mdi-account "
                                        v-model="formInformation.name"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        :hint="$t('form.email')"
                                        prepend-inner-icon="mdi-email"
                                        v-model="formInformation.email"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        :hint="$t('form.phone')"
                                        prepend-inner-icon="mdi-phone"
                                        v-model="formInformation.phone"
                                       
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    rounded
                                    class="px-5"
                                    color="success"
                                    @click="onSaveInformation"
                                >
                                    {{ $t("form.save") }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-tab-item>

                    <v-tab-item>
                        <v-card>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        :hint="$t('form.current_password')"
                                        prepend-inner-icon=" mdi-account-lock-outline"
                                        v-model="formPassword.current_password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        :hint="$t('form.password')"
                                        prepend-inner-icon="mdi-account-lock"
                                        v-model="formPassword.password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        :hint="$t('form.password_confirmation')"
                                        prepend-inner-icon="mdi-account-lock"
                                        v-model="formPassword.password_confirmation"
                                        type="password"
                                        required
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    rounded
                                    class="px-5"
                                    color="success"
                                    @click="onUpdatePassword"
                                >
                                    {{ $t("form.update") }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-tab-item>

                </v-tabs>
            </v-col>

            <v-col cols="12" lg="7" sm="12">
                <v-card >
                    <v-card-text>
                        <organization-chart pan zoom :datasource="datas"></organization-chart>
                    </v-card-text>
                </v-card>
            </v-col>

        </v-row>

        <v-snackbar :color="isError ? 'error' : 'success'" v-model="snackbar">
            {{ message }}
            <v-spacer></v-spacer>
            <v-btn text @click="snackbar = !snackbar">close</v-btn>
        </v-snackbar>

     </v-container>
 </v-app>
</template>

<script>

import Vue from 'vue'
import OrganizationChart from 'vue-organization-chart'
import 'vue-organization-chart/dist/orgchart.css'


export default {
    components:{
        OrganizationChart,
    },
    data() {
        return {
            loading:false,
            snackbar:false,
            isError: false,
            message:null,
            tab: 0,
            formInformation: {},
            formPassword: {},
            datas: {},
            revenues:[],
            receiveds:[],
            totalReceived:0.00,
            totalRevenue:0.00,
        };
    },
    mounted() {
        this.init();
        this.initMember();
        this.initReceiveds();
        this.initRevenues();
    },

    methods: {
        init() {
            this.$store
                .dispatch("profile", this.form)
                .then(res => {
                    console.log(res.data);
                    const { name, email, phone } = res.data.data;
                    this.formInformation = {
                        name: name,
                        email: email,
                        phone: phone
                    };
                })
                .catch(err => {
                    console.log(err.response.data.message);
                });

            this.formPassword = {
                current_password: "",
                password: "",
                password_confirmation: ""
            };
        },
        
       initMember(){
            var user = JSON.parse(localStorage.getItem('user'));
            var url = `/api/auth/${user.id}/members`;
            axios.get(url).then((result) => {
            console.log(result.data);
            this.datas = result.data.data;
            }).catch((err) => {
            console.log(err);
            });
        },
        
        initRevenues(){
            var user = JSON.parse(localStorage.getItem('user'));
            var url = `/api/auth/${user.id}/revenues`;
            axios.get(url).then((result) => {
                // console.log(result.data);
                if(result.data.length>0){
                    result.data.forEach(r => {
                        this.totalRevenue += parseFloat(r.amount);
                    });
                }
                this.revenues = result.data;
            }).catch((err) => {
                // console.log(err);
            });
        },

        initReceiveds(){
            var user = JSON.parse(localStorage.getItem('user'));
            var url = `/api/auth/${user.id}/receiveds`;
            axios.get(url).then((result) => {
                // console.log(result.data);
                if(result.data.length>0){
                    result.data.forEach(r => {
                        this.totalReceived += parseFloat(r.amount);
                    });
                }
                this.receiveds = result.data;
            }).catch((err) => {
                // console.log(err);
            });
        },



        onSaveInformation() {
            axios.post(`/api/auth/updateinformation`, this.formInformation)
            .then((result) => {
                // console.log(result)
                this.loading = false;
                this.snackbar = true;
                this.isError = false;
                this.message = this.$t('form.profile_update');

            }).catch((err) => {
                this.snackbar = true;
                this.message = err.response.data.message;
                this.isError = true;
                this.loading = false;
                // console.log(err.response.data.message)
            });
        },
        onUpdatePassword() {
            if( this.formPassword.password == this.formPassword.password_confirmation ){
                this.loading = true;
                axios.post(`/api/auth/updatepassword`, this.formPassword)
                .then((result) => {
                    // console.log(result)
                    this.loading = false;
                    this.snackbar = true;
                    this.isError = false;
                    this.message = this.$t('passwords.update');
                    setTimeout( function() {
                        location.reload();
                    }, 500);
                }).catch((err) => {
                    this.snackbar = true;
                    this.message = err.response.data.message;
                    this.isError = true;
                    this.loading = false;
                    // console.log(err.response.data.message)
                });
            }else{
                 this.snackbar = true;
                 this.isError = true;
                 this.message = this.$t('passwords.notmatch');
            }

        },

        
    }
};
</script>
