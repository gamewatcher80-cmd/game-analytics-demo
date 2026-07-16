import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CurrencyResource = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 金币获得途径（昨日）
  const goldProduceData = [
    { way: '途径1', amount: 850000 },
    { way: '途径2', amount: 520000 },
    { way: '途径3', amount: 360000 },
    { way: '途径4', amount: 180000 },
  ];

  // 金币消耗途径（昨日）
  const goldConsumeData = [
    { way: '途径1', amount: 720000 },
    { way: '途径2', amount: 480000 },
    { way: '途径3', amount: 350000 },
    { way: '途径4', amount: 150000 },
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

      {/* 1. 金币获得途径 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>金币获得途径</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={goldProduceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="way" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#3b82f6" name="获得数量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 金币消耗途径 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>金币消耗途径</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={goldConsumeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="way" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Bar dataKey="amount" fill="#ef4444" name="消耗数量" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CurrencyResource;
