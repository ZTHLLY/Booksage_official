# 开发文档

docker build -t booksage-admin:v0.0.2 .

docker stop 187de62a6cd3  把前一个容器给关了，端口留给新的容器

docker run -p 8000:8000 -d booksage-admin:v0.0.2
