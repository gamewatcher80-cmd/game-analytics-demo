import React, { useState } from 'react';

const cnUserColumns = [
  { key: 'date', label: '日期' },
  { key: 'activeAccounts', label: '活跃账号数' },
  { key: 'activeDevices', label: '活跃设备数' },
  { key: 'newAccounts', label: '新增账号数' },
  { key: 'dailyRevenue', label: '每日总收入' },
  { key: 'paidAccounts', label: '付费账号数' },
  { key: 'payRate', label: '付费率' },
  { key: 'arpu', label: 'ARPU' },
  { key: 'arppu', label: 'ARPPU' },
  { key: 'paidActiveAccounts', label: '付费活跃账号数' },
  { key: 'newPaidUsers', label: '新增付费用户数' },
  { key: 'firstPaidUsers', label: '首次付费用户数' },
];

const SimplifiedCNUser = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 大陆IP登录用户数据
  const mainlandIPData = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    mainlandIPData.push({
      date: dateStr,
      activeAccounts: Math.floor(85000 + Math.random() * 15000),
      activeDevices: Math.floor(82000 + Math.random() * 14000),
      newAccounts: Math.floor(2500 + Math.random() * 1200),
      dailyRevenue: Math.floor(180000 + Math.random() * 50000),
      paidAccounts: Math.floor(9500 + Math.random() * 2000),
      payRate: parseFloat((10 + Math.random() * 4).toFixed(2)),
      arpu: parseFloat((2.1 + Math.random() * 1.0).toFixed(2)),
      arppu: parseFloat((18 + Math.random() * 6).toFixed(2)),
      paidActiveAccounts: Math.floor(8800 + Math.random() * 1800),
      newPaidUsers: Math.floor(350 + Math.random() * 200),
      firstPaidUsers: Math.floor(180 + Math.random() * 100),
    });
  }

  // 游戏设置简体中文用户数据
  const simplifiedCNData = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    simplifiedCNData.push({
      date: dateStr,
      activeAccounts: Math.floor(78000 + Math.random() * 13000),
      activeDevices: Math.floor(75500 + Math.random() * 12000),
      newAccounts: Math.floor(2200 + Math.random() * 1000),
      dailyRevenue: Math.floor(155000 + Math.random() * 45000),
      paidAccounts: Math.floor(8600 + Math.random() * 1800),
      payRate: parseFloat((10.5 + Math.random() * 3.5).toFixed(2)),
      arpu: parseFloat((2.0 + Math.random() * 0.9).toFixed(2)),
      arppu: parseFloat((17.5 + Math.random() * 5.5).toFixed(2)),
      paidActiveAccounts: Math.floor(8000 + Math.random() * 1600),
      newPaidUsers: Math.floor(300 + Math.random() * 180),
      firstPaidUsers: Math.floor(155 + Math.random() * 90),
    });
  }

  // 游戏设置繁体中文用户数据
  const traditionalCNData = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    traditionalCNData.push({
      date: dateStr,
      activeAccounts: Math.floor(12000 + Math.random() * 4000),
      activeDevices: Math.floor(11500 + Math.random() * 3800),
      newAccounts: Math.floor(400 + Math.random() * 250),
      dailyRevenue: Math.floor(22000 + Math.random() * 8000),
      paidAccounts: Math.floor(1400 + Math.random() * 500),
      payRate: parseFloat((11 + Math.random() * 4).toFixed(2)),
      arpu: parseFloat((1.8 + Math.random() * 0.8).toFixed(2)),
      arppu: parseFloat((15.5 + Math.random() * 5).toFixed(2)),
      paidActiveAccounts: Math.floor(1300 + Math.random() * 450),
      newPaidUsers: Math.floor(55 + Math.random() * 35),
      firstPaidUsers: Math.floor(28 + Math.random() * 18),
    });
  }

  // 通用表格渲染
  const renderTable = (data) => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
        <thead>
          <tr style={{ background: 'var(--bg-secondary)' }}>
            {cnUserColumns.map(col => (
              <th key={col.key} style={{ padding: '10px 10px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap', fontSize: '12px' }}>{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} style={{ background: idx % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
              {cnUserColumns.map(col => (
                <td key={col.key} style={{
                  padding: '10px 10px',
                  textAlign: col.key === 'date' ? 'center' : 'right',
                  borderBottom: '1px solid var(--border)',
                  color: (col.key === 'dailyRevenue') ? '#4f46e5' :
                         (col.key === 'payRate' || col.key === 'arpu' || col.key === 'arppu') ? '#22c55e' : 'inherit',
                  fontWeight: (col.key === 'dailyRevenue' || col.key === 'payRate' || col.key === 'arpu' || col.key === 'arppu') ? '500' : 'normal',
                }}>
                  {col.key === 'dailyRevenue' ? '$' + row[col.key].toLocaleString() :
                   ['payRate','arpu','arppu'].includes(col.key) ? row[col.key] :
                   row[col.key].toLocaleString()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选条件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始时间</label>
            <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})} style={{ width: '150px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束时间</label>
            <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})} style={{ width: '150px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all" style={{ width: '150px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all" style={{ width: '150px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部终端</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
              <option value="android_official">安卓官方包</option>
              <option value="pc_official">PC官方包</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>账号类型</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部</option>
              <option value="valid">有效</option>
              <option value="no_bot">去黑产</option>
              <option value="no_water">去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 大陆IP登录用户数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>大陆IP用户-日报明细</h3>
        {renderTable(mainlandIPData)}
      </div>

      {/* 游戏设置简体中文用户数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>设置简中用户-日报明细</h3>
        {renderTable(simplifiedCNData)}
      </div>

      {/* 游戏设置繁体中文用户数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>设置繁中用户-日报明细</h3>
        {renderTable(traditionalCNData)}
      </div>
    </div>
  );
};

export default SimplifiedCNUser;
