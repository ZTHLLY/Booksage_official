// https://umijs.org/config/
import { defineConfig } from 'umi';

export default defineConfig({
  plugins: [
    // https://github.com/zthxxx/react-dev-inspector
    'react-dev-inspector/plugins/umi/react-inspector',
  ],
  // https://github.com/zthxxx/react-dev-inspector#inspector-loader-props
  inspectorConfig: {
    exclude: [],
    babelPlugins: [],
    babelOptions: {},
  },
  proxy: {
    //代理以访问/api 开头的所有路由
    '/api/': {
      target: 'http://34.40.172.35:8082', //代理目标地址
      changeOrigin: true, //开启跨域访问
    },
  },
});
