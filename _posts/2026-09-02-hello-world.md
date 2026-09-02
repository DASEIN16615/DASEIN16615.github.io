---
layout: default
title: 博客搭建记录
date: 2026-09-02
categories: [meta]
---

# 博客搭建记录

> 第一次跑通 Jekyll + GitHub Pages 的备忘。
> 留给自己，也留给你。

## 为什么用 Pages

- **零成本**：GitHub 提供，子域名是 `<user>.github.io`，无需备案
- **零运维**：push 就发布，5 分钟出站
- **可携带**：纯 Markdown + Jekyll，将来想换 Hugo / Hexo / 静态生成器都容易迁移
- **绑定现有账号**：直接挂在 `DASEIN16615.github.io`，不用新号

## 仓库结构（最小可用版）

```
DASEIN16615.github.io/
├── _config.yml         # Jekyll 全站配置
├── _layouts/
│   └── default.html    # 唯一布局，深色
├── index.md            # 首页
├── about.md            # 关于
├── archive.md          # 归档
└── _posts/             # 按 YYYY-MM-DD-title.md 命名
    └── 2026-09-02-hello-world.md
```

## 隐私安全

- 仓库**公开**（GitHub Pages 强制要求）
- 全局 git config 是 `DASEIN / 2158793923@qq.com`（带 QQ 邮箱）
- **这个仓库局部覆盖**为 `DASEIN16615 / 255345674+DASEIN16615@users.noreply.github.com`
- 后果：博客 commit 历史只出现 noreply 邮箱，全局 config 不受影响

## 本地预览（可选）

```bash
gem install bundler jekyll
bundle init && bundle add jekyll
bundle exec jekyll serve
# → http://127.0.0.1:4000
```

GitHub Pages 后台会自动按 `_config.yml` 渲染。

## 写作流（给自己立的规矩）

1. **打开 `_posts/YYYY-MM-DD-标题.md`**
2. frontmatter 必须写 `title / date / categories`，可选 `layout / tags`
3. 正文 Markdown，**中文段落之间空一行**（GitHub Pages 解析要求）
4. `git add . && git commit -m "..." && git push`
5. **不要**接触全局 `~/.gitconfig`（已用 `git config --local` 解耦）

## 接下来的 TODO

- [ ] 写一篇 DS&A 学习笔记（Weiss 第 X 章）
- [ ] 把 A 股回测脚本结论整理过来
- [ ] 加 RSS / sitemap / 标签聚合页（需要时）
- [ ] 考虑要不要用 Obsidian 直接写、推到仓库

— DASEIN1011
