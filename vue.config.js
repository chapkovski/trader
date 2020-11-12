const path = require('path');
module.exports = {
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