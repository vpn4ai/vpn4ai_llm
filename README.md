# vpn4ai

一个基于 **Eleventy (11ty)** 的静态站点项目，用于发布 VPN 知识与测评内容。
欢迎访问：https://www.an1688.com

## 本地开发

### 环境要求

- Node.js 18+（建议使用 LTS）
- npm 9+

### 安装依赖

```bash
npm install
```

### 本地预览

```bash
npm run start
```

如你的 `package.json` 未提供 `start` 脚本，也可以使用：

```bash
npx eleventy --serve
```

### 构建

```bash
npm run build
```


## 目录结构

- `src/`：站点源文件
- `.eleventy.js`：Eleventy 配置
- `src/robots.txt`：爬虫规则
- `src/sitemap.xml.njk`：站点地图模板（构建生成 `/_site/sitemap.xml`）

## 部署
### Direct Upload

本地执行 `npm run build` 后，将 `_site/` 作为静态产物上传。


## License

如需开源许可证请按实际情况补充。
