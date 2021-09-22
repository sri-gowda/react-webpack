const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css|scss|less)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    // devtool: 'source-map',
    devServer: {
        hot: true,
        port: 3000,
        historyApiFallback: true
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}

module.exports = (env, args) => {

    if(args.mode === 'production'){
        config.mode = 'production' 
    }



    return config;
}