// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require("webpack-node-externals");
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = function(api) {
  api.chainWebpack((config, { isServer }) => {
    config.plugin("vuetify-loader").use(VuetifyLoaderPlugin);
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/],
        }),
      ]);
    }
  });

  api.loadSource(async (store) => {
    store.addMetadata("baseURL", "https://gradients.terabytetiger.com");
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
