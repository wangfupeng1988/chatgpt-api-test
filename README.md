# 2024 Node.js 调用 ChatGPT API 实现 Stream 流式效果

运行效果如下

![](./bak/chat.gif)

ChatGPT API 文档 https://platform.openai.com/docs/overview

## 背景

- 网上很多资料过时了，不再符合 OpenAI 的开发文档
- 我要做一个 Node 全栈 AIGC 知识库项目 [划水 AI](https://huashuiai.com/) （仿 notion），项目介绍看[这里](https://juejin.cn/post/7338797433899221043)

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

## 测试

访问该机器 `3001` 端口。PS：云服务器可能需要开通 OS 防火墙端口，以及平台的安全组。

## 参加我的 Node 全栈 AIGC 项目

我打算用 Next.js + ChatGPT 开发一个 AIGC 知识库（仿 Notion AI 和协同编辑）[划水 AI](https://huashuiai.com/) 项目（尚未开发），并真实上线运行。

项目介绍在[这里](https://juejin.cn/post/7338797433899221043)。有兴趣围观、学习、参与研发的朋友，可直接加我微信 `fe-wfp` （请备注“github 划水”）。
