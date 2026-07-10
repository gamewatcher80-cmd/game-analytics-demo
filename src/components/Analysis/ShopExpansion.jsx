import React, { useState } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  BarChart, Bar
} from 'recharts';

const ShopExpansion = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 1. 每日扩张尝试人数（30天趋势）
  const generateExpansionTryData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        tryCount: Math.floor(2000 + Math.random() * 3000),
      };
    });
  };

  // 2. 扩张成功率（30天趋势）
  const generateSuccessRateData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        successRate: (30 + Math.random() * 40).toFixed(2),
      };
    });
  };

  // 3. 扩张失败原因分布（按日期堆积柱状图）
  const generateFailureReasonData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const total = Math.floor(800 + Math.random() * 1200);
      return {
        date: date.toISOString().split('T')[0],
        popularity: Math.floor(total * 0.25),
        silver: Math.floor(total * 0.30),
        medal: Math.floor(total * 0.22),
        level: Math.floor(total * 0.23),
      };
    });
  };

  // 4. 各扩张档位成功率（柱状图）
  const expansionTierSuccessData = [
    { tier: '小摊', successRate: 72.5 },
    { tier: '小店', successRate: 65.3 },
    { tier: '中型店', successRate: 55.8 },
    { tier: '大型店', successRate: 42.1 },
    { tier: '旗舰店', successRate: 28.6 },
  ];

  const expansionTryData = generateExpansionTryData();
  const successRateData = generateSuccessRateData();
  const failureReasonData = generateFailureReasonData();

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

      {/* 1. 每日扩张尝试人数 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日扩张尝试人数</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expansionTryData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="tryCount" stroke="#3b82f6" strokeWidth={2} name="尝试人数" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 扩张成功率 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>扩张成功率</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={successRateData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} unit="%" />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="successRate" stroke="#22c55e" strokeWidth={2} name="成功率(%)" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 扩张失败原因分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>扩张失败原因分布</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={failureReasonData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Bar dataKey="popularity" stackId="a" fill="#3b82f6" name="人气不足" />
            <Bar dataKey="silver" stackId="a" fill="#22c55e" name="银币不足" />
            <Bar dataKey="medal" stackId="a" fill="#f59e0b" name="勋章不足" />
            <Bar dataKey="level" stackId="a" fill="#ef4444" name="等级不足" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 各扩张档位成功率 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>各扩张档位成功率</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={expansionTierSuccessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="tier" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} unit="%" />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Bar dataKey="successRate" fill="#f59e0b" name="成功率(%)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShopExpansion;
