import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import KPICard from '../Dashboard/KPICard';
import { eventData } from '../../data/mockData';

const EventEffect = () => {
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 指标卡片 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        <KPICard title="活动参与率" value={82} unit="%" change={5.2} />
        <KPICard title="活动转化率" value={8.5} unit="%" change={1.3} />
        <KPICard title="人均消费" value={68} change={-2.1} />
      </div>

      {/* 活动期间收入趋势 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>活动期间收入趋势</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={eventData.eventTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => `$${v/1000}k`} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} formatter={(value) => [`$${(value/1000).toFixed(1)}k`, '收入']} />
            <Area type="monotone" dataKey="revenue" stroke="var(--primary)" fill="url(#colorEvent)" />
            <defs>
              <linearGradient id="colorEvent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 活动对比 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>各活动效果对比</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={eventData.eventCompare}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} />
            <Bar dataKey="revenue" fill="var(--primary)" name="收入" />
            <Bar dataKey="participation" fill="var(--success)" name="参与率%" />
            <Bar dataKey="conversion" fill="var(--warning)" name="转化率%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EventEffect;
