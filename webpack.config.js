module.exports = {
    entry: __dirname + "/src/index.js",
    mode: "development",
    output : {
      filename: "bundle.js",
      path: __dirname + "/dist/",
      sourceMapFilename : "bundle.map"
    },
    devtool : "#source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        {
          test: /\.css$/,
          use: ["style-loader" , "css-loader"]
        }
      ]
    },
      resolve:{
        extensions: ['*','.js',".jsx"]
    }

  
  
}
