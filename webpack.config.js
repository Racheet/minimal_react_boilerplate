module.exports = {
    entry: __dirname + "/src/index.js",
    mode: "development",
    output : {
      filename: "bundle.js",
      path: __dirname + "/dist/"
      
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ],
        resolve:{
          extensions: ['*','.js',".jsx"]
      }
    }
  
  
}