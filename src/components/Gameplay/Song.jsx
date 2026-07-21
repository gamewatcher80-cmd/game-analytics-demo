import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const barColors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899', '#84cc16'];

const Song = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 每日曲目挑战排行(单人) - 昨日 Top 8
  const dailySingleData = [
    { song: '曲目1', count: 18500 },
    { song: '曲目2', count: 15200 },
    { song: '曲目3', count: 12800 },
    { song: '曲目4', count: 10500 },
    { song: '曲目5', count: 8200 },
    { song: '曲目6', count: 6500 },
    { song: '曲目7', count: 4800 },
    { song: '曲目8', count: 3200 },
  ];

  // 每日曲目挑战排行(多人) - 昨日 Top 8
  const dailyMultiData = [
    { song: '曲目1', count: 28000 },
    { song: '曲目2', count: 22500 },
    { song: '曲目3', count: 19800 },
    { song: '曲目4', count: 16200 },
    { song: '曲目5', count: 13500 },
    { song: '曲目6', count: 10800 },
    { song: '曲目7', count: 8200 },
    { song: '曲目8', count: 5500 },
  ];

  // 7日曲目挑战排行(单人) - Top 8
  const weeklySingleData = [
    { song: '曲目1', count: 128000 },
    { song: '曲目2', count: 105000 },
    { song: '曲目3', count: 88000 },
    { song: '曲目4', count: 72000 },
    { song: '曲目5', count: 56000 },
    { song: '曲目6', count: 42000 },
    { song: '曲目7', count: 31000 },
    { song: '曲目8', count: 20000 },
  ];

  // 7日曲目挑战排行(多人) - Top 8
  const weeklyMultiData = [
    { song: '曲目1', count: 195000 },
    { song: '曲目2', count: 162000 },
    { song: '曲目3', count: 138000 },
    { song: '曲目4', count: 112000 },
    { song: '曲目5', count: 92000 },
    { song: '曲目6', count: 75000 },
    { song: '曲目7', count: 58000 },
    { song: '曲目8', count: 38000 },
  ];

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  const formatNum = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toLocaleString();
  };

  return (
    <div style={{ padding: '24px' }}>
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

      {/* 1. 每日曲目挑战排行(单人) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日曲目挑战排行(单人)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dailySingleData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <YAxis type="category" dataKey="song" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} width={80} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="count" name="挑战次数" radius={[0, 4, 4, 0]}>
              {dailySingleData.map((entry, index) => <Cell key={`cell1-${index}`} fill={barColors[index % barColors.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 每日曲目挑战排行(多人) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日曲目挑战排行(多人)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dailyMultiData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <YAxis type="category" dataKey="song" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} width={80} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="count" name="挑战次数" radius={[0, 4, 4, 0]}>
              {dailyMultiData.map((entry, index) => <Cell key={`cell2-${index}`} fill={barColors[index % barColors.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 7日曲目挑战排行(单人) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>7日曲目挑战排行(单人)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={weeklySingleData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <YAxis type="category" dataKey="song" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} width={80} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="count" name="挑战次数" radius={[0, 4, 4, 0]}>
              {weeklySingleData.map((entry, index) => <Cell key={`cell3-${index}`} fill={barColors[index % barColors.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 7日曲目挑战排行(多人) */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>7日曲目挑战排行(多人)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={weeklyMultiData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <YAxis type="category" dataKey="song" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} width={80} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="count" name="挑战次数" radius={[0, 4, 4, 0]}>
              {weeklyMultiData.map((entry, index) => <Cell key={`cell4-${index}`} fill={barColors[index % barColors.length]} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Song;
