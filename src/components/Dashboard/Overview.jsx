import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, Legend } from 'recharts';
import KPICard from './KPICard';
import { kpiData, kpiTrendData, regionComparisonData, dailyActiveTrendData } from '../../data/mockData';

const Overview = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startYear: new Date().getFullYear().toString(),
    endYear: new Date().getFullYear().toString()
  });

  const getRegionData = () => {
    const regionKey = currentRegion === 'en' ? 'en' : currentRegion === 'kr' ? 'kr' : 'tw';
    return regionComparisonData.overview[regionKey] || kpiData;
  };

  const regionKpi = getRegionData();

  // 自定义 Tooltip 样式
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  // 按新增时间的活跃用户数据（2024-2026年）
  const newUserCohortData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const seasonalFactor = 1 + Math.sin((month / 12) * Math.PI * 2) * 0.2;
    return {
      month: `${month}月`,
      newUsers2024: Math.floor((20000 + Math.random() * 10000) * seasonalFactor),
      newUsers2025: Math.floor((22000 + Math.random() * 12000) * seasonalFactor),
      newUsers2026: Math.floor((25000 + Math.random() * 15000) * seasonalFactor)
    };
  });

  // 新增趋势数据（按月份）
  const newUserTrendData = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      month: `${month}月`,
      newUsers: Math.floor(35000 + Math.random() * 20000),
      paidNewUsers: Math.floor(8000 + Math.random() * 5000),
      freeNewUsers: Math.floor(27000 + Math.random() * 15000)
    };
  });

  // 获取可选年份列表
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear - 5; y <= currentYear + 1; y++) {
    years.push(y.toString());
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始年份</label>
            <select
              value={dateRange.startYear}
              onChange={(e) => setDateRange({...dateRange, startYear: e.target.value})}
              style={{ width: '120px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}
            >
              {years.map(y => (
                <option key={y} value={y}>{y}年</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束年份</label>
            <select
              value={dateRange.endYear}
              onChange={(e) => setDateRange({...dateRange, endYear: e.target.value})}
              style={{ width: '120px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}
            >
              {years.map(y => (
                <option key={y} value={y}>{y}年</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all" style={{ width: '140px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all" style={{ width: '140px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部终端</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
              <option value="android_official">安卓官方包</option>
              <option value="pc_official">PC官方包</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>账号类型</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部</option>
              <option value="valid">有效</option>
              <option value="no_bot">去黑产</option>
              <option value="no_water">去水</option>
              <option value="valid_no_bot">有效+去黑产</option>
              <option value="valid_no_water">有效+去水</option>
              <option value="no_bot_no_water">去黑产+去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 年度统计 - 三列布局 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px'
      }}>
        <KPICard title="当前年收入" value="¥1256.8万" change={15.3} subtitle="较上期变化幅度" />
        <KPICard title="当前年新增" value="45.2万" change={8.7} subtitle="较上期变化幅度" />
        <KPICard title="当前年活跃" value="128.5万" change={5.2} subtitle="较上期变化幅度" />
      </div>

      {/* 活跃用户趋势 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)',
        gridColumn: '1 / -1'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: '15px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>活跃用户趋势</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyActiveTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="dau" stroke="#ef4444" strokeWidth={2} name="DAU" dot={false} />
            <Line type="monotone" dataKey="newUsers" stroke="var(--primary)" strokeWidth={2} name="新增用户" dot={false} />
            <Line type="monotone" dataKey="continuousActive" stroke="var(--success)" strokeWidth={2} name="持续活跃用户" dot={false} />
            <Line type="monotone" dataKey="returningUsers" stroke="var(--warning)" strokeWidth={2} name="回流用户" dot={false} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 活跃用户趋势-按新增时间 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)',
        gridColumn: '1 / -1'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: '15px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>活跃用户趋势-按新增时间</h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={newUserCohortData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Area type="monotone" dataKey="newUsers2024" stackId="1" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.4} name="2024年" />
            <Area type="monotone" dataKey="newUsers2025" stackId="1" stroke="#64748b" fill="#64748b" fillOpacity={0.5} name="2025年" />
            <Area type="monotone" dataKey="newUsers2026" stackId="1" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.6} name="2026年" />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 收入趋势 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)',
        gridColumn: '1 / -1'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: '15px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>收入趋势</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={kpiTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => v} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} tick={{fill: 'var(--text-muted)'}} domain={[0, 'auto']} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(value) => [`$${(value/1000).toFixed(1)}k`, '收入']} />
            <Area type="monotone" dataKey="revenue" stroke="var(--warning)" fill="url(#colorRevenue)" />
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--warning)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--warning)" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 新增趋势 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)',
        gridColumn: '1 / -1'
      }}>
        <h3 style={{
          color: 'var(--text-primary)',
          fontSize: '15px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>新增趋势</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={newUserTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="month" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(value) => value.toLocaleString()} />
            <Line type="monotone" dataKey="newUsers" stroke="var(--primary)" strokeWidth={2} name="总新增" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="paidNewUsers" stroke="var(--warning)" strokeWidth={2} name="付费新增" dot={{ r: 3 }} />
            <Line type="monotone" dataKey="freeNewUsers" stroke="var(--success)" strokeWidth={2} name="免费新增" dot={{ r: 3 }} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Overview;
