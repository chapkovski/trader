const BundleTracker = require('webpack-bundle-tracker')
const path = require('path');
// Change this to match the path to your files in production (could be S3, CloudFront, etc.)
const DEPLOYMENT_PATH = '/static/dist'

module.exports = {
        filenameHashing: false,
    productionSourceMap: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/static/vue'
        : '/static/vue',
    outputDir: '../_static/vue/',


    configureWebpack: {

        plugins: [
            new BundleTracker({path: __dirname, filename: 'webpack-stats.json'}),

        ],
    },
    "transpileDependencies": [
        "vuetify"
    ],
    chainWebpack: config => {
        config.resolve.alias
            .set('components', path.resolve(__dirname, 'src/components'))
            .set('bank', path.resolve(__dirname, 'src/components/bank'))
            .set('trade', path.resolve(__dirname, 'src/components/trade'))
            .set('work', path.resolve(__dirname, 'src/components/work'));
        config.resolve.alias
            .set('__STATIC__', 'static');

        config.devServer
            .public('http://localhost:6666')
            .host('localhost')
            .port(7777)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["*"]});
        config.module.rules.delete('eslint');
    },
}
