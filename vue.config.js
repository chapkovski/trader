const BundleTracker = require('webpack-bundle-tracker')
const path = require('path');
// Change this to match the path to your files in production (could be S3, CloudFront, etc.)
const DEPLOYMENT_PATH = '../_static/dist/'

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? DEPLOYMENT_PATH : 'http://localhost:8080/',
    outputDir: '../_static/dist',

    devServer: {
        public: 'localhost:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    },

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
    },
}
