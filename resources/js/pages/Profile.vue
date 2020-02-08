<template>
    <v-app>
        <v-row>
            <v-col cols="12" sm="4">
                <v-container style="text-align:center;">
                    <v-avatar
                        :size="300"
                        color="red"
                    >
                        <img src="https://i.picsum.photos/id/1/300/300.jpg" alt="alt">
                    </v-avatar>
                    <v-btn class="ma-5" color="success">UPLOAD IMAGE</v-btn>
                </v-container>
            </v-col>
            <v-col cols="12" sm="4">
                <v-tabs v-model="tab" color="primary" slider-color="primary">
                    <v-tab>
                        {{ $t("form.information") }}
                    </v-tab>
                    <v-tab>
                        {{ $t("form.password") }}
                    </v-tab>

                    <v-tab-item>
                        <v-card elevation="1" class="mt-12 my-auto mx-auto">
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
                        <v-card elevation="1" class="mt-12 my-auto mx-auto">
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
        </v-row>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            tab: 0,

            formInformation: {},
            formPassword: {}
        };
    },
    mounted() {
        this.init();
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
        onUploadAvatar(){},
        onSaveAvatar(){

        },
        onSaveInformation() {},
        onUpdatePassword() {}
    }
};
</script>
