const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域
  devServer:{
    proxy:{
      '/api':{
        target:'http://si1v3r.nat300.top',
        changeOrigin: true,
      },
    },
  },
})


//http://gmall-h5-api.atguigu.cn
//http://si1v3r.nat300.top
