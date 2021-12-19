const registerConsole = function (config = {}) {
  try {
    const el = document.createElement('script')
    el.onload = function () {
      // 全局挂载实例
      registerConsole.__vConsole = new window.VConsole(config)
    }
    el.src = 'https://unpkg.com/vconsole@latest/dist/vconsole.min.js'
    document.head.append(el)
    
    // eslint-disable-next-line no-empty
  } catch (err) {}
}
if (window) {
  // 在window上设置方法
  window.registerConsole = registerConsole
}
export { registerConsole }
