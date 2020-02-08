<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        
        <v-layout align-center justify-center>
            <v-card xs12 sm8 md4>
                <v-card-title primary-title>
                    <h1>{{$t("greeting")}} <span class="text-blue">{{$t("app.title")}}</span></h1>
                </v-card-title>
                <v-card-text>
                    <v-container centered>
                        <p>{{$t('app.description')}}</p>
                        <v-row >
                            <v-btn rounded outlined :to="{ 'name':'login' }" color="success">{{$t('form.login')}}</v-btn>
                            <v-btn rounded outlined :to="{ 'name':'register' }" color="blue">{{$t('form.register')}}</v-btn>
                            <v-btn rounded outlined :to="{ 'name':'reset' }" color="blue">{{$t('form.reset')}}</v-btn>
                        </v-row>
                    </v-container>
                    <SwitchLanguage/>
                </v-card-text>
            </v-card>
        </v-layout>

    </v-container>
</template>

<script>
import SwitchLanguage from './../components/SwitchLanguage.vue'

export default {
    layout: 'blank',
    components:{
        SwitchLanguage
    },
    mounted() {
        console.log(process.env);
    },
}
</script>