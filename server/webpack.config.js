const path = require('path');

module.exports = {
  entry: './src/server.ts', // Entry point for your application
  target: 'node',
  output: {
    filename: 'server.js', // Compiled file name
    path: path.resolve(__dirname, 'dist'), // Output directory for compiled files
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // Rule for TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Resolve extensions for import statements
  },
  devtool: 'inline-source-map',
};
