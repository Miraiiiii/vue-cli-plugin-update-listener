<!--
 * @Description: 
 * @Author: 舌红
 * @Date: 2024-01-12 11:28:47
 * @LastEditors: 舌红
 * @LastEditTime: 2024-01-12 14:36:26
-->
# vue-cli-plugin-update-listener

## 使用说明

```powershell
1. npm install vue-cli-plugin-update-listener --save-dev
```

```js
2. "vue.config.js"中进行配置：
    module.exports = {
      //...
      pluginOptions: {
        UpdateListenerPlugin: { // 是否开启版本监听信息写入
          show: process.env.NODE_ENV !== "development"
        }
      }
      // ...
    }
```

```js
3. 提交信息含"--no-tip"则关闭一次更新提醒，否则版本发布后都会监听并且开启提醒
```

## 配置说明

| 参数 | 类型 | 说明 |
| :--| :-- | :-- |
| show | Boolean | 是否开启版本监听信息写入