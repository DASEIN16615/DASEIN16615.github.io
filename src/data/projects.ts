export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Quant' | 'Agent' | 'Systems' | 'Algorithms';
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  highlights: string[];
  status: 'Active' | 'Completed' | 'Researching';
}

export const projects: Project[] = [
  {
    id: 'index-take-profit-monitor',
    title: 'Morning Intelligence Briefing · 晨间情报内参',
    subtitle: '自动化资产双轴量化 · 全球宏观 · 前沿 AI 科技 · 《经济学人》双语精读',
    description: '基于 Serverless 闭环架构的每日个人情报中枢。融合“资产双轴量化模型”（纳指100/标普500/沪深300/中证500 PE/PB分位与SMA200动态止盈）、全球宏观核心风向标（10年美债/现货黄金/费城半导体）、Hugging Face 每日顶级 AI 论文前沿，以及《经济学人》严格双语精读与高阶词汇拆解。每日 09:00 CST 自动聚合渲染响应式 HTML 报告推送至 QQ 邮箱。',
    category: 'Quant',
    tags: ['Python', 'GitHub Actions', 'Serverless', '量化双轴模型', '宏观与AI雷达', '经济学人精读'],
    github: 'https://github.com/DASEIN16615/index-take-profit-monitor',
    featured: true,
    status: 'Active',
    highlights: [
      '指数双轴模型：PE/PB 估值分位控制定投系数（仓位调节），SMA200 趋势确认严格分批止盈',
      '多维情报聚合：宏观资产（美债/黄金/费半）+ Hugging Face AI 论文前沿 + CNBC 宏观快讯',
      '《经济学人》双语深度精读引擎：独立原文与译文分块，长难句与 CET-4/考研核心词法萃取',
      '云端 Serverless 零成本闭环：GitHub Actions + Cloudflare 定时触发，全模块熔断容错',
    ],
  },
  {
    id: 'vibe-coding',
    title: 'Vibe-Coding 实践模式库',
    subtitle: 'AI-Native 辅助编程范式与 Agent 系统架构沉淀',
    description: '探索大模型时代下 AI-Native 编程的最佳工作流实践。深入研究自主智能体（Autonomous Agents）架构设计、上下文窗口工程（Context Management）、长短期记忆分治机制以及跨平台工具链调用模式。',
    category: 'Agent',
    tags: ['AI-Native', 'Agent Architecture', 'Workflow', 'Prompt Engineering'],
    github: 'https://github.com/DASEIN16615/Vibe-Coding',
    featured: true,
    status: 'Active',
    highlights: [
      '沉淀现代 LLM 驱动的多轮结对编程规范与代码审查流',
      '分层记忆架构：物理映射隔离、工作记忆与用户长期画像解耦',
      '自研标准化 Skill 封装规程与边界防御体系',
    ],
  },
  {
    id: 'dsa-code-implementation',
    title: 'Data Structures & Algorithm Analysis',
    subtitle: '基于 C++ 的核心数据结构底层实现与严苛算法复杂度剖析',
    description: '手写计算机底层经典数据结构与核心算法，包含线性表、树形结构、平衡树、图论遍历及最短路等算法。深度对比理论时间复杂度与实机硬件运行开销，针对 PTA 平台严苛边界条件做全覆盖调试与内存泄漏检测。',
    category: 'Algorithms',
    tags: ['C++', '数据结构', '算法复杂度', 'PTA', '底层实现'],
    github: 'https://github.com/DASEIN16615/Data-Structures-and-Algorithm-Analysis---Code-Implementation',
    featured: false,
    status: 'Active',
    highlights: [
      '纯 C++ 底层无黑盒手写，指针级内存管理与状态控制',
      '严苛边界用例测试，兼容 PTA 平台宏与 Status 工业规范',
      '算法复杂度实测与 CSAPP 汇编/机器指令优化级对照',
    ],
  },
  {
    id: 'lean-quant-lab',
    title: 'Lean Quant Lab v1.4.2',
    subtitle: '低频稳健资产轮动与定投回测量化研究框架',
    description: '自主搭建的轻量级量化回测与因子挖掘系统。坚持低频、稳健、可解释的投资哲学，聚焦半导体 ETF 等科技资产。系统化验证月度 PE 轮动模型与规则化定投逻辑，旨在挖掘年化 3~5% 稳定、无需频繁调仓的“平凡因子”。',
    category: 'Quant',
    tags: ['Python', '量化回测', '低频策略', '资产配置', '因子挖掘'],
    featured: true,
    status: 'Active',
    highlights: [
      '规避高频换手与噪音交易，专注可复现的低频基本面因子',
      '自建回测引擎，精确模拟滑点、交易费率与再平衡磨损',
      '结合个人实盘交易日志沉淀闭环决策链',
    ],
  },
  {
    id: 'blue-bridge-cup-notes',
    title: 'Blue Bridge Cup Study Notes',
    subtitle: '算法竞赛高频考点解构与真题题解体系',
    description: '针对蓝桥杯算法竞赛的系统性复习与实战笔记。整理动态规划状态转移、图论连通性、数论基础、高精度及经典贪心等高频考点，结合大量真题进行模板化提炼与变式归纳。',
    category: 'Algorithms',
    tags: ['C++', '算法竞赛', '蓝桥杯', '题解笔记'],
    github: 'https://github.com/DASEIN16615/Blue-Bridge-Cup-Study-Notes',
    featured: false,
    status: 'Completed',
    highlights: [
      '真题驱动的知识点索引与模块化思维导图',
      '标准高复用模板代码与边界易错点防御清单',
    ],
  },
];
