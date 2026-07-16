import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Story = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 羁绊故事-每日播放情况（昨日）
  const bondDailyData = [
    { story: '羁绊故事1', amount: 8500 },
    { story: '羁绊故事2', amount: 7200 },
    { story: '羁绊故事3', amount: 5800 },
    { story: '羁绊故事4', amount: 4500 },
    { story: '羁绊故事5', amount: 3200 },
    { story: '羁绊故事6', amount: 2100 },
  ];

  // 乐队故事-每日播放情况（昨日）
  const bandDailyData = [
    { story: '乐队故事1', amount: 9200 },
    { story: '乐队故事2', amount: 7800 },
    { story: '乐队故事3', amount: 6500 },
    { story: '乐队故事4', amount: 5100 },
    { story: '乐队故事5', amount: 3800 },
    { story: '乐队故事6', amount: 2400 },
  ];

  // 羁绊故事-累计播放情况
  const bondCumulativeData = [
    { story: '羁绊故事1', amount: 158000 },
    { story: '羁绊故事2', amount: 132000 },
    { story: '羁绊故事3', amount: 108000 },
    { story: '羁绊故事4', amount: 85000 },
    { story: '羁绊故事5', amount: 62000 },
    { story: '羁绊故事6', amount: 41000 },
  ];

  // 乐队故事-累计播放情况
  const bandCumulativeData = [
    { story: '乐队故事1', amount: 175000 },
    { story: '乐队故事2', amount: 148000 },
    { story: '乐队故事3', amount: 122000 },
    { story: '乐队故事4', amount: 96000 },
    { story: '乐队故事5', amount: 71000 },
    { story: '乐队故事6', amount: 45000 },
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

      {/* 1. 羁绊故事-每日播放情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          羁绊故事-每日播放情况（希望展示选择的活跃用户，新增观看完羁绊故事的用户量）
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bondDailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="story" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#3b82f6" name="新增用户量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 乐队故事-每日播放情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          乐队故事-每日播放情况（希望展示选择的活跃用户，新增观看完羁绊故事的用户量）
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bandDailyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="story" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#22c55e" name="新增用户量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 羁绊故事-累计播放情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          羁绊故事-累计播放情况（希望展示选择的活跃用户，累计观看完羁绊故事的用户量）
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bondCumulativeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="story" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#f59e0b" name="累计用户量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 乐队故事-累计播放情况 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          乐队故事-累计播放情况（希望展示选择的活跃用户，累计观看完乐队故事的用户量）
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={bandCumulativeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="story" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#8b5cf6" name="累计用户量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Story;
