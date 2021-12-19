module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        corejs: '3', // 声明 corejs 版本
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    'lodash',
    [
      'component',
      {
        libraryName: 'mint-ui',
        style: true,
      }
    ],
  ],
}
