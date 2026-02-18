import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
    entry: "./src/index.js",
    mode: "development",
    
    devServer: {
        open: true,
        static: [
            {
                directory: path.resolve(import.meta.dirname, 'src'),
            }
        ]
    },

    plugins: [new HtmlWebpackPlugin({
        template: 'src/index.html'
    })],
    
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}
