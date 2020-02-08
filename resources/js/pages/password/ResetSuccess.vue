<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card
                    max-width="400px"
                    elevation="12"
                    class="mt-12 my-auto mx-auto"
                >
                    <v-card-title class="text-center" primary-title>
                        {{ $t("passwords.change") }}
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                :hint="$t('form.password')"
                                prepend-inner-icon="mdi-account-key-outline"
                                v-model="form.password"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                required
                            ></v-text-field>

                            <v-text-field
                                :hint="$t('form.password_confirmation')"
                                prepend-inner-icon="mdi-account-key-outline"
                                v-model="form.password_confirmation"
                                :type="showPassword ? 'text' : 'password'"
                                :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                                @click:append="showPassword = !showPassword"
                                required
                            ></v-text-field>

                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="primary" text :to="{'name': 'login'}">
                            {{ $t("form.login") }}
                        </v-btn>

                        <v-spacer></v-spacer>
                        <v-btn rounded class="px-5" color="success" @click="onUpdatePassword">
                            {{ $t("form.update") }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
                
                <v-container grid-list-xs class="pa-5 ma-5"  >
                    <v-spacer></v-spacer>
                    <SwitchLanguage style="max-width:150px;"/>
                </v-container>
            </v-flex>
        </v-layout>
        

        <v-snackbar :color="isError ? 'error' : 'success'" v-model="snackbar">
            {{ message }}
            <v-spacer></v-spacer>
            <v-btn text @click="snackbar = !snackbar">close</v-btn>
        </v-snackbar>
    </v-container>
</template>

<script>

import SwitchLanguage from './../../components/SwitchLanguage'

export default {
    layout: "blank",
    components:{
        SwitchLanguage,
    },
    data() {
        return {
            form: {},
            loading: false,
            message: null,
            showPassword: false,
            snackbar: false,
            isError: false
        };
    }, 
    methods: {
        init() {
            this.form = {
                email: this.$route.query['email'],
                password: null,
                password_confirmation:null,
                token: this.$route.query['token'],
            };
        },
        
        onUpdatePassword() {
            this.loading = true;
            axios.post('/api/password/reset', this.form)
                .then(res => {
                    this.loading = false;
                    this.snackbar = true;
                    this.isError = false;
                    this.message = this.$t('passwords.reset');
                    setTimeout(() => {
                        this.$router.push("/login");
                    }, 1000);
                })
                .catch(err => {
                    this.snackbar = true;
                    this.message = err.response.data.message;
                    this.isError = true;
                    this.loading = false;
                    // console.log(err.response.data.message);
                });
        }
    },

    created() {
        this.init();
    }
};
</script>
