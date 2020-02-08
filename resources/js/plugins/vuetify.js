import Vue from 'vue'
import Vuetify from 'vuetify'
// import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'

import '@mdi/font/css/materialdesignicons.css'
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#66BB6A',
                accent: '#FF4081',
                secondary: '#ffe18d',
                success: '#43A047',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            },
            light: {
                primary: '#4CAF50',
                accent: '#e91e63',
                secondary: '#1B5E20',
                success: '#4CAF50',
                info: '#01579B',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        },
        options: {
            minifyTheme: function (css) {
                return process.env.NODE_ENV === 'production'
                    ? css.replace(/[\r\n|\r|\n]/g, '')
                    : css
            },
            customProperties: true
        },
    },
});