import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    mode: "development",
    
    output: {
        filename: '[name].[contenthash].js',
    },
    
    devServer: {
        open: true,
        static: [
            {
                directory: path.resolve(import.meta.dirname, 'src'),
            }
        ]
    },
    
    devtool: [
        {type: "javascript", use:"eval-source-map"}
    ],

    plugins: 
    [   
        new HtmlWebpackPlugin({template: 'src/index.html'}),


    ],
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
           {
             test: /\.(png|svg|jpg|jpeg|gif)$/i,
             type: 'asset/resource',
           },
        ]
    },
    
    resolve: {
        alias: {
            Core: path.resolve(import.meta.dirname, 'src/core/exports/index.js'),
            Projects: path.resolve(import.meta.dirname, 'src/features/projects/exports/index.js'),
            Tasks: path.resolve(import.meta.dirname, 'src/features/tasks/exports/index.js')
        }
    },

}
