/*
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-11 11:23:14
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-11 16:13:59
 */
const UpdateListenerPlugin = require('./service/base')

/**
 * @param {object} options 
 * @param {object} options.show 是否写入版本信息
 */

module.exports = (api, options) => {
  const opt = options.pluginOptions.UpdateListenerPlugin
  if (!opt || !opt.show) return
  api.configureWebpack(webpackConfig => {
    webpackConfig.plugins.push(new UpdateListenerPlugin())
  })
}