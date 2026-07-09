import React, { useState } from 'react';
import KPICard from '../Dashboard/KPICard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RealtimeData = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date().toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 模拟实时数据
  const realtimeData = {
    online: 12458,
    onlineChange: 8.5,
    active: 45892,
    activeChange: -3.2,
    activeRatio: 3.2,
    newUsers: 3256,
    newChange: 15.8,
    newEstimate: 8500,
    revenue: 128560,
    revenueChange: 12.3,
    payingUsers: 856,
    arppu: 150.12
  };

  // 生成0点~24点的分小时在线数据（每小时一条，共24条）
  const hourlyOnlineData = [
    { hour: '00:00', value: 8500 },
    { hour: '01:00', value: 7500 },
    { hour: '02:00', value: 6200 },
    { hour: '03:00', value: 5200 },
    { hour: '04:00', value: 4100 },
    { hour: '05:00', value: 4800 },
    { hour: '06:00', value: 5800 },
    { hour: '07:00', value: 8500 },
    { hour: '08:00', value: 12500 },
    { hour: '09:00', value: 18200 },
    { hour: '10:00', value: 21500 },
    { hour: '11:00', value: 20500 },
    { hour: '12:00', value: 21500 },
    { hour: '13:00', value: 19800 },
    { hour: '14:00', value: 17800 },
    { hour: '15:00', value: 16500 },
    { hour: '16:00', value: 15500 },
    { hour: '17:00', value: 14500 },
    { hour: '18:00', value: 15200 },
    { hour: '19:00', value: 16800 },
    { hour: '20:00', value: 18500 },
    { hour: '21:00', value: 17500 },
    { hour: '22:00', value: 14500 },
    { hour: '23:00', value: 10000 },
  ];

  // 分小时数据（每小时一条，累计收入数据逐步提高）
  const hourlyData = [
    { hour: '00:00', active: 5800, activeDevice: 5600, new: 120, revenue: 2500, paying: 35, payRate: 1.2, arpu: 0.43, arppu: 71.4, payActive: 25, newPayUser: 4, firstPayUser: 2 },
    { hour: '01:00', active: 6800, activeDevice: 6600, new: 95, revenue: 4800, paying: 52, payRate: 1.3, arpu: 0.71, arppu: 92.3, payActive: 38, newPayUser: 7, firstPayUser: 4 },
    { hour: '02:00', active: 6200, activeDevice: 5900, new: 80, revenue: 6600, paying: 70, payRate: 1.4, arpu: 1.06, arppu: 94.3, payActive: 52, newPayUser: 9, firstPayUser: 5 },
    { hour: '03:00', active: 4800, activeDevice: 4600, new: 55, revenue: 7800, paying: 82, payRate: 1.5, arpu: 1.63, arppu: 95.1, payActive: 62, newPayUser: 10, firstPayUser: 6 },
    { hour: '04:00', active: 4100, activeDevice: 3800, new: 45, revenue: 9000, paying: 92, payRate: 1.6, arpu: 2.20, arppu: 97.8, payActive: 72, newPayUser: 11, firstPayUser: 6 },
    { hour: '05:00', active: 5200, activeDevice: 5000, new: 65, revenue: 11500, paying: 115, payRate: 1.6, arpu: 2.21, arppu: 100.0, payActive: 90, newPayUser: 14, firstPayUser: 8 },
    { hour: '06:00', active: 5800, activeDevice: 5500, new: 95, revenue: 13600, paying: 138, payRate: 1.7, arpu: 2.34, arppu: 98.6, payActive: 108, newPayUser: 17, firstPayUser: 9 },
    { hour: '07:00', active: 8500, activeDevice: 8200, new: 180, revenue: 17200, paying: 180, payRate: 1.7, arpu: 2.02, arppu: 95.6, payActive: 140, newPayUser: 22, firstPayUser: 12 },
    { hour: '08:00', active: 12500, activeDevice: 11800, new: 420, revenue: 25700, paying: 280, payRate: 1.8, arpu: 2.06, arppu: 91.8, payActive: 210, newPayUser: 34, firstPayUser: 19 },
    { hour: '09:00', active: 18200, activeDevice: 17000, new: 850, revenue: 41500, paying: 465, payRate: 1.9, arpu: 2.28, arppu: 89.2, payActive: 340, newPayUser: 59, firstPayUser: 34 },
    { hour: '10:00', active: 21500, activeDevice: 19800, new: 1200, revenue: 57300, paying: 620, payRate: 2.0, arpu: 2.66, arppu: 92.4, payActive: 460, newPayUser: 82, firstPayUser: 49 },
    { hour: '11:00', active: 20500, activeDevice: 19200, new: 980, revenue: 72000, paying: 750, payRate: 2.1, arpu: 3.51, arppu: 96.0, payActive: 560, newPayUser: 95, firstPayUser: 56 },
    { hour: '12:00', active: 21500, activeDevice: 19800, new: 1200, revenue: 94500, paying: 920, payRate: 2.2, arpu: 4.40, arppu: 102.7, payActive: 680, newPayUser: 118, firstPayUser: 71 },
    { hour: '13:00', active: 19800, activeDevice: 18500, new: 980, revenue: 113000, paying: 1065, payRate: 2.3, arpu: 5.71, arppu: 106.1, payActive: 780, newPayUser: 130, firstPayUser: 78 },
    { hour: '14:00', active: 17800, activeDevice: 16800, new: 750, revenue: 131500, paying: 1195, payRate: 2.3, arpu: 7.39, arppu: 110.0, payActive: 890, newPayUser: 145, firstPayUser: 87 },
    { hour: '15:00', active: 16500, activeDevice: 15500, new: 620, revenue: 145700, paying: 1310, payRate: 2.3, arpu: 8.83, arppu: 111.2, payActive: 980, newPayUser: 155, firstPayUser: 93 },
    { hour: '16:00', active: 16500, activeDevice: 15200, new: 650, revenue: 159900, paying: 1420, payRate: 2.3, arpu: 9.69, arppu: 112.6, payActive: 1065, newPayUser: 165, firstPayUser: 99 },
    { hour: '17:00', active: 14500, activeDevice: 13500, new: 520, revenue: 171700, paying: 1515, payRate: 2.3, arpu: 11.84, arppu: 113.3, payActive: 1135, newPayUser: 172, firstPayUser: 103 },
    { hour: '18:00', active: 14500, activeDevice: 13500, new: 520, revenue: 183500, paying: 1605, payRate: 2.3, arpu: 12.66, arppu: 114.3, payActive: 1205, newPayUser: 180, firstPayUser: 108 },
    { hour: '19:00', active: 15200, activeDevice: 14200, new: 580, revenue: 198800, paying: 1725, payRate: 2.3, arpu: 13.08, arppu: 115.2, payActive: 1295, newPayUser: 190, firstPayUser: 114 },
    { hour: '20:00', active: 16800, activeDevice: 15800, new: 720, revenue: 218300, paying: 1865, payRate: 2.3, arpu: 12.99, arppu: 117.0, payActive: 1395, newPayUser: 202, firstPayUser: 121 },
    { hour: '21:00', active: 17500, activeDevice: 16500, new: 680, revenue: 235900, paying: 1990, payRate: 2.4, arpu: 13.48, arppu: 118.5, payActive: 1485, newPayUser: 210, firstPayUser: 126 },
    { hour: '22:00', active: 14500, activeDevice: 13500, new: 450, revenue: 246800, paying: 2075, payRate: 2.4, arpu: 17.02, arppu: 118.9, payActive: 1545, newPayUser: 215, firstPayUser: 129 },
    { hour: '23:00', active: 10000, activeDevice: 9200, new: 280, revenue: 251200, paying: 2120, payRate: 2.4, arpu: 25.12, arppu: 118.5, payActive: 1575, newPayUser: 218, firstPayUser: 131 },
  ];

  const formatNumber = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toString();
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

      {/* KPI 卡片 - 横向一行显示 */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '24px', overflowX: 'auto' }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <KPICard 
            title="当前在线人数（账号）" 
            value={realtimeData.online.toLocaleString()} 
            change={realtimeData.onlineChange}
            icon="👥"
          />
        </div>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <KPICard 
            title="今日实时活跃账号" 
            value={realtimeData.active.toLocaleString()} 
            change={realtimeData.activeChange}
            subtitle={`活跃/新增: ${realtimeData.activeRatio}x`}
            icon="✅"
          />
        </div>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <KPICard 
            title="今日实时新增账号" 
            value={realtimeData.newUsers.toLocaleString()} 
            change={realtimeData.newChange}
            subtitle={`预计全天: ${realtimeData.newEstimate.toLocaleString()}`}
            icon="🆕"
          />
        </div>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <KPICard 
            title="今日实时收入" 
            value={`¥${formatNumber(realtimeData.revenue)}`} 
            change={realtimeData.revenueChange}
            subtitle={`付费人数: ${realtimeData.payingUsers.toLocaleString()} | ARPPU: ¥${realtimeData.arppu.toFixed(2)}`}
            icon="💰"
          />
        </div>
      </div>

      {/* 实时在线趋势 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>实时在线趋势</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyOnlineData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="hour" stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px',
                padding: '12px'
              }} 
              labelStyle={{ color: 'var(--text-primary)' }}
              formatter={(value) => value.toLocaleString()}
            />
            <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} name="在线人数" dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 实时新增 & 活跃趋势 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>实时新增 & 活跃趋势</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={hourlyData} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="hour" stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <YAxis yAxisId="left" stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <YAxis yAxisId="right" orientation="right" stroke="var(--text-muted)" fontSize={11} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip 
              contentStyle={{ 
                background: 'var(--bg-card)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '8px',
                padding: '12px'
              }} 
              labelStyle={{ color: 'var(--text-primary)' }}
            />
            <Line yAxisId="left" type="monotone" dataKey="active" stroke="var(--success)" strokeWidth={2} name="活跃账号" dot={false} />
            <Line yAxisId="right" type="monotone" dataKey="new" stroke="var(--primary)" strokeWidth={2} name="新增账号" dot={false} />
          </LineChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '10px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ width: '12px', height: '3px', background: 'var(--success)', borderRadius: '2px' }}></span>
            活跃账号
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ width: '12px', height: '3px', background: 'var(--primary)', borderRadius: '2px' }}></span>
            新增账号
          </span>
        </div>
      </div>

      {/* 每小时数据明细表 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每小时数据明细表</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>时间</th>
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
              {hourlyData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.hour}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.active.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.activeDevice.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.new.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.revenue.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.paying.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.payRate}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.arpu.toFixed(2)}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>¥{item.arppu.toFixed(2)}</td>
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

export default RealtimeData;
