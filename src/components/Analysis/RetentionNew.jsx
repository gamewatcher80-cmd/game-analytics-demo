import React, { useState } from 'react';

const RetentionNew = ({ currentRegion }) => {
  const [retentionType, setRetentionType] = useState('account');
  const [server, setServer] = useState('all');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });

  // 模拟留存数据
  const retentionData = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    const d = date.toISOString().split('T')[0];
    return {
      date: d,
      day1: (35 + Math.random() * 15).toFixed(1),
      day2: (25 + Math.random() * 10).toFixed(1),
      day3: (20 + Math.random() * 8).toFixed(1),
      day4: (16 + Math.random() * 6).toFixed(1),
      day5: (14 + Math.random() * 5).toFixed(1),
      day6: (12 + Math.random() * 4).toFixed(1),
      day7: (10 + Math.random() * 4).toFixed(1),
      day14: (6 + Math.random() * 3).toFixed(1),
      day30: (3 + Math.random() * 2).toFixed(1),
      day45: (2.5 + Math.random() * 1.5).toFixed(1),
      day60: (2 + Math.random() * 1).toFixed(1),
      day90: (1.5 + Math.random() * 0.8).toFixed(1),
      day120: (1.2 + Math.random() * 0.6).toFixed(1),
      day150: (1 + Math.random() * 0.5).toFixed(1),
      day180: (0.8 + Math.random() * 0.4).toFixed(1),
      day210: (0.6 + Math.random() * 0.3).toFixed(1),
      day240: (0.5 + Math.random() * 0.3).toFixed(1),
      day270: (0.4 + Math.random() * 0.2).toFixed(1),
      day300: (0.3 + Math.random() * 0.2).toFixed(1),
      day330: (0.25 + Math.random() * 0.15).toFixed(1),
      day360: (0.2 + Math.random() * 0.1).toFixed(1),
      newUsers: Math.floor(2000 + Math.random() * 3000)
    };
  });

  const avgData = {
    day1: (retentionData.reduce((sum, d) => sum + parseFloat(d.day1), 0) / 14).toFixed(1),
    day2: (retentionData.reduce((sum, d) => sum + parseFloat(d.day2), 0) / 14).toFixed(1),
    day3: (retentionData.reduce((sum, d) => sum + parseFloat(d.day3), 0) / 14).toFixed(1),
    day7: (retentionData.reduce((sum, d) => sum + parseFloat(d.day7), 0) / 14).toFixed(1),
    day14: (retentionData.reduce((sum, d) => sum + parseFloat(d.day14), 0) / 14).toFixed(1),
    day30: (retentionData.reduce((sum, d) => sum + parseFloat(d.day30), 0) / 14).toFixed(1),
    day45: (retentionData.reduce((sum, d) => sum + parseFloat(d.day45), 0) / 14).toFixed(1),
    day60: (retentionData.reduce((sum, d) => sum + parseFloat(d.day60), 0) / 14).toFixed(1),
    day90: (retentionData.reduce((sum, d) => sum + parseFloat(d.day90), 0) / 14).toFixed(1),
    day120: (retentionData.reduce((sum, d) => sum + parseFloat(d.day120), 0) / 14).toFixed(1),
    day150: (retentionData.reduce((sum, d) => sum + parseFloat(d.day150), 0) / 14).toFixed(1),
    day180: (retentionData.reduce((sum, d) => sum + parseFloat(d.day180), 0) / 14).toFixed(1),
    day210: (retentionData.reduce((sum, d) => sum + parseFloat(d.day210), 0) / 14).toFixed(1),
    day240: (retentionData.reduce((sum, d) => sum + parseFloat(d.day240), 0) / 14).toFixed(1),
    day270: (retentionData.reduce((sum, d) => sum + parseFloat(d.day270), 0) / 14).toFixed(1),
    day300: (retentionData.reduce((sum, d) => sum + parseFloat(d.day300), 0) / 14).toFixed(1),
    day330: (retentionData.reduce((sum, d) => sum + parseFloat(d.day330), 0) / 14).toFixed(1),
    day360: (retentionData.reduce((sum, d) => sum + parseFloat(d.day360), 0) / 14).toFixed(1)
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>留存账号类型</label>
            <select value={retentionType} onChange={(e) => setRetentionType(e.target.value)}>
              <option value="account">新增账号</option>
              <option value="payer">新增付费账号</option>
              <option value="first_pay">首次付费账号</option>
            </select>
          </div>
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
            <select value={server} onChange={(e) => setServer(e.target.value)}>
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all">
              <option value="all">全部终端</option>
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

      {/* 留存明细表 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>留存率明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '11px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>日期</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>新增用户</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>次留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>2留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>3留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>4留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>5留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>6留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>7留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>14留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>30留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>45留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>60留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>90留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>120留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>150留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>180留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>210留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>240留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>270留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>300留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>330留</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>360留</th>
              </tr>
            </thead>
            <tbody>
              {retentionData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.date}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.newUsers.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day1}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day2}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day3}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day4}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day5}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day6}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day7}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day14}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day30}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day45}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day60}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day90}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day120}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day150}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day180}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day210}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day240}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day270}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day300}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day330}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.day360}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RetentionNew;
