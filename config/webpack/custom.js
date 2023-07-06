const { environment } = require('@rails/webpacker')
// const path = require("path");
const webpack = require('webpack');

module.exports = {
    resolve: {
      
      extensions: ['.ts', '.tsx', '.vue', '.css'],
      fallback: {
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream"),
      },
    },
    experiments: {
      asyncWebAssembly: true,
      layers: true,
    },
    plugins: [
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],

    module: {
      rules: [
        // ... other rules
  
        {
          test: /\.wasm$/, // Add a rule for WebAssembly files
          type: 'webassembly/async', // Set the module type to 'webassembly/async'
        },
      ],
    },
};









