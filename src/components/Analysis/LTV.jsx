import React, { useState } from 'react';

const LTV = ({ currentRegion }) => {
  const [ltvType, setLtvType] = useState('account');
  const [server, setServer] = useState('all');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  });

  // 模拟LTV数据
  const ltvData = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (13 - i));
    return {
      date: date.toISOString().split('T')[0],
      ltv1: (2 + Math.random() * 3).toFixed(2),
      ltv7: (8 + Math.random() * 8).toFixed(2),
      ltv14: (15 + Math.random() * 10).toFixed(2),
      ltv30: (25 + Math.random() * 15).toFixed(2),
      ltv60: (35 + Math.random() * 20).toFixed(2),
      ltv90: (45 + Math.random() * 25).toFixed(2),
      ltv120: (55 + Math.random() * 30).toFixed(2),
      ltv150: (65 + Math.random() * 35).toFixed(2),
      ltv180: (75 + Math.random() * 40).toFixed(2),
      ltv210: (82 + Math.random() * 45).toFixed(2),
      ltv240: (88 + Math.random() * 50).toFixed(2),
      ltv270: (92 + Math.random() * 55).toFixed(2),
      ltv300: (96 + Math.random() * 60).toFixed(2),
      ltv330: (99 + Math.random() * 65).toFixed(2),
      ltv360: (102 + Math.random() * 70).toFixed(2),
      newUsers: Math.floor(2000 + Math.random() * 3000)
    };
  });

  const avgData = {
    ltv1: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv1), 0) / 14).toFixed(2),
    ltv7: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv7), 0) / 14).toFixed(2),
    ltv14: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv14), 0) / 14).toFixed(2),
    ltv30: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv30), 0) / 14).toFixed(2),
    ltv60: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv60), 0) / 14).toFixed(2),
    ltv90: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv90), 0) / 14).toFixed(2),
    ltv120: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv120), 0) / 14).toFixed(2),
    ltv150: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv150), 0) / 14).toFixed(2),
    ltv180: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv180), 0) / 14).toFixed(2),
    ltv210: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv210), 0) / 14).toFixed(2),
    ltv240: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv240), 0) / 14).toFixed(2),
    ltv270: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv270), 0) / 14).toFixed(2),
    ltv300: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv300), 0) / 14).toFixed(2),
    ltv330: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv330), 0) / 14).toFixed(2),
    ltv360: (ltvData.reduce((sum, d) => sum + parseFloat(d.ltv360), 0) / 14).toFixed(2)
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>LTV账号类型</label>
            <select value={ltvType} onChange={(e) => setLtvType(e.target.value)}>
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

      {/* LTV 明细表 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>LTV明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '11px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>日期</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>新增用户</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV1</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV7</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV14</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV30</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV60</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV90</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV120</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV150</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV180</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV210</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV240</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV270</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV300</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV330</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>LTV360</th>
              </tr>
            </thead>
            <tbody>
              {ltvData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.date}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.newUsers.toLocaleString()}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv1}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv7}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv14}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv30}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv60}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv90}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv120}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv150}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv180}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv210}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv240}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv270}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv300}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv330}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>¥{item.ltv360}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LTV;
