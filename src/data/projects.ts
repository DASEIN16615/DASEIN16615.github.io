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
  image?: string;
  articleUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'index-take-profit-monitor',
    title: 'Morning Intelligence Briefing · 晨间早报推送',
    subtitle: '指数估值与均线监控 · 宏观数据与论文聚合 · 《经济学人》双语阅读',
    description: '每日早晨通过 GitHub Actions 定时运行的 Python 小脚本。根据宽基指数历史 PE/PB 分位与均线趋势计算定投参考，汇总 10 年期美债、黄金行情与 Hugging Face 论文摘要，并提取一段《经济学人》双语材料，渲染为 HTML 邮件发送到个人邮箱。',
    category: 'Quant',
    tags: ['Python', 'GitHub Actions', '自动化', '指数定投', '资讯聚合'],
    github: 'https://github.com/DASEIN16615/index-take-profit-monitor',
    image: '/images/briefing-preview.jpg',
    articleUrl: '/posts/morning-intelligence-briefing',
    featured: true,
    status: 'Active',
    highlights: [
      '宽基指数监控：根据估值百分位调节定投参考，结合均线趋势提供分批止盈提醒',
      '信息聚合：汇总 10 年期美债、黄金等关键资产，抓取 Hugging Face 高票论文摘要',
      '双语阅读习惯：自动提取《经济学人》精炼段落，包含参考译文与重点生词',
      '零成本定时运行：基于 GitHub Actions 每日定时触发，纯标准库无外部依赖',
    ],
  },
  {
    id: 'vibe-coding',
    title: 'Vibe-Coding 实践记录',
    subtitle: 'AI 辅助编程工作流与智能体配置实践',
    description: '记录大模型时代下利用 AI 结对编程的日常习惯与配置模式。包含 Agent 提示词工程、长短期记忆管理、本地工作区联动以及轻量级自动化工作流的设计心得。',
    category: 'Agent',
    tags: ['AI-Native', '工作流', '提示词工程', '配置实践'],
    github: 'https://github.com/DASEIN16615/Vibe-Coding',
    featured: true,
    status: 'Active',
    highlights: [
      '梳理日常利用大模型进行多轮结对编程与代码重构的规范',
      '尝试分层记忆管理：将工作区上下文与长期偏好做清晰解耦',
      '针对个人开发习惯编写自定义辅助技能与规则配置',
    ],
  },
  {
    id: 'dsa-code-implementation',
    title: 'Data Structures & Algorithms',
    subtitle: '基于 C++ 的经典数据结构实现与作业练习',
    description: '使用纯 C++ 手写实现的常见数据结构与算法练习，涵盖线性表、二叉树、平衡树、图的遍历与最短路径等。注重指针操作的严谨性与内存管理，对照理论分析时间与空间复杂度。',
    category: 'Algorithms',
    tags: ['C++', '数据结构', '算法练习', 'PTA', '底层基础'],
    github: 'https://github.com/DASEIN16615/Data-Structures-and-Algorithm-Analysis---Code-Implementation',
    featured: false,
    status: 'Active',
    highlights: [
      '纯手写实现经典结构，巩固指针、内存管理与递归思维',
      '注重边界用例测试，严谨处理极端边界与异常输入',
      '对照课程体系分析算法的时间与空间复杂度',
    ],
  },
  {
    id: 'lean-quant-lab',
    title: 'Lean Quant Lab',
    subtitle: '低频定投与指数轮动规则回测练习',
    description: '个人编写的轻量级量化回测与数据处理练习项目。坚持低频、稳健的思路，验证宽基指数与半导体 ETF 的月度轮动及定投规则，尝试寻找简单直观的规则化定投逻辑。',
    category: 'Quant',
    tags: ['Python', '回测练习', '定投策略', '资产配置'],
    featured: true,
    status: 'Active',
    highlights: [
      '避免复杂的过度拟合，专注规则简单、可长期执行的低频思路',
      '编写轻量回测脚本，模拟定投效果并计入基础交易费率',
      '结合个人实盘交易记录，做好事前假设与事后反思',
    ],
  },
  {
    id: 'blue-bridge-cup-notes',
    title: 'Blue Bridge Cup Study Notes',
    subtitle: '算法竞赛高频知识点与真题题解笔记',
    description: '针对算法竞赛的系统性复习与题解整理。总结动态规划、图论连通性、数论基础及贪心算法等常见题型，归纳解题思路与常用代码模板。',
    category: 'Algorithms',
    tags: ['C++', '算法竞赛', '蓝桥杯', '题解笔记'],
    github: 'https://github.com/DASEIN16615/Blue-Bridge-Cup-Study-Notes',
    featured: false,
    status: 'Completed',
    highlights: [
      '以真题为导向的题型归类与解题模板整理',
      '总结常见边界陷阱与调试技巧',
    ],
  },
];
