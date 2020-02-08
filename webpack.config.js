const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
    plugins: [
        new VuetifyLoaderPlugin(),
        new LiveReloadPlugin()
    ]
};