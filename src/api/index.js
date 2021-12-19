import { formatApiConfig, setFetchConfig, axios } from 'api-axios-lib'
import apiData from './api-data'

axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
/**
 * 配置网络请求钩子 参考：https://www.npmjs.com/package/api-axios-lib
 */
setFetchConfig({
  onLoading(loading, loadingText) {
    // globalLoading 用来演示项目中网络请求loading效果。
    // 如果项目中需要其他loading，修改以下逻辑即可。
    if (loading) {
      // 显示loading
      console.log(loadingText)
    } else {
      // 隐藏loading
    }
  },
  onMessage({ success, message }) {
    if (success) {
      // 调用成功的消息
      console.log(message)
    } else {
      // 调用失败的消息
      console.error(message)
    }
  },
})

export const api = formatApiConfig(apiData)
