---
title: 从资产双轴到晨间早报：一个零成本的自动化脚本
pubDate: 2026-10-04
description: 每天早上 9 点，GitHub Actions 跑一段纯 Python 脚本，算估值、看均线、抓论文、切一段经济学人，拼成 HTML 邮件发到 QQ 邮箱。做这件事的来龙去脉和核心规则。
tags: ["Python", "自动化", "量化", "经济学人", "Serverless"]
---

每天早上 9 点，GitHub Actions 会准时跑一段 Python 脚本。

它做的事情很机械：拉纳指和标普的行情、算估值分位、看均线、扫一眼 10 年期美债和黄金、抓几篇 Hugging Face 的热门论文，再从《经济学人》里切一段双语段落。最后把这些东西拼成一封响应式 HTML 邮件，通过 QQ 邮箱发给我。

做这个东西的原因挺俗的：我管不住自己的情绪，也讨厌每天早上在几个 App 之间来回切换。

---

## 邮件长什么样

这是一张实际收到的邮件截图。因为整封信比较长，做成了一个可以在框内滑动的预览窗口（也可以点击右上角看全屏原图）：

<div class="not-prose my-8 max-w-sm mx-auto p-3 rounded-[2.5rem] border-4 border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-950/60 shadow-xl">
  <div class="flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mb-2 px-2">
    <span>📱 邮件排版实况 (框内滑动)</span>
    <button data-lightbox="/images/briefing-preview.jpg" class="text-scholar-gold dark:text-scholar-goldDark hover:underline cursor-pointer font-bold">
      🔍 全屏大图
    </button>
  </div>
  <div class="h-[520px] overflow-y-auto rounded-[2rem] border border-zinc-300/60 dark:border-zinc-700/60 bg-zinc-900 shadow-inner relative cursor-zoom-in group" data-lightbox="/images/briefing-preview.jpg">
    <img src="/images/briefing-preview.jpg" alt="晨间情报内参实际投递效果" class="w-full h-auto object-cover object-top" loading="lazy" />
    <div class="sticky bottom-3 mx-auto w-max px-3 py-1 rounded-full text-[10px] font-mono bg-black/80 text-zinc-200 backdrop-blur-md border border-white/10 shadow-lg pointer-events-none">
      ↕ 框内上下滑动 · 点击全屏原图
    </div>
  </div>
</div>

整封邮件从上到下分成几块：
1. **资产双轴看板：** 标出当天的定投建议倍率，以及是否有标的触发趋势止盈；
2. **宏观异动条：** 标普500、10年美债收益率、COMEX 黄金、费城半导体、美元兑离岸人民币；
3. **四个核心指数卡片：** 纳指100、标普500、沪深300、中证500的点位、PE/PB 分位与 SMA200 偏离度；
4. **Hugging Face Papers：** 社区前三篇高票论文与中文精简速递；
5. **政经要闻：** CNBC 抓取的三条关键宏观消息；
6. **《经济学人》双语精读：** 原文段落、分块学术译文、核心生词与长难句拆解。

---

## 为什么要做双轴模型

以前买指数基金，我犯过大部分散户都会犯的错：牛市涨得厉害的时候忍不住加仓，震荡下跌的时候又慌着停投。

靠意志力对抗贪婪和恐惧通常行不通。后来觉得既然人性靠不住，不如直接写成死规则：**估值只管买多少，均线只管什么时候卖。**

### 1. 估值管定投（新钱进多少）
每天根据纳指、标普、沪深300、中证500的历史 PE/PB 百分位计算综合估值评分。评分决定定投倍率：

| 估值评分区间 | 定投比例 | 逻辑 |
| :---: | :---: | :--- |
| `< 40%` | **100% 定投** | 低估区，按计划买入或加大买入 |
| `40% ~ 60%` | **75% 定投** | 适中偏下，正常累积 |
| `60% ~ 75%` | **50% 定投** | 中枢偏上，收缩定投金额 |
| `75% ~ 85%` | **25% 定投** | 明显高估，少量维持 |
| `≥ 85%` | **0% 定投** | 极度高估，**全面暂停定投**，杜绝山顶送钱 |

### 2. 均线管止盈（存量怎么卖）
很多人高估就一把清仓，结果错失后面的主升浪；或者舍不得卖，最后坐一次过山车。

止盈规则限定得很死：
- 评分 `≥ 95%`，或者（评分 `≥ 90%` 且收盘价连续 2 天跌破 SMA200 均线且 20 日斜率为负）；
- 触发后**分批卖出**，每次卖存量的三分之一，卖出后间隔标的继续上涨 10% 才允许执行下一次；
- 卖出操作和定投完全解耦，卖出的钱沉淀到货基，定投按定投的规矩来。

---

## 宏观、论文与《经济学人》

邮件剩下的部分是顺手加的，主要是为了减少每天早上到处翻手机的摩擦力。

- **宏观资产：** 10 年期美债收益率是全球资产定价的锚，黄金反映风险偏好，费半反映科技股风向。每天扫一眼这几个数字，大体知道当天的流动性水位在哪。
- **AI 论文：** 社交媒体上充斥着大量包装过的 AI 营销文。抓 Hugging Face 当天的高票论文，看看真实研究者在折腾什么模型架构、推理优化或边缘计算，信噪比高得多。
- **《经济学人》双语精读：** 考研和四级需要看英文原刊，以前下过很多背单词软件，两天就荒废。后来索性用脚本每天从《经济学人》里切一段精炼段落，强制做物理分块：
  - 先给英文原文（不带中文）；
  - 用一条水平分割线 `---` 隔开；
  - 接着放学术翻译、3~5 个高频核心搭配和长难句语法剖析。
  每天吃早饭时花 3 分钟读完这一小段，反而坚持得最久。

---

## 为什么是 Serverless

这个系统没有租任何一台云服务器。

个人跑个每天只运行一次的小定时任务，特意买台轻量云服务器挂着，每个月几十块钱完全是浪费。整个流程全部跑在免费的云基础设施上：

1. **触发：** GitHub Actions 的 Cron 调度（每天 09:00 CST 自动启动容器），备用触发挂在 Cloudflare Workers 上；
2. **执行：** 纯 Python 标准库编写。没有装 `requests`，用 `urllib.request` 搞定请求，用 `smtplib` 发邮件。零外部 pip 依赖，GitHub Actions 的 Runner 启动到跑完只需要 8 秒；
3. **容错：** 海外接口偶尔抽风很正常。每个抓取模块都做了 `try...except` 降级，某一个接口超时只会填入备用标记，绝不让整封邮件崩掉；
4. **安全：** QQ 邮箱的 SMTP 授权码保存在 GitHub Secrets 里，代码仓库完全公开也不用担心泄露密码。

---

## 结语

用了几个月，最大的改变是早上省下了大把时间。

9 点收到邮件，花 3 分钟把估值看板、论文标题和英文段落扫完。看完了心里有底，关掉邮箱该上课上课，该敲代码敲代码。不需要再打开雪球看散户对骂，也不用在小红书或推特里漫无目的地刷信息流。

把机械、重复的信息搜集工作外化给程序，注意力才能留给自己的主线。
