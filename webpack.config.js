const path = require('path');
const clientConfig = {
    target: 'web',
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
};
