import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, Legend } from 'recharts';
import { cardData } from '../../data/mockData';

const CardAnalysis = () => {
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 卡牌使用率排行 */}
      <div style={{
        background: 'var(--bg-card)',
        borderRadius: '12px',
        padding: '20px',
        border: '1px solid var(--border-color)'
      }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>卡牌使用率排行 Top 10</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={cardData.usageRank} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis type="number" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis type="category" dataKey="name" stroke="var(--text-muted)" fontSize={12} width={100} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} />
            <Bar dataKey="usage" fill="var(--primary)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 强度分布与培养成本 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
        {/* 强度分布 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>卡牌强度分布（按稀有度）</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={cardData.strengthDist}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="rarity" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
              <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar dataKey="avg" fill="var(--success)" name="平均强度" />
              <Bar dataKey="max" fill="var(--primary)" name="最高强度" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 培养成本 */}
        <div style={{
          background: 'var(--bg-card)',
          borderRadius: '12px',
          padding: '20px',
          border: '1px solid var(--border-color)'
        }}>
          <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>角色培养成本</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={cardData.cultivationCost}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
              <YAxis stroke="var(--text-muted)" fontSize={12} yAxisId="left" tick={{fill: 'var(--text-muted)'}} />
              <YAxis stroke="var(--text-muted)" fontSize={12} yAxisId="right" orientation="right" tick={{fill: 'var(--text-muted)'}} />
              <Tooltip contentStyle={customTooltipStyle} />
              <Bar dataKey="avgCost" fill="var(--warning)" yAxisId="left" name="平均消耗" />
              <Bar dataKey="days" fill="var(--danger)" yAxisId="right" name="培养天数" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CardAnalysis;
