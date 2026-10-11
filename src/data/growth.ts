export interface GrowthMilestone {
  date: string; // YYYY-MM
  title: string;
  category: 'CS' | 'Quant' | 'Fitness' | 'Reading';
  description: string;
  takeaway: string;
  badge?: string;
}

export const growthMilestones: GrowthMilestone[] = [
  {
    date: '2026-10',
    title: 'CMC 全国大学生数学竞赛（非数学 A 类甲组）备考复习',
    category: 'CS',
    description: '报名北京赛区非数学 A 类甲组（北京科技大学考点），以高数真题为抓手进行阶段性系统复习，梳理极限、微分中值定理、积分与级数等难点。',
    takeaway: '解题手感需要靠踏踏实实的真题练习来积累，概念理解越透彻，做题心里越有底。',
    badge: '学科竞赛',
  },
  {
    date: '2026-10',
    title: '个人博客排版与内容模块梳理',
    category: 'CS',
    description: '重新整理个人博客的页面布局、成长轴、工程列表、书单与开源项目雷达。注重纯净的阅读排版，记录真实的学习与生活轨迹。',
    takeaway: '文字记录是对自己思维的一次整理，诚实、清楚地写出来比追求虚浮的名词重要得多。',
    badge: '日常整理',
  },
  {
    date: '2026-09',
    title: '推进《深入理解计算机系统 (CSAPP)》阅读与数据结构练习',
    category: 'CS',
    description: '保持相对规律的学习节奏。从数据的机器级表示、汇编语言入手，逐步学习程序在底层硬件和操作系统上的运行机制；同时坚持手写 C++ 常见数据结构。',
    takeaway: '耐心读懂底层基础，很多上层看似复杂的问题其实在底层都有直接的对应。',
    badge: '专业基础',
  },
  {
    date: '2026-08',
    title: '制定 17 周自补给半马训练计划：防范伤病与渐进恢复',
    category: 'Fitness',
    description: '针对膝盖外侧 ITBS 不适与偏瘦体重（约 53kg），制定了稳步渐进的恢复安排。加强臀中肌与单腿力量，严控速度，以无痛安全跑完半马为目标。',
    takeaway: '跑步不是盲目逞强，在不受伤的前提下慢慢跑，才能真正长久地坚持下去。',
    badge: '生活习惯',
  },
  {
    date: '2026-08',
    title: '建立个人交易决策单与投机反思复盘',
    category: 'Quant',
    description: '记录小商品城 (600415) 等交易记录，要求自己买入前写明依据并设定止损线；复盘早期跟风买黄金等不成熟操作，反思跟风心理。',
    takeaway: '投资必须有清晰独立的理由，没有逻辑支撑的跟风操作本质都是盲目的。',
    badge: '投资反思',
  },
  {
    date: '2026-07',
    title: '梳理量化开发与研究分工：明确系统基础的重要性',
    category: 'Quant',
    description: '了解量化团队中 QR（研究）与 QD（开发）的不同要求。结合普通本科的现实约束，认识到现阶段打好 C++ 与计算机底层基本功是更扎实、更具通用性的方向。',
    takeaway: '不跟风炒作概念，踏实积累具备通用价值的底层工程能力。',
    badge: '认知梳理',
  },
  {
    date: '2026-07',
    title: '搭建 Lean Quant Lab 本地定投回测练习',
    category: 'Quant',
    description: '编写 Python 脚本模拟宽基指数与半导体 ETF 的月度定投及轮动规则，排除高频噪音，验证简单规则在历史数据下的表现。',
    takeaway: '简单的规则往往比过度拟合的复杂策略更具备可执行性。',
  },
  {
    date: '2026-06',
    title: '购入 Giant PCR LTD 2 并开启公路车骑行',
    category: 'Fitness',
    description: '配置 Giant PCR LTD 2，周末开展 50~80km 骑行练习，逐步适应长时间坐姿耐受度与心肺体能。',
    takeaway: '骑行是很好的户外放松与有氧耐力锻炼，也能培养对体能节奏的把控感。',
  },
  {
    date: '2026-05',
    title: '将长跑目标明确为自补给连续跑完半马',
    category: 'Fitness',
    description: '考虑到伤病风险与低体重，将目标理性定为自补给跑完半马（21km）。不追求参赛，以连续慢跑、安全完赛为准则，将跑步作为心理与情绪调节的重要工具。',
    takeaway: '明确适合自己的节奏，不盲目与别人攀比，安全可持续就是最好的状态。',
    badge: '习惯养成',
  },
  {
    date: '2026-03',
    title: '搭建晨间行情与早报自动化邮件推送脚本',
    category: 'CS',
    description: '编写 index-take-profit-monitor 脚本，抓取宽基指数估值、10年期美债与黄金数据，并附带一篇《经济学人》短文段落，利用 GitHub Actions 每天早上发送到邮箱。',
    takeaway: '把重复的信息搜集动作交给简单脚本，早上能省下不少翻手机的时间。',
  },
  {
    date: '2025-09',
    title: '首都师范大学计算机科学与技术专业入学',
    category: 'CS',
    description: '开启大学计算机本科学习，确立以专业课基础、动手编程实践与身心健康为主线的生活与学习节奏。',
    takeaway: '大学是自主学习与建立个人秩序的起点。',
    badge: '起点',
  },
];
