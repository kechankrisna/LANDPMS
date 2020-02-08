// load vue and vuex instance
import Vue from 'vue';
import Vuex from 'vuex';
import englishTranslation from './../../lang/en.json'
import khmerTranslation from './../../lang/kh.json'
 
// load vuex i18n module
import vuexI18n from 'vuex-i18n';

const store = new Vuex.Store();
Vue.use(vuexI18n.plugin, store);
 
// add translations directly to the application
Vue.i18n.add('en', englishTranslation);
Vue.i18n.add('kh', khmerTranslation);

const defaultLang = "en";
let lang = localStorage.getItem('lang');
if(typeof lang != "undefined"){
    Vue.i18n.set(lang);
}else{
    Vue.i18n.set(defaultLang);
    localStorage.setItem('lang', defaultLang);
}

