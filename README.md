# 此在 · Dasein

> *Being and Time in the Digital Clearing.*  
> 思维外化与数字林中空地。记录技术、数学、阅读、运动与自我对话。

[![Deploy Dasein Blog](https://github.com/DASEIN16615/DASEIN16615.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/DASEIN16615/DASEIN16615.github.io/actions/workflows/deploy.yml)
[![Site](https://img.shields.io/badge/Live-dasein16615.github.io-b5935b)](https://dasein16615.github.io)
[![Astro](https://img.shields.io/badge/Astro-v5.7-orange.svg)](https://astro.build)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3.4-38bdf8.svg)](https://tailwindcss.com)

---

## 📖 关于本站

本站是 [DASEIN](https://github.com/DASEIN16615) 的个人独立思考笔记与数字外脑。

* **线上地址：** [https://dasein16615.github.io](https://dasein16615.github.io)
* **代码仓库：** [DASEIN16615/DASEIN16615.github.io](https://github.com/DASEIN16615/DASEIN16615.github.io)
* **设计基调：** 纸墨质感（Paper-ink Aesthetic）与白金极简美学，搭配深色模式无缝切换与环境动态光晕。
* **写作准则：** 诚实优先，宁可留白；当一个外部记忆体，用“似然”代替“必然”。

---

## 🛠️ 技术栈与架构

| 模块 | 技术选型 | 说明 |
| :--- | :--- | :--- |
| **基础框架** | **Astro 5.7** | 内容优先的高性能静态站点生成器 (SSG) |
| **样式体系** | **Tailwind CSS 3.4** + Typography | 定制学术金/墨水灰配色，纯 CSS 变量驱动深浅色主题 |
| **检索系统** | **Pagefind** (`astro-pagefind`) | 纯前端静态全文检索，无需服务端和外部索引服务 |
| **内容层** | **Content Collections** (`astro:content`) | 强类型 Schema 校验的 Markdown/MDX 文章库 |
| **图标库** | **Lucide Icons** (`lucide-astro`) | 轻量现代化矢量图标 |
| **持续集成** | **GitHub Actions** + Pages | `main` 分支自动编译并部署至 GitHub Pages |

---

## 📂 目录结构

```text
我的世界/
├── .github/workflows/    # CI/CD 自动化部署流水线 (deploy.yml)
├── public/               # 静态公开资源 (favicon 等)
├── src/
│   ├── components/       # UI 通用组件 (Search.astro, ThemeToggle.astro)
│   ├── content/          # 内容集合 (Content Collections)
│   │   └── blog/         # Markdown 博客正文 (*.md, *.mdx)
│   ├── layouts/          # 全局页面骨架 (Layout.astro)
│   ├── pages/            # 路由页面 (index, about, posts, 404, rss.xml)
│   ├── styles/           # 全局样式与自定义配色 (global.css)
│   └── content.config.ts # 博文 Frontmatter Schema 类型定义
├── astro.config.mjs      # Astro 配置文件 (端口 4000、插件与站点 URL)
├── tailwind.config.mjs   # Tailwind 主题与扩展配置
└── package.json          # 依赖清单与 NPM Scripts
```

---

## 🚀 本地开发与工作流

### 1. 环境准备
确保本机安装了 Node.js 20+ 环境。

```bash
# 安装依赖
npm install
```

### 2. 本地调试
启动本地预览服务器（默认端口已配置为 `4000`）：

```bash
npm run dev
# 浏览器访问 http://localhost:4000
```

### 3. 构建与预览
```bash
# 静态全量构建（包含编译 Pagefind 全文索引）
npm run build

# 本地预览打包产物
npm run preview
```

---

## ✍️ 新增文章规范

所有文章存放在 `src/content/blog/` 目录下，文件格式为 `.md` 或 `.mdx`。

必须包含以下 Frontmatter 元数据：

```markdown
---
title: "文章标题"
pubDate: 2026-10-06
description: "简短的一两句话摘要，用于列表展示与 SEO。"
category: "语言学习-日语"
tags: ["计算机", "算法", "思考"]
draft: false
---

正文内容从这里开始...
```

* `pubDate`：遵循 `YYYY-MM-DD` 格式。
* `category`：文章所属分类（如 `语言学习-日语`、`随笔`、`计算机`），未填默认赋值为 `随笔`。
* `draft`：设置为 `true` 时，生产环境构建会自动过滤该文章。
* `tags`：标签数组，未填默认赋值为 `["未分类"]`。

---

## 🚢 部署说明

项目已配置 GitHub Actions 自动化工作流：
1. 本地完成写作与修改后，提交并推送至远程仓库 `main` 分支：
   ```bash
   git add .
   git commit -m "feat: 发布新文章"
   git push origin main
   ```
2. GitHub Actions 将自动触发 `npm run build`，生成静态产物并推送到 GitHub Pages 环境。

---

## 📄 License

Personal Blog © [DASEIN](https://github.com/DASEIN16615). All rights reserved.
