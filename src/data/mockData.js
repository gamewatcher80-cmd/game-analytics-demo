// 准备中项目 数据分析平台 - Mock 数据
// 用于展示 UI 效果，模拟真实数据

// 地区标识
export const REGIONS = {
  EN: 'en',
  KR: 'kr', 
  TW: 'tw'
};

export const REGION_NAMES = {
  en: 'English',
  kr: '한국어',
  tw: '繁體中文'
};

// KPI 数据
export const kpiData = {
  dau: 125000,
  mau: 890000,
  retention1: 45,
  retention7: 28,
  retention30: 15,
  payRate: 6.5,
  arpu: 12.5,
  arppu: 185,
  ltv: 320
};

// KPI 趋势数据（1/1 ~ 12/31 全年12个月）
export const kpiTrendData = Array.from({ length: 12 }, (_, i) => {
  const month = i + 1;
  // 模拟季节性波动：年初低，年中高峰，年末回落
  const seasonalFactor = 1 + Math.sin((month / 12) * Math.PI * 2) * 0.3;
  return {
    date: `${month}/1`,
    newUsers: Math.floor((25000 + Math.random() * 15000) * seasonalFactor),
    continuousActive: Math.floor((85000 + Math.random() * 20000) * seasonalFactor),
    returningUsers: Math.floor((12000 + Math.random() * 8000) * seasonalFactor),
    dau: 120000 + Math.floor(Math.random() * 15000),
    mau: 850000 + Math.floor(Math.random() * 80000),
    revenue: Math.floor((1800000 + Math.random() * 800000) * seasonalFactor),
    arpu: 11 + Math.random() * 3
  };
});

// 近30天活跃用户趋势数据
export const dailyActiveTrendData = Array.from({ length: 30 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (29 - i));
  const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.15;
  return {
    date: `${date.getMonth() + 1}/${date.getDate()}`,
    fullDate: date.toISOString().split('T')[0],
    dau: Math.floor((115000 + Math.random() * 20000) * dayFactor),
    newUsers: Math.floor((22000 + Math.random() * 8000) * dayFactor),
    continuousActive: Math.floor((78000 + Math.random() * 15000) * dayFactor),
    returningUsers: Math.floor((10000 + Math.random() * 5000) * dayFactor)
  };
});

// 抽卡分析数据
export const gachaData = {
  // 卡池收入
  poolRevenue: [
    { name: '周年庆限定', revenue: 2800000, pulls: 45000 },
    { name: '新年限定', revenue: 2200000, pulls: 38000 },
    { name: '联动限定', revenue: 1800000, pulls: 32000 },
    { name: '概率up池', revenue: 1500000, pulls: 28000 },
    { name: '常驻池', revenue: 800000, pulls: 18000 },
  ],
  // 抽卡次数分布
  pullCountDist: [
    { range: '1-50', count: 35000 },
    { range: '51-100', count: 28000 },
    { range: '101-150', count: 18000 },
    { range: '151-200', count: 12000 },
    { range: '200+', count: 8000 },
  ],
  // 保底触发统计
  guaranteeStat: [
    { name: '首次保底', rate: 65 },
    { name: '第2次保底', rate: 45 },
    { name: '第3次保底', rate: 30 },
    { name: '第4次保底(大保底)', rate: 15 },
  ],
  // 抽卡概率
  gachaRate: [
    { rarity: 'SSR', rate: 3, count: 4500 },
    { rarity: 'SR', rate: 18, count: 27000 },
    { rarity: 'R', rate: 79, count: 118500 },
  ]
};

// 卡牌分析数据
export const cardData = {
  // 卡牌使用率排行
  usageRank: [
    { name: '角色1', rarity: 'SSR', usage: 89 },
    { name: '角色2', rarity: 'SSR', usage: 85 },
    { name: '角色3', rarity: 'SSR', usage: 82 },
    { name: '角色4', rarity: 'SSR', usage: 78 },
    { name: '角色5', rarity: 'SR', usage: 75 },
    { name: '角色6', rarity: 'SSR', usage: 72 },
    { name: '角色7', rarity: 'SR', usage: 68 },
    { name: '角色8', rarity: 'SSR', usage: 65 },
    { name: '角色9', rarity: 'R', usage: 62 },
    { name: '角色10', rarity: 'SR', usage: 58 },
  ],
  // 卡牌强度分布
  strengthDist: [
    { rarity: 'SSR', avg: 92, min: 75, max: 98 },
    { rarity: 'SR', avg: 72, min: 55, max: 85 },
    { rarity: 'R', avg: 52, min: 35, max: 65 },
  ],
  // 角色培养成本
  cultivationCost: [
    { name: 'SSR角色', avgCost: 15000, days: 7 },
    { name: 'SR角色', avgCost: 8000, days: 4 },
    { name: 'R角色', avgCost: 3000, days: 2 },
  ]
};

// 用户行为数据
export const userBehaviorData = {
  // 活跃时段分布（简化热力图数据）
  activeHours: Array.from({ length: 24 }, (_, hour) => ({
    hour,
    weekday: Math.floor(Math.random() * 5000) + 1000,
    weekend: Math.floor(Math.random() * 8000) + 2000
  })),
  // 留存曲线
  retentionCurve: [
    { day: 'Day 1', rate: 45 },
    { day: 'Day 2', rate: 38 },
    { day: 'Day 3', rate: 34 },
    { day: 'Day 7', rate: 28 },
    { day: 'Day 14', rate: 22 },
    { day: 'Day 30', rate: 15 },
  ],
  // 用户操作路径
  userPath: [
    { from: '启动', to: '抽卡', value: 45000 },
    { from: '抽卡', to: '养成', value: 35000 },
    { from: '养成', to: '战斗', value: 30000 },
    { from: '战斗', to: '社交', value: 20000 },
  ]
};

// 活动效果数据
export const eventData = {
  // 活动期间收入趋势
  eventTrend: Array.from({ length: 14 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: 500000 + Math.floor(Math.random() * 300000),
    participants: 80000 + Math.floor(Math.random() * 20000)
  })),
  // 活动对比
  eventCompare: [
    { name: '周年庆', revenue: 2800000, participation: 95, conversion: 12 },
    { name: '新年活动', revenue: 2200000, participation: 88, conversion: 10 },
    { name: '联动活动', revenue: 1800000, participation: 82, conversion: 8 },
    { name: '普通活动', revenue: 1200000, participation: 65, conversion: 6 },
  ]
};

// 用户分群数据
export const userSegmentationData = {
  // 用户类型分布
  userTypeDist: [
    { name: '鲸鱼用户 (>$500)', value: 2, count: 5200 },
    { name: '海豚用户 ($50-500)', value: 15, count: 38500 },
    { name: '小鱼用户 ($1-50)', value: 35, count: 89500 },
    { name: '免费用户', value: 48, count: 122800 },
  ],
  // 用户群组列表
  userGroups: [
    { id: 1, name: '活跃付费用户', count: 32000, avgSpend: 280, retention: 78 },
    { id: 2, name: '活跃免费用户', count: 45000, avgSpend: 0, retention: 45 },
    { id: 3, name: '流失风险用户', count: 18000, avgSpend: 120, retention: 22 },
    { id: 4, name: '回流用户', count: 8500, avgSpend: 85, retention: 55 },
    { id: 5, name: '新用户', count: 22000, avgSpend: 15, retention: 38 },
  ]
};

// 流失预警数据
export const churnData = {
  // 风险等级分布
  riskDist: [
    { name: '高风险', value: 8, count: 8500 },
    { name: '中风险', value: 18, count: 19200 },
    { name: '低风险', value: 74, count: 78500 },
  ],
  // 高风险用户列表
  riskUsers: Array.from({ length: 10 }, (_, i) => ({
    id: `user_${1000 + i}`,
    level: Math.floor(Math.random() * 80) + 20,
    lastActive: Math.floor(Math.random() * 14) + 7,
    riskScore: Math.floor(Math.random() * 30) + 70
  }))
};

// 收入分析数据
export const revenueData = {
  // ARPU/ARPPU/LTV 趋势
  revenueTrend: Array.from({ length: 12 }, (_, i) => ({
    month: `${i + 1}月`,
    arpu: 10 + Math.random() * 5,
    arppu: 160 + Math.random() * 50,
    ltv: 280 + Math.random() * 80
  })),
  // 收入地区分布
  regionRevenue: [
    { name: 'English', value: 45, amount: 5800000 },
    { name: '한국어', value: 30, amount: 3900000 },
    { name: '繁體中文', value: 25, amount: 3200000 },
  ]
};

// 付费漏斗数据
export const funnelData = [
  { stage: '曝光', value: 1000000, rate: 100 },
  { stage: '下载', value: 450000, rate: 45 },
  { stage: '注册', value: 320000, rate: 32 },
  { stage: '首次付费', value: 48000, rate: 4.8 },
  { stage: '复购', value: 28000, rate: 2.8 },
];

// 数值平衡数据
export const balanceData = {
  // 强度分布（按稀有度）
  strengthByRarity: [
    { rarity: 'SSR', min: 75, q1: 85, median: 92, q3: 95, max: 98 },
    { rarity: 'SR', min: 55, q1: 65, median: 72, q3: 78, max: 85 },
    { rarity: 'R', min: 35, q1: 45, median: 52, q3: 58, max: 65 },
  ],
  // 属性克制矩阵
  attributeMatrix: [
    { attr: '旋律', strong: '节奏', weak: '技巧', value: 85 },
    { attr: '节奏', strong: '技巧', weak: '旋律', value: 78 },
    { attr: '技巧', strong: '旋律', weak: '节奏', value: 72 },
  ]
};

// 地区对比数据
export const regionComparisonData = {
  overview: {
    en: { dau: 55000, mau: 380000, arpu: 14.2, payRate: 7.2 },
    kr: { dau: 38000, mau: 280000, arpu: 11.5, payRate: 6.8 },
    tw: { dau: 32000, mau: 230000, arpu: 11.8, payRate: 5.9 }
  },
  revenue: [
    { name: 'EN', value: 5800000 },
    { name: 'KR', value: 3900000 },
    { name: 'TW', value: 3200000 }
  ],
  retention: [
    { region: 'EN', day1: 48, day7: 32, day30: 18 },
    { region: 'KR', day1: 42, day7: 25, day30: 14 },
    { region: 'TW', day1: 45, day7: 27, day30: 16 }
  ]
};