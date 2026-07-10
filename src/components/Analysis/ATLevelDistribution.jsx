import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  LineChart, Line
} from 'recharts';

const ATLevelDistribution = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 1. AT 活跃等级分布（昨日）—— 柱状图，10个等级
  const activeLevelData = [
    { level: '1级', users: 2500 },
    { level: '2级', users: 3200 },
    { level: '3级', users: 4100 },
    { level: '4级', users: 3800 },
    { level: '5级', users: 2900 },
    { level: '6级', users: 2100 },
    { level: '7级', users: 1500 },
    { level: '8级', users: 980 },
    { level: '9级', users: 520 },
    { level: '10级', users: 260 },
  ];

  // 2. AT 历史等级分布（最近30日累计）—— 柱状图，10个等级
  const historicalLevelData = [
    { level: '1级', users: 15000 },
    { level: '2级', users: 22000 },
    { level: '3级', users: 31000 },
    { level: '4级', users: 28000 },
    { level: '5级', users: 21000 },
    { level: '6级', users: 16000 },
    { level: '7级', users: 12000 },
    { level: '8级', users: 8500 },
    { level: '9级', users: 4800 },
    { level: '10级', users: 2500 },
  ];

  // 3. 各等级升级人数（昨日）—— 趋势图（按等级分布展示）
  const levelUpgradeData = [
    { level: '1级', count: 1800 },
    { level: '2级', count: 2400 },
    { level: '3级', count: 3100 },
    { level: '4级', count: 2800 },
    { level: '5级', count: 2100 },
    { level: '6级', count: 1500 },
    { level: '7级', count: 1000 },
    { level: '8级', count: 600 },
    { level: '9级', count: 300 },
    { level: '10级', count: 120 },
  ];

  // 4. 各等级奖励领取率（昨日）—— 趋势图
  const levelRewardData = [
    { level: '1级', rate: 85.2 },
    { level: '2级', rate: 82.5 },
    { level: '3级', rate: 78.3 },
    { level: '4级', rate: 75.1 },
    { level: '5级', rate: 72.8 },
    { level: '6级', rate: 68.4 },
    { level: '7级', rate: 65.2 },
    { level: '8级', rate: 61.7 },
    { level: '9级', rate: 58.3 },
    { level: '10级', rate: 55.1 },
  ];

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始时间</label>
            <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束时间</label>
            <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all">
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all">
              <option value="all">全部</option>
              <option value="ios">iOS</option>
              <option value="android">安卓</option>
              <option value="android_official">安卓官方包</option>
              <option value="pc_official">PC官方包</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>账号类型</label>
            <select defaultValue="all">
              <option value="all">全部</option>
              <option value="valid">有效</option>
              <option value="no_bot">去黑产</option>
              <option value="no_water">去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 1. AT 活跃等级分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>AT 活跃等级分布</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={activeLevelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="level" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Bar dataKey="users" fill="#3b82f6" name="用户人数" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. AT 历史等级分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>AT 历史等级分布（最近30日累计）</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={historicalLevelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="level" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Bar dataKey="users" fill="#22c55e" name="累计用户人数" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 各等级升级人数 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>各等级升级人数</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={levelUpgradeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="level" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={2} name="升级人数" dot={{r: 4}} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 各等级奖励领取率 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>各等级奖励领取率</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={levelRewardData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="level" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} unit="%" />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={2} name="领取率(%)" dot={{r: 4}} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ATLevelDistribution;
