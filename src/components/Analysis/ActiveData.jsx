import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';

const ActiveData = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 生成30天活跃数据
  const generateActiveData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.15;
      return {
        date: date.toISOString().split('T')[0],
        dau: Math.floor((115000 + Math.random() * 20000) * dayFactor),
        newUsers: Math.floor((22000 + Math.random() * 8000) * dayFactor),
        continuousActive: Math.floor((78000 + Math.random() * 15000) * dayFactor),
        returningUsers: Math.floor((10000 + Math.random() * 5000) * dayFactor)
      };
    });
  };

  // 生成按平台的活跃数据
  const generatePlatformData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.15;
      const total = Math.floor((115000 + Math.random() * 20000) * dayFactor);
      return {
        date: date.toISOString().split('T')[0],
        android: Math.floor(total * 0.35),
        androidOfficial: Math.floor(total * 0.25),
        ios: Math.floor(total * 0.28),
        pc: Math.floor(total * 0.12)
      };
    });
  };

  // 生成在线时间数据
  const generateOnlineTimeData = () => {
    return Array.from({ length: 14 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (13 - i));
      const avgTime = (25 + Math.random() * 20).toFixed(1);
      return {
        date: date.toISOString().split('T')[0],
        avgTime,
        range0to5: (12 + Math.random() * 5).toFixed(1),
        range5to15: (25 + Math.random() * 8).toFixed(1),
        range15to30: (28 + Math.random() * 10).toFixed(1),
        range30to45: (18 + Math.random() * 6).toFixed(1),
        range45to60: (10 + Math.random() * 4).toFixed(1),
        range60plus: (7 + Math.random() * 3).toFixed(1)
      };
    });
  };

  const activeData = generateActiveData();
  const platformData = generatePlatformData();
  const onlineTimeData = generateOnlineTimeData();

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
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

      {/* 活跃用户趋势 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>活跃用户趋势</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={activeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="dau" stroke="#ef4444" strokeWidth={2} name="DAU" dot={false} />
            <Line type="monotone" dataKey="newUsers" stroke="var(--primary)" strokeWidth={2} name="新增用户" dot={false} />
            <Line type="monotone" dataKey="continuousActive" stroke="var(--success)" strokeWidth={2} name="持续活跃用户" dot={false} />
            <Line type="monotone" dataKey="returningUsers" stroke="var(--warning)" strokeWidth={2} name="回流用户" dot={false} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 按平台活跃用户趋势 - 堆积面积图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>活跃用户趋势-按平台</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={platformData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Area type="monotone" dataKey="android" stackId="1" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} name="安卓" />
            <Area type="monotone" dataKey="androidOfficial" stackId="1" stroke="#16a34a" fill="#16a34a" fillOpacity={0.6} name="安卓官方包" />
            <Area type="monotone" dataKey="ios" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="iOS" />
            <Area type="monotone" dataKey="pc" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} name="PC" />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 在线时间分布表 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>在线时间分布</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '11px' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>日期</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>平均时间(分)</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>[0, 5分]</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>(5分, 15分]</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>(15分, 30分]</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>(30分, 45分]</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>(45分, 60分]</th>
                <th style={{ fontSize: '11px', lineHeight: '1.4', padding: '8px 6px' }}>(60分, +∞)</th>
              </tr>
            </thead>
            <tbody>
              {onlineTimeData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.date}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.avgTime}</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range0to5}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range5to15}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range15to30}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range30to45}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range45to60}%</td>
                  <td style={{ fontSize: '11px', lineHeight: '1.4', padding: '6px' }}>{item.range60plus}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 活跃数据明细表 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>活跃数据明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>日期</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>DAU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>新增用户</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>持续活跃用户</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>回流用户</th>
              </tr>
            </thead>
            <tbody>
              {activeData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.date}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.dau.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.newUsers.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.continuousActive.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.returningUsers.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ActiveData;
