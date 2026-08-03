import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const ShopExpansion = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 生成30天扩张数据（3种扩张类型：店铺/保险箱/仓库，人数 ≤ 次数）
  const generateExpansionData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const shopUser = Math.floor(1200 + Math.random() * 2800);
      const safeUser = Math.floor(200 + Math.random() * 600);
      const warehouseUser = Math.floor(300 + Math.random() * 700);
      return {
        date: date.toISOString().split('T')[0],
        shopUser,
        shopExpansion: Math.floor(shopUser * (1.2 + Math.random() * 1.3)),
        safeUser,
        safeExpansion: Math.floor(safeUser * (1.2 + Math.random() * 1.3)),
        warehouseUser,
        warehouseExpansion: Math.floor(warehouseUser * (1.2 + Math.random() * 1.3)),
      };
    });
  };

  const expansionData = generateExpansionData();

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
            </select>
          </div>
        </div>
      </div>

      {/* 1. 每日扩张人数 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日扩张人数</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expansionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Line type="monotone" dataKey="shopUser" stroke="#3b82f6" strokeWidth={2} name="店铺扩张" dot={false} />
            <Line type="monotone" dataKey="safeUser" stroke="#22c55e" strokeWidth={2} name="保险箱扩张" dot={false} />
            <Line type="monotone" dataKey="warehouseUser" stroke="#f59e0b" strokeWidth={2} name="仓库扩张" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 每日扩张次数 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日扩张次数</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={expansionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Line type="monotone" dataKey="shopExpansion" stroke="#3b82f6" strokeWidth={2} name="店铺扩张" dot={false} />
            <Line type="monotone" dataKey="safeExpansion" stroke="#22c55e" strokeWidth={2} name="保险箱扩张" dot={false} />
            <Line type="monotone" dataKey="warehouseExpansion" stroke="#f59e0b" strokeWidth={2} name="仓库扩张" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ShopExpansion;
