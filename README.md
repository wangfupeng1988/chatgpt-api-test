# ChatGPT API test

Nodejs 调用 ChatGPT API ，运行效果如下：

![](./bak/chat.gif)

ChatGPT API 文档 https://platform.openai.com/docs/overview

## 前置条件

- 有一个可以访问 ChatGPT API 的机器
- 有 ChatGPT 账号，且开通了 API key 并且可以被调用（配额充足）

## 下载和运行

保证你的机器上有 git 和 nodejs ，然后在控制台全局安装 `npm i ts-node-dev -g`

git clone 这份代码，在代码根目录创建 `.env` 文件，并写入内容 `OPENAI_API_KEY=xxx` （你的 API key）

控制台进入代码目录，执行

```
npm install

tsnd server.ts
```

## 访问

访问该机器 `3001` 端口。

PS：云服务器可能需要开通 OS 防火墙端口，以及平台的安全组。
