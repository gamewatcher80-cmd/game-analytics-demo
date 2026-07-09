import React, { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const RegionComparison = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // DAU对比数据 - 最近30天
  const dauData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    dauData.push({
      date: dateStr.slice(5),
      en: Math.floor(150000 + Math.random() * 30000),
      kr: Math.floor(80000 + Math.random() * 20000),
      tw: Math.floor(50000 + Math.random() * 15000),
    });
  }

  // MAU对比数据 - 自然年12个月
  const mauData = [
    { month: '1月', en: 2800000, kr: 1500000, tw: 950000 },
    { month: '2月', en: 2750000, kr: 1480000, tw: 920000 },
    { month: '3月', en: 2900000, kr: 1550000, tw: 980000 },
    { month: '4月', en: 3050000, kr: 1620000, tw: 1050000 },
    { month: '5月', en: 2980000, kr: 1580000, tw: 1020000 },
    { month: '6月', en: 3100000, kr: 1650000, tw: 1080000 },
    { month: '7月', en: 3200000, kr: 1720000, tw: 1120000 },
    { month: '8月', en: 3150000, kr: 1680000, tw: 1100000 },
    { month: '9月', en: 3050000, kr: 1600000, tw: 1060000 },
    { month: '10月', en: 3250000, kr: 1750000, tw: 1150000 },
    { month: '11月', en: 3300000, kr: 1780000, tw: 1180000 },
    { month: '12月', en: 3400000, kr: 1850000, tw: 1220000 },
  ];

  // 收入对比数据 - 最近30天
  const revenueData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    revenueData.push({
      date: dateStr.slice(5),
      en: Math.floor(450000 + Math.random() * 80000),
      kr: Math.floor(250000 + Math.random() * 50000),
      tw: Math.floor(180000 + Math.random() * 40000),
    });
  }

  // ARPU对比数据 - 最近30天
  const arpuData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    arpuData.push({
      date: dateStr.slice(5),
      en: parseFloat((2.5 + Math.random() * 1.5).toFixed(2)),
      kr: parseFloat((2.8 + Math.random() * 1.2).toFixed(2)),
      tw: parseFloat((3.2 + Math.random() * 1.0).toFixed(2)),
    });
  }

  // 新增对比数据 - 最近30天
  const newUserData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    newUserData.push({
      date: dateStr.slice(5),
      en: Math.floor(8000 + Math.random() * 4000),
      kr: Math.floor(5000 + Math.random() * 3000),
      tw: Math.floor(3000 + Math.random() * 2000),
    });
  }

  // ARPPU对比数据 - 最近30天
  const arppuData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    arppuData.push({
      date: dateStr.slice(5),
      en: parseFloat((15 + Math.random() * 8).toFixed(2)),
      kr: parseFloat((18 + Math.random() * 6).toFixed(2)),
      tw: parseFloat((20 + Math.random() * 5).toFixed(2)),
    });
  }

  // 付费率对比数据 - 最近30天
  const payRateData = [];
  for (let i = 29; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    payRateData.push({
      date: dateStr.slice(5),
      en: parseFloat((12 + Math.random() * 5).toFixed(2)),
      kr: parseFloat((14 + Math.random() * 4).toFixed(2)),
      tw: parseFloat((15 + Math.random() * 4).toFixed(2)),
    });
  }

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
              <option value="all">全部</option>
              <option value="ios">iOS</option>
              <option value="android">安卓</option>
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
              <option value="valid_no_bot">有效+去黑产</option>
              <option value="valid_no_water">有效+去水</option>
              <option value="no_bot_no_water">去黑产+去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 收入对比 - 堆积面积图（调整到第1位） */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>收入对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <AreaChart data={revenueData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={70} tickFormatter={(v) => '$' + (v / 1000).toFixed(0) + 'k'} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => '$' + value.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Area type="monotone" dataKey="en" name="英文地区" stackId="1" stroke="#4f46e5" fill="#4f46e580" strokeWidth={2} />
            <Area type="monotone" dataKey="kr" name="韩国" stackId="1" stroke="#22c55e" fill="#22c55e80" strokeWidth={2} />
            <Area type="monotone" dataKey="tw" name="港澳台" stackId="1" stroke="#f59e0b" fill="#f59e0b80" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 新增对比 - 折线图（调整到DAU之前） */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>新增对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={newUserData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={60} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => value.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* DAU对比 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>DAU对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={dauData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={60} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => value.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* MAU对比 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>MAU对比（最近12个月）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={mauData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={70} tickFormatter={(v) => (v / 1000000).toFixed(1) + 'M'} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => value.toLocaleString()} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ARPU对比 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>ARPU对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={arpuData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={50} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => '$' + value} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ARPPU对比 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>ARPPU对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={arppuData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={60} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => '$' + value} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 付费率对比 - 折线图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>付费率对比（最近30天）</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={payRateData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={50} tickFormatter={(v) => v + '%'} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => value + '%'} />
            <Legend wrapperStyle={{ fontSize: '12px' }} />
            <Line type="monotone" dataKey="en" name="英文地区" stroke="#4f46e5" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="kr" name="韩国" stroke="#22c55e" strokeWidth={2} dot={{ r: 3 }} />
            <Line type="monotone" dataKey="tw" name="港澳台" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RegionComparison;
