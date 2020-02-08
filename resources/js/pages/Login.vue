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
                        {{ $t("form.login") }}
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                              
                                :hint="$t('form.email')"
                                prepend-inner-icon="mdi-email"
                                v-model="form.email"
                                required
                            ></v-text-field>

                            <v-text-field
                               
                                :hint="$t('form.password')"
                                :type="showPassword ? 'text' : 'password'"
                                prepend-inner-icon="mdi-account-key"
                                v-model="form.password"
                                :append-icon="
                                    showPassword ? 'mdi-eye-off' : 'mdi-eye'
                                "
                                @click:append="showPassword = !showPassword"
                                required
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn color="success" text :to="{'name': 'register'}">
                            {{ $t("form.register") }}
                        </v-btn>
                        <v-btn color="success" text :to="{'name': 'reset'}">
                            {{ $t("form.reset") }}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn rounded class="px-5" color="success" @click="onLogin">
                            {{ $t("form.login") }}
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

import SwitchLanguage from './../components/SwitchLanguage'

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
                email: null,
                password: null
            };
        },
        
        onLogin() {
            this.loading = true;
            this.$store
                .dispatch("login", this.form)
                .then(res => {
                    this.loading = false;
                    this.snackbar = true;
                    this.isError = false;
                    this.message = this.$t('auth.login_success');
                    setTimeout(() => {
                        this.$router.push("/dashboard");
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
