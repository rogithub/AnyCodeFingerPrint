const path = require('path');
module.exports = {
    entry: {
        index: './TypeScript/pages/index.ts'
    },

    mode: 'production',
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            minSize: 0,
            name: 'shared'
        }
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'wwwroot/trasp')
    },

    externals: {
        'ko': 'ko',
        'WebSdk': 'WebSdk'
    },

    resolve: {
        fallback: { "crypto": false }
    }

}
