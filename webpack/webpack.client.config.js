const path = require('path');
const projectRoot = path.resolve(__dirname, '..');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    entry: './entry-client.js',
    output: {
        path: path.join(projectRoot, 'dist'),
        // publicPath: path.join(projectRoot, 'public'),
        filename: 'client.js',
    },
    plugins: [
        // This plugins generates `vue-ssr-client-manifest.json` in the
        // output directory.
        new VueSSRClientPlugin()
    ]
})