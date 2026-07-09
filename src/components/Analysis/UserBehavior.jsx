import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { userBehaviorData } from '../../data/mockData';

const UserBehavior = () => {
  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {/* 留存曲线 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>用户留存曲线</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={userBehaviorData.retentionCurve}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="day" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(v) => `${v}%`} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} formatter={(value) => [`${value}%`, '留存率']} />
            <Line type="monotone" dataKey="rate" stroke="var(--primary)" strokeWidth={3} dot={{ fill: 'var(--primary)', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 活跃时段分布 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>用户活跃时段分布（24小时）</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={userBehaviorData.activeHours}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="hour" stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} />
            <Bar dataKey="weekday" fill="var(--primary)" name="工作日" />
            <Bar dataKey="weekend" fill="var(--success)" name="周末" />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 用户操作路径 */}
      <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: '20px', border: '1px solid var(--border-color)' }}>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>用户操作路径</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '16px 0' }}>
          {['启动', '抽卡', '养成', '战斗', '社交'].map((step, i) => (
            <React.Fragment key={step}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--primary)', fontWeight: '600', fontSize: '16px'
                }}>
                  {i + 1}
                </div>
                <span style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '8px' }}>{step}</span>
              </div>
              {i < 4 && (
                <div style={{ width: '80px', height: '2px', background: 'var(--border-color)', position: 'relative' }}>
                  <div style={{ height: '100%', background: 'var(--primary)', width: `${70 + Math.random() * 30}%` }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginTop: '16px' }}>
          {userBehaviorData.userPath.map((path, i) => (
            <div key={i} style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '12px' }}>{path.from} → {path.to}</p>
              <p style={{ color: 'var(--primary)', fontSize: '18px', fontWeight: '700', marginTop: '4px' }}>{path.value.toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBehavior;
