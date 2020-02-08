<template>
    <v-select single-line :items="$i18n.locales()" v-model="lang" :label=" $t('language') " prepend-inner-icon="mdi-web">
    </v-select>
</template>
<script>
export default {
    data() {
        return {
            lang:null,
        }
    },
    methods: {
        switchLang(lang){
            this.$i18n.set(lang)
            localStorage.setItem('lang', lang);
        },
    },
    watch: {
        lang(value){
            this.switchLang(value);
        }
    },
}
</script>