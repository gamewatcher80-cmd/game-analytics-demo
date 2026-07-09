import React, { useState } from 'react';

const DailyData = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 模拟日报数据
  const dailyData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    const active = Math.floor(40000 + Math.random() * 20000);
    const newUsers = Math.floor(2000 + Math.random() * 3000);
    const paying = Math.floor(800 + Math.random() * 500);
    return {
      date: date.toISOString().split('T')[0],
      active: active,
      activeDevice: Math.floor(active * 0.95),
      new: newUsers,
      revenue: Math.floor(50000 + Math.random() * 100000),
      paying: paying,
      payRate: (1.5 + Math.random() * 1).toFixed(2),
      arpu: (30 + Math.random() * 40).toFixed(2),
      arppu: (80 + Math.random() * 100).toFixed(2),
      payActive: Math.floor(paying * 0.7),
      newPayUser: Math.floor(newUsers * 0.03),
      firstPayUser: Math.floor(newUsers * 0.01)
    };
  });

  const formatNumber = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toFixed(0);
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
              <option value="valid_no_bot">有效+去黑产</option>
              <option value="valid_no_water">有效+去水</option>
              <option value="no_bot_no_water">去黑产+去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 日报明细 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>日报明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>日期</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>活跃账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>活跃设备数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>新增账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>每日总收入</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>付费账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>付费率</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>ARPU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>ARPPU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>付费活跃账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>新增付费用户数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>首次付费用户数</th>
              </tr>
            </thead>
            <tbody>
              {dailyData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.date}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.active.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.activeDevice.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.new.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.revenue.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.paying.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.payRate}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.arpu}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.arppu}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.payActive.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.newPayUser.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.firstPayUser.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailyData;
