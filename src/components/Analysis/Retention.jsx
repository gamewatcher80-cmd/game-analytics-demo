import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { userBehaviorData, regionComparisonData } from '../../data/mockData';

const Retention = () => {
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  const tableData = [
    { period: '次日', en: 48, kr: 42, tw: 45 },
    { period: '3日', en: 40, kr: 35, tw: 38 },
    { period: '7日', en: 32, kr: 25, tw: 27 },
    { period: '14日', en: 25, kr: 20, tw: 22 },
    { period: '30日', en: 18, kr: 14, tw: 16 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 留存曲线 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>留存率曲线</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={userBehaviorData.retentionCurve}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => `${v}%`} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} formatter={(value) => [`${value}%`, '留存率']} />
            <Line type="monotone" dataKey="rate" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 地区留存对比 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>各地区留存对比</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={regionComparisonData.retention}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="region" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => `${v}%`} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} />
            <Bar dataKey="day1" fill="var(--primary)" name="次日留存" />
            <Bar dataKey="day7" fill="var(--success)" name="7日留存" />
            <Bar dataKey="day30" fill="var(--warning)" name="30日留存" />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 留存数据表格 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>留存数据明细</h3>
        <table style={{ width: '100%', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>时间段</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>English</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>한국어</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>繁體中文</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>平均</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.period} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', color: 'var(--text-primary)' }}>{row.period}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{row.en}%</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{row.kr}%</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{row.tw}%</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--primary)', fontWeight: '600' }}>{(row.en + row.kr + row.tw) / 3}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Retention;
