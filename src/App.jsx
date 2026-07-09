import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Overview from './components/Dashboard/Overview';
import UserBehavior from './components/Analysis/UserBehavior';
import GachaAnalysis from './components/Analysis/GachaAnalysis';
import CardAnalysis from './components/Analysis/CardAnalysis';
import EventEffect from './components/Analysis/EventEffect';
import Retention from './components/Analysis/Retention';
import PurchaseFunnel from './components/Commercial/PurchaseFunnel';
import RegionComparison from './components/Region/RegionComparison';
// 新增页面组件
import RealtimeData from './components/Analysis/RealtimeData';
import DailyData from './components/Analysis/DailyData';
import WeeklyData from './components/Analysis/WeeklyData';
import MonthlyData from './components/Analysis/MonthlyData';
import RetentionNew from './components/Analysis/RetentionNew';
import LTV from './components/Analysis/LTV';
import ReturningUser from './components/Analysis/ReturningUser';
import ConversionFunnel from './components/Analysis/ConversionFunnel';
import ActiveData from './components/Analysis/ActiveData';
import PaymentRecharge from './components/Analysis/PaymentRecharge';
import PaymentConsume from './components/Analysis/PaymentConsume';
import PaymentPrivilege from './components/Analysis/PaymentPrivilege';
import AnonTokyoStore from './components/Analysis/AnonTokyoStore';
import AdsData from './components/Analysis/AdsData';
import InGameAds from './components/Analysis/InGameAds';
import SimplifiedCNUser from './components/Analysis/SimplifiedCNUser';

const pageTitles = {
  // KPI 仪表盘（第1位）
  overview: 'KPI 仪表盘',
  // 目标网站标签
  realtime: '实时数据',
  daily: '每日数据',
  weekly: '每周数据',
  monthly: '每月数据',
  active: '活跃',
  'retention-new': '留存',
  ltv: 'LTV',
  returning: '回流用户',
  'funnel-conversion': '转化率漏斗',
  'payment-recharge': '付费数据-充值',
  'payment-consume': '付费数据-消耗',
  'payment-privilege': '付费数据-特权卡',
  'anon-tokyo-store': '商店副玩法',
  ads: '投放数据',
  // 原有标签
'user-behavior': '用户行为分析',
      gacha: '抽卡分析',
      card: '卡牌分析',
      event: '活动效果分析',
      retention: '留存分析',
      funnel: '付费漏斗',
      region: '地区对比',
      'cn-user': '简中用户',
};

function App() {
  const [currentPage, setCurrentPage] = useState('realtime');
  const [currentRegion, setCurrentRegion] = useState('en');

  const renderPage = () => {
    switch (currentPage) {
      // 目标网站页面
      case 'realtime':
        return <RealtimeData currentRegion={currentRegion} />;
      case 'daily':
        return <DailyData currentRegion={currentRegion} />;
      case 'weekly':
        return <WeeklyData currentRegion={currentRegion} />;
      case 'monthly':
        return <MonthlyData currentRegion={currentRegion} />;
      case 'active':
        return <ActiveData currentRegion={currentRegion} />;
      case 'retention-new':
        return <RetentionNew currentRegion={currentRegion} />;
      case 'ltv':
        return <LTV currentRegion={currentRegion} />;
      case 'returning':
        return <ReturningUser currentRegion={currentRegion} />;
      case 'funnel-conversion':
        return <ConversionFunnel currentRegion={currentRegion} />;
      case 'payment-recharge':
        return <PaymentRecharge currentRegion={currentRegion} />;
      case 'payment-consume':
        return <PaymentConsume currentRegion={currentRegion} />;
      case 'payment-privilege':
        return <PaymentPrivilege currentRegion={currentRegion} />;
      case 'anon-tokyo-store':
        return <AnonTokyoStore currentRegion={currentRegion} />;
      case 'in-game-ads':
        return <InGameAds currentRegion={currentRegion} />;
      case 'ads':
        return <AdsData currentRegion={currentRegion} />;
      // 原有页面
      case 'overview':
        return <Overview currentRegion={currentRegion} />;
      case 'user-behavior':
        return <UserBehavior />;
      case 'gacha':
        return <GachaAnalysis />;
      case 'card':
        return <CardAnalysis />;
      case 'event':
        return <EventEffect />;
      case 'retention':
        return <Retention />;
      case 'funnel':
        return <PurchaseFunnel />;
      case 'region':
        return <RegionComparison />;
      case 'cn-user':
        return <SimplifiedCNUser currentRegion={currentRegion} />;
      default:
        return <RealtimeData currentRegion={currentRegion} />;
    }
  };

  return (
    <Layout
      currentPage={currentPage}
      onPageChange={setCurrentPage}
      currentRegion={currentRegion}
      onRegionChange={setCurrentRegion}
      pageTitle={pageTitles[currentPage]}
    >
      {renderPage()}
    </Layout>
  );
}

export default App;