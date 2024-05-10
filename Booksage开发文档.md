# 开发文档

## 待优化的点

1. 注册的新用户需要一个默认头像和默认用户名
2. 跨域规则允许本地ip，方便前端构建时调试
3. 思考一下怎么把图片存在我的服务器上
4. 思考一下用户上传头像功能















## 部署上线流程（docker）

### 后端







### 前端

1. yarn run build 指令（sudo），构建应用生成dist目录
2. 上传dist目录到服务器上
3. 开始部署

### docker操作指令：

docker build -t booksage-admin:v0.0.2 . 构建应用最新版本的容器

docker stop 187de62a6cd3  把前一个容器给关了，端口留给新的容器

docker run -p 8000:8000 -d booksage-admin:v0.0.2 启动容器，指定端口，指定版本号
