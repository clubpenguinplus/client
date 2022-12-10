const path = require('path')

const BannerPlugin = require('./webpack_plugins/BannerPlugin')
const DefinePlugin = require('webpack').DefinePlugin
const WebpackObfuscator = require('webpack-obfuscator')

let config = {
    mode: 'development',
    entry: './src/Game.js',
    output: {
        filename: 'clubpenguinplus.js',
        path: path.resolve(__dirname, 'client/scripts/client')
    },
    optimization : {
        minimize: false
    },
    devServer: {
        static: {
            directory: path.join(__dirname),
            publicPath: '/'
        },
        devMiddleware: {
            writeToDisk: true
        },
        proxy: {
            '/world/login': {
                target: 'http://localhost:6111',
                pathRewrite: { '^/world/login': '' },
                ws: true
            },

            '/world/blizzard': {
                target: 'http://localhost:6112',
                pathRewrite: { '^/world/blizzard': '' },
                ws: true
            }
        },
        host: 'localhost',
        port: 8888,
        hot: false,
        liveReload: false
    },
    resolve: {
        alias: {
            '@engine': path.resolve(__dirname, 'src/engine'),
            '@scenes': path.resolve(__dirname, 'src/scenes'),
            '@components': path.resolve(__dirname, 'src/scenes/components'),
            '@rooms': path.resolve(__dirname, 'src/scenes/rooms'),
            '@games': path.resolve(__dirname, 'src/scenes/games'),
            '@igloos': path.resolve(__dirname, 'src/scenes/igloos'),
            '@parties': path.resolve(__dirname, 'src/scenes/parties')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            VERSION: JSON.stringify(require('./package.json').version)
        })
    ]
}

module.exports = (env, argv) => {
    if (argv.mode === 'production') {
        config.output.filename = 'clubpenguinplus.min.js'
        config.optimization.minimize = true

        if (env.obfuscate === 'true') {
            config.plugins.push(
                new WebpackObfuscator({
                    rotateStringArray: true,
                    reservedStrings: ['\s*']
                }, [])
            )
        }

        config.plugins.push(
            new BannerPlugin({
                banner: `Club Penguin Plus v${require('./package.json').version}\nClub Penguin Plus is a fan-made project and is not affiliated with Disney or Club Penguin.\nThe Club Penguin Plus client is based off https://github.com/wizguin/yukon which is under the MIT License.\nYukon is the copyright of its respective authors and Club Penguin Plus does not claim ownership of any of this work.\nAnything written by the Club Penguin Plus team is not under the same license.\nYou do not have permission to use, copy, modify, reverse-engineer, or distribute any code made specifically for Club Penguin Plus.\For more info, review our terms of service at https://cpplus.pw/en/terms`
            })
        )
    }

    return config
}
