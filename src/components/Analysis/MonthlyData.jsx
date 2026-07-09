import React, { useState } from 'react';

const MonthlyData = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 模拟月报数据
  const monthlyData = Array.from({ length: 6 }, (_, i) => {
    const date = new Date();
    date.setMonth(date.getMonth() - (5 - i));
    const month = date.getMonth() + 1;
    const yearMonth = date.toISOString().slice(0, 7);
    
    const active = Math.floor(1200000 + Math.random() * 400000);
    const newUsers = Math.floor(60000 + Math.random() * 80000);
    const revenue = Math.floor(1500000 + Math.random() * 2000000);
    const paying = Math.floor(20000 + Math.random() * 10000);
    const payRate = (1.5 + Math.random() * 1).toFixed(2);
    const arpu = (80 + Math.random() * 60).toFixed(2);
    const arppu = (revenue / paying).toFixed(2);
    
    return {
      month: `${month}月`,
      dateMonth: `${date.getFullYear()}/${month.toString().padStart(2, '0')}`,
      yearMonth: yearMonth,
      active: active,
      activeDevice: Math.floor(active * 0.97),
      new: newUsers,
      revenue: revenue,
      paying: paying,
      payRate: payRate,
      arpu: arpu,
      arppu: arppu,
      payActive: Math.floor(paying * 0.8),
      newPayUser: Math.floor(newUsers * 0.04),
      firstPayUser: Math.floor(newUsers * 0.02)
    };
  });

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
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

      {/* 月报明细 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>月报明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>日期（月）</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月活跃账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月活跃设备数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月新增账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月总收入</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月付费账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月付费率</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月ARPU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月ARPPU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月付费活跃账号数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月新增付费用户数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>月首次付费用户数</th>
              </tr>
            </thead>
            <tbody>
              {monthlyData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.dateMonth}</td>
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

export default MonthlyData;
