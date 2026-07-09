import React from 'react';
import { FunnelChart, Funnel, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { funnelData } from '../../data/mockData';

const COLORS = ['#00d4ff', '#00b8e6', '#0099cc', '#007aa3', '#005c80'];

const PurchaseFunnel = () => {
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 筛选控件 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all">
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
        </div>
      </div>

      {/* 漏斗图 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>付费转化漏斗</h3>
        <ResponsiveContainer width="100%" height={400}>
          <FunnelChart>
            <Tooltip contentStyle={customTooltipStyle} formatter={(value, name) => [value.toLocaleString(), name === 'value' ? '人数' : name]} />
            <Funnel data={funnelData} dataKey="value" nameKey="stage" isAnimationActive>
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <LabelList position="right" fill="var(--text-primary)" stroke="none" dataKey="stage" />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>

      {/* 转化率表格 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>转化率明细</h3>
        <table style={{ width: '100%', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>阶段</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>用户数</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>总体转化率</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>阶段转化率</th>
            </tr>
          </thead>
          <tbody>
            {funnelData.map((stage, index) => (
              <tr key={index} style={{ borderBottom: '1px solid var(--border-color)' }}>
                <td style={{ padding: '12px', color: 'var(--text-primary)' }}>{stage.stage}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{stage.value.toLocaleString()}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{stage.rate}%</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--primary)', fontWeight: '600' }}>
                  {index > 0 ? ((stage.value / funnelData[index - 1].value) * 100).toFixed(1) : '100'}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 关键指标 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {[
          { label: '下载转化率', value: '45%', color: 'var(--primary)' },
          { label: '注册转化率', value: '71%', color: 'var(--primary)' },
          { label: '付费转化率', value: '15%', color: 'var(--danger)' }
        ].map((item, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginBottom: '8px' }}>{item.label}</p>
            <p style={{ color: item.color, fontSize: '28px', fontWeight: '700' }}>{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseFunnel;
