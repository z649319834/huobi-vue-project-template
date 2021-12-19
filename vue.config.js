const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')

const { env } = process
const isProd = env.NODE_ENV === 'production'
const plugins = [
  // lodash 按需加载
  new LodashModuleReplacementPlugin(),
  // 缓存编译数据，提升编译效率
  new HardSourceWebpackPlugin(),
  // 文件分析
  new BundleAnalyzerPlugin({
    analyzerMode: env.analyzerMode ? 'server' : 'disabled',
    analyzerPort: 'auto',
    openAnalyzer: true, // 自动打开浏览器
  }),
]

// vue cli 配置 参考:https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE
module.exports = {
  publicPath: '/',
  configureWebpack: {
    // 为了使用npm link 调试本地项目，所以需要禁用掉该规则。避免追踪软连接实际地址
    // https://github.com/webpack/webpack/issues/811#issuecomment-309797397
    resolve: {
      symlinks: false,
    },
    plugins,
    optimization: {
      minimizer: [
        new TerserPlugin({
          sourceMap: false,
          // 默认配置不支持ts文件，所以这里修改了正则
          test: /\.(j|t)s(\?.*)?$/i,
          terserOptions: {
            compress: {
              drop_console: isProd,
              drop_debugger: isProd,
            },
          },
        }),
      ],
    },
  },
}
