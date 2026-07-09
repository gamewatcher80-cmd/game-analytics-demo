import React, { useState } from 'react';

const ReturningUser = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 模拟回流用户数据
  const returningData = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date: date.toISOString().split('T')[0],
      returning: Math.floor(500 + Math.random() * 500),
      returning3: Math.floor(300 + Math.random() * 300),
      returning7: Math.floor(200 + Math.random() * 200),
      returning30: Math.floor(100 + Math.random() * 100),
      returning90: Math.floor(50 + Math.random() * 50),
      payingReturning: Math.floor(50 + Math.random() * 50),
      payingReturning3: Math.floor(30 + Math.random() * 30),
      payingReturning7: Math.floor(20 + Math.random() * 20),
      payingReturning30: Math.floor(10 + Math.random() * 10),
      payingReturning90: Math.floor(5 + Math.random() * 5),
      day1: (40 + Math.random() * 20).toFixed(1),
      day3: (20 + Math.random() * 15).toFixed(1),
      day7: (10 + Math.random() * 10).toFixed(1),
      day14: (8 + Math.random() * 5).toFixed(1),
      day30: (5 + Math.random() * 3).toFixed(1),
      day60: (3 + Math.random() * 2).toFixed(1),
      day90: (2 + Math.random() * 1).toFixed(1),
      day180: (1 + Math.random() * 0.5).toFixed(1),
      day360: (0.5 + Math.random() * 0.3).toFixed(1),
      ltv1: (2 + Math.random() * 3).toFixed(2),
      ltv3: (5 + Math.random() * 5).toFixed(2),
      ltv7: (15 + Math.random() * 15).toFixed(2),
      ltv14: (25 + Math.random() * 20).toFixed(2),
      ltv30: (40 + Math.random() * 30).toFixed(2),
      ltv60: (60 + Math.random() * 40).toFixed(2),
      ltv90: (80 + Math.random() * 50).toFixed(2),
      ltv180: (120 + Math.random() * 80).toFixed(2),
      ltv360: (180 + Math.random() * 120).toFixed(2)
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

      {/* 回流用户基础数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日回流用户基础数据</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '11px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>日期</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>3日回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>7日回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>30日回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>90日回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>付费回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>3日付费回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>7日付费回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>30日付费回流用户数</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>90日付费回流用户数</th>
              </tr>
            </thead>
            <tbody>
              {returningData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.date}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.returning.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.returning3.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.returning7.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.returning30.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.returning90.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.payingReturning.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.payingReturning3.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.payingReturning7.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.payingReturning30.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.payingReturning90.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 每日回流用户留存 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日回流用户留存</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '10px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>日期</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>回流用户数</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>次留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>3留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>7留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>14留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>30留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>60留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>90留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>180留</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>360留</th>
              </tr>
            </thead>
            <tbody>
              {returningData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.date}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.returning.toLocaleString()}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day1}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day3}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day7}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day14}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day30}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day60}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day90}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day180}%</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.day360}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 每日回流用户LTV */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日回流用户LTV</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '10px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>日期</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>回流用户数</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV1</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV3</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV7</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV14</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV30</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV60</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV90</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV180</th>
                <th style={{ fontSize: '10px', lineHeight: '1.4', padding: '6px 4px' }}>LTV360</th>
              </tr>
            </thead>
            <tbody>
              {returningData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.date}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>{item.returning.toLocaleString()}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv1}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv3}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv7}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv14}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv30}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv60}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv90}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv180}</td>
                  <td style={{ fontSize: '10px', lineHeight: '1.4', padding: '4px' }}>¥{item.ltv360}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ReturningUser;
