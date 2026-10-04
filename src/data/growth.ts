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
    title: '个人“数字此在”工程主页重构与技术雷达上线',
    category: 'CS',
    description: '将个人博客全面重构为集成长记录、工程作品集、沉浸式简历与 GitHub 精选雷达于一体的数字据点。保持纸质学术美学，接入自动化工作流。',
    takeaway: '数字资产的外化与持续沉淀，是检验个人知识深度与工程闭环的最佳方式。',
    badge: '里程碑',
  },
  {
    date: '2026-09',
    title: '确立 A/B 日双轨学习节律与 CS 底层深度攻坚',
    category: 'CS',
    description: '大二上学期开启，推行“单主线铁律”，周投入约 43h 学习 + 7h 泛读。全力攻坚 CSAPP、数据结构与算法底层实现、Linux 系统编程与数字逻辑。',
    takeaway: '任何时候只允许一条深度主线，收敛注意力才能在系统底层形成穿透力。',
  },
  {
    date: '2026-08',
    title: '建立标准化实盘交易决策单与投机反思复盘',
    category: 'Quant',
    description: '建仓小商品城 (600415)，严格执行事前逻辑假设、止损线与持仓纪律留档；复盘黄金投机教训，彻底摒弃跟风情绪化操作。',
    takeaway: '投资必须基于独立的底层逻辑。没有系统化规则支撑的仓位，本质都是赌博。',
    badge: '认知迭代',
  },
  {
    date: '2026-07',
    title: '搭建 Lean Quant Lab v1.4.2 本地回测实验室',
    category: 'Quant',
    description: '自研极低换手率量化回测引擎，排除高频噪音，聚焦科技资产与半导体 ETF，验证月度 PE 轮动与规则化定投的可行性，寻找 3~5% 的稳定“平凡因子”。',
    takeaway: '追求高换手的高频圣杯往往是徒劳的；耐得住寂寞的低频平凡因子才是可长期复利的基石。',
  },
  {
    date: '2026-06',
    title: '购入 Giant PCR LTD 2 并启动公路车长途耐受训练',
    category: 'Fitness',
    description: '配置 Giant PCR LTD 2（MY2026），规划京津 110km 骑行路线。前置开展 60~80km 试骑，验证 3h+ 锁踏与坐姿耐受度。',
    takeaway: '长距离运动不仅考验心肺，更考验器材适配度、补给规划与躯干核心承重极限。',
  },
  {
    date: '2026-05',
    title: '制定 2026 年底半马连续完赛科学训练周期',
    category: 'Fitness',
    description: '从全马科学降级为半马自补给连续跑完目标，规避长距离伤病。建立以配速、HRV（心率变异性）与晨脉监测为核心的 13 周训练周期，跑步作为情绪调节主工具。',
    takeaway: '运动的本质是自我感知与长期可持续性，不参赛、不跑走结合、安全完赛即是胜利。',
    badge: '自律基石',
  },
  {
    date: '2026-03',
    title: '构建晨间情报内参与资产双轴量化自动化流水线',
    category: 'CS',
    description: '开源 index-take-profit-monitor，打通宽基指数双轴量化（估值管定投、趋势管止盈）、宏观资产、Hugging Face AI 论文与《经济学人》双语精读，实现每日 09:00 CST 全自动邮件推送。',
    takeaway: '通过云端 Serverless 自动化将个人认知输入与量化风控工具化，是工程能力落地的最好试验田。',
  },
  {
    date: '2025-09',
    title: '首都师范大学计算机科学与技术专业入学',
    category: 'CS',
    description: '正式开启计算机本科专业生涯，确立以计算机系统底层、数理基石与前沿人工智能应用为主轴的技术成长路线图。',
    takeaway: '大学是建立自主认知体系与深度工程习惯的黄金起点。',
    badge: '起点',
  },
];
