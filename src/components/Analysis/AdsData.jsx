import React, { useState } from 'react';

const AdsData = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 模拟投放数据
  const kpiData = {
    totalSpend: 850000,
    totalNew: 125000,
    roi: 2.8,
    cpi: 6.80
  };

  // 渠道数据
  const channelData = [
    { channel: 'Facebook', spend: 350000, new: 52000, roi: 3.2, cpi: 6.73, install: 48000, register: 35000, pay: 2800 },
    { channel: 'Google', spend: 280000, new: 42000, roi: 2.9, cpi: 6.67, install: 38000, register: 28000, pay: 2100 },
    { channel: 'TikTok', spend: 150000, new: 22000, roi: 2.5, cpi: 6.82, install: 20000, register: 14000, pay: 950 },
    { channel: 'Twitter', spend: 70000, new: 9000, roi: 2.1, cpi: 7.78, install: 8000, register: 5500, pay: 380 },
  ];

  // 趋势数据
  const trendData = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date: date.toISOString().split('T')[0],
      spend: Math.floor(50000 + Math.random() * 30000),
      new: Math.floor(8000 + Math.random() * 5000),
      roi: (2.0 + Math.random() * 1.5).toFixed(2)
    };
  });

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
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>渠道</label>
            <select defaultValue="all">
              <option value="all">全部渠道</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="tiktok">TikTok</option>
              <option value="twitter">Twitter</option>
            </select>
          </div>
        </div>
      </div>

      {/* KPI 卡片 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div className="card" style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>总消耗</div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--warning)' }}>¥{(kpiData.totalSpend / 10000).toFixed(1)}万</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>新增用户</div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--primary)' }}>{(kpiData.totalNew / 10000).toFixed(1)}万</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>平均ROI</div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--success)' }}>{kpiData.roi}x</div>
        </div>
        <div className="card" style={{ textAlign: 'center', padding: '20px' }}>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>CPI</div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: 'var(--danger)' }}>¥{kpiData.cpi}</div>
        </div>
      </div>

      {/* 渠道支出趋势 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>渠道支出趋势</h3>
        <div style={{ height: '180px', display: 'flex', alignItems: 'flex-end', gap: '8px', padding: '20px 0' }}>
          {trendData.map((item, index) => (
            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ 
                width: '100%', 
                background: 'linear-gradient(180deg, var(--warning) 0%, rgba(245, 158, 11, 0.3) 100%)',
                borderRadius: '2px 2px 0 0',
                height: `${(item.spend / 80000) * 120}px`,
                minHeight: '10px'
              }} />
              <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{item.date.slice(5)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 渠道数据表 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>渠道数据对比</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>渠道</th>
                <th>消耗</th>
                <th>新增用户</th>
                <th>ROI</th>
                <th>CPI</th>
                <th>安装</th>
                <th>注册</th>
                <th>付费</th>
              </tr>
            </thead>
            <tbody>
              {channelData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontWeight: '500' }}>{item.channel}</td>
                  <td>¥{item.spend.toLocaleString()}</td>
                  <td>{item.new.toLocaleString()}</td>
                  <td style={{ color: item.roi >= 2.5 ? 'var(--success)' : 'var(--warning)', fontWeight: '600' }}>{item.roi}x</td>
                  <td>¥{item.cpi}</td>
                  <td>{item.install.toLocaleString()}</td>
                  <td>{item.register.toLocaleString()}</td>
                  <td>{item.pay.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 渠道ROI对比 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>渠道ROI对比</h3>
        <div style={{ height: '150px', display: 'flex', alignItems: 'flex-end', gap: '20px', padding: '20px 0' }}>
          {channelData.map((item, index) => (
            <div key={index} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ 
                width: '100%', 
                background: item.roi >= 2.5 ? 'var(--success)' : 'var(--warning)',
                borderRadius: '4px 4px 0 0',
                height: `${item.roi * 40}px`,
                minHeight: '20px'
              }} />
              <span style={{ fontSize: '12px', fontWeight: '500' }}>{item.channel}</span>
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.roi}x</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsData;