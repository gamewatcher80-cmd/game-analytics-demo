import React, { useState } from 'react';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const COUNTRY_STYLES = {
  CN: { color: '#f59e0b', name: 'CN' },
  JP: { color: '#1e40af', name: 'JP' },
  HK: { color: '#06b6d4', name: 'HK' },
  US: { color: '#fcd34d', name: 'US' },
  SG: { color: '#10b981', name: 'SG' },
  NL: { color: '#047857', name: 'NL' },
};

const COUNTRY_LIST = Object.keys(COUNTRY_STYLES);

// 通用曲线图（带左信息块）
const CountryChart = ({ title, dimension, data, valueFormater, yFormatter }) => {
  const dims = [
    { key: 'dr', label: '按天' },
    { key: 'group', label: dimension.includes('12个月') ? '按月' : '分组(7/7)' },
    { key: 'range', label: dimension },
    { key: 'vs', label: 'VS' },
  ];

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        {/* 左侧 KPI 块 */}
        <div style={{ width: '180px', flexShrink: 0, borderRight: '1px solid var(--border-color)', paddingRight: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '15px', fontWeight: '600' }}>{title}</h3>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {dims.map((d, i) => (
              <span key={i} style={{ marginRight: '8px' }}>{d.label}</span>
            ))}
          </div>
          <div style={{ marginTop: '12px' }}>
            {COUNTRY_LIST.map((c) => {
              const style = COUNTRY_STYLES[c];
              const value = data && data.length > 0 ? data[data.length - 1][c] : 0;
              return (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: style.color }}></span>
                  <span style={{ flex: 1, fontSize: '12px', color: 'var(--text-secondary)' }}>{style.name}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {valueFormater ? valueFormater(value) : value.toLocaleString()}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        {/* 右侧图表 */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey={dimension.includes('12个月') ? 'month' : 'date'} tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={60} tickFormatter={yFormatter} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
                formatter={(value) => valueFormater ? valueFormater(value) : value.toLocaleString()}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              {COUNTRY_LIST.map((c) => (
                <Line
                  key={c}
                  type="monotone"
                  dataKey={c}
                  name={COUNTRY_STYLES[c].name}
                  stroke={COUNTRY_STYLES[c].color}
                  strokeWidth={2}
                  dot={{ r: 2 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

// 收入对比（堆积面积图）
const RevenueCompareChart = ({ data }) => {
  const dims = [
    { key: 'dr', label: '按天' },
    { key: 'group', label: '分组(7/7)' },
    { key: 'range', label: '最近30天' },
    { key: 'vs', label: 'VS' },
  ];

  return (
    <div className="card" style={{ marginBottom: '20px' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ width: '180px', flexShrink: 0, borderRight: '1px solid var(--border-color)', paddingRight: '16px' }}>
          <h3 style={{ marginBottom: '8px', fontSize: '15px', fontWeight: '600' }}>收入对比（最近30天）</h3>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {dims.map((d, i) => <span key={i} style={{ marginRight: '8px' }}>{d.label}</span>)}
          </div>
          <div style={{ marginTop: '12px' }}>
            {COUNTRY_LIST.map((c) => {
              const style = COUNTRY_STYLES[c];
              const value = data && data.length > 0 ? data[data.length - 1][c] : 0;
              return (
                <div key={c} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '2px', background: style.color }}></span>
                  <span style={{ flex: 1, fontSize: '12px', color: 'var(--text-secondary)' }}>{style.name}</span>
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>{`$${(value / 1000).toFixed(1)}k`}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} width={70} tickFormatter={(v) => '$' + (v / 1000).toFixed(0) + 'k'} />
              <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
                formatter={(value) => '$' + value.toLocaleString()} />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              {COUNTRY_LIST.map((c) => (
                <Area
                  key={c}
                  type="monotone"
                  dataKey={c}
                  name={COUNTRY_STYLES[c].name}
                  stackId="1"
                  stroke={COUNTRY_STYLES[c].color}
                  fill={COUNTRY_STYLES[c].color + '50'}
                  strokeWidth={2}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

const CountryComparison = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // DAU 30天 - 6国家
  const generateData = (base, variance) => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.15;
      const countryCols = {};
      COUNTRY_LIST.forEach((c, idx) => {
        countryCols[c] = Math.floor((base * (1 + idx * 0.15) + Math.random() * variance) * dayFactor);
      });
      return { date: date.toISOString().split('T')[0].slice(5), ...countryCols };
    });
  };

  // DAU对比 - 最近30天
  const dauData = generateData(80000, 20000);

  // MAU对比 - 12个月
  const mauData = Array.from({ length: 12 }, (_, i) => {
    const row = { month: `${i + 1}月` };
    COUNTRY_LIST.forEach((c, idx) => {
      row[c] = Math.floor(800000 + Math.random() * 300000 + idx * 200000);
    });
    return row;
  });

  // 收入对比 - 30天
  const revenueData = generateData(300000, 80000);

  // ARPU对比 - 30天
  const arpuData = generateData(2.5, 0.8).map(row => {
    const newRow = { ...row };
    COUNTRY_LIST.forEach(c => {
      newRow[c] = parseFloat(Number(row[c] / 10000).toFixed(2));
    });
    return newRow;
  });

  // 新增对比 - 30天
  const newUserData = generateData(3000, 1500);

  // ARPPU对比 - 30天
  const arppuData = generateData(15, 5).map(row => {
    const newRow = { ...row };
    COUNTRY_LIST.forEach(c => {
      newRow[c] = parseFloat(Number(row[c] / 100).toFixed(2));
    });
    return newRow;
  });

  // 付费率对比 - 30天
  const payRateData = generateData(15, 4).map(row => {
    const newRow = { ...row };
    COUNTRY_LIST.forEach(c => {
      newRow[c] = parseFloat(Number(row[c] / 100).toFixed(2));
    });
    return newRow;
  });

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
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>国家/地区</label>
            <select defaultValue="all" style={{ width: '150px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部国家/地区</option>
              <option value="CN">CN</option>
              <option value="JP">JP</option>
              <option value="HK">HK</option>
              <option value="US">US</option>
              <option value="SG">SG</option>
              <option value="NL">NL</option>
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
            </select>
          </div>
        </div>
      </div>

      {/* 1. 收入对比 - 累计图 */}
      <RevenueCompareChart data={revenueData} />

      {/* 2. 新增对比 */}
      <CountryChart title="新增对比（最近30天）" dimension="最近30天" data={newUserData} />

      {/* 3. DAU对比 */}
      <CountryChart title="DAU对比（最近30天）" dimension="最近30天" data={dauData} />

      {/* 4. MAU对比 */}
      <CountryChart title="MAU对比（最近12个月）" dimension="最近12个月" data={mauData} yFormatter={(v) => (v / 1000000).toFixed(1) + 'M'} />

      {/* 5. ARPU对比 */}
      <CountryChart title="ARPU对比（最近30天）" dimension="最近30天" data={arpuData} valueFormater={(v) => `$${v}`} yFormatter={(v) => `$${v}`} />

      {/* 6. ARPPU对比 */}
      <CountryChart title="ARPPU对比（最近30天）" dimension="最近30天" data={arppuData} valueFormater={(v) => `$${v}`} yFormatter={(v) => `$${v}`} />

      {/* 7. 付费率对比 */}
      <CountryChart title="付费率对比（最近30天）" dimension="最近30天" data={payRateData} valueFormater={(v) => `${v}%`} yFormatter={(v) => `${v}%`} />
    </div>
  );
};

export default CountryComparison;
