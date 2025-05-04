import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'production', // or 'development' for local development
  entry: './src/index.js', // Your main entry point
  output: {
    filename: 'bundle.js', // The name of your bundled JavaScript file
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Public URL of the output directory
  },
  devServer: {
    static: './dist',
    historyApiFallback: true, // For React Router
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your HTML template
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing these extensions without specifying
  },
};