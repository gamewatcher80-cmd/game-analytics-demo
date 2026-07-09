import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend, CartesianGrid, Cell, LabelList } from 'recharts';

const COLORS = ['#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3', '#312e81'];
const FLOW_COLORS = ['#4f46e5', '#818cf8', '#22c55e', '#a5b4fc', '#f59e0b', '#ef4444'];

const PaymentConsume = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 钻石消耗分布数据
  const diamondConsume = [
    { type: '抽卡券', amount: 3500000, percent: 41.2, paidAmount: 2800000, freeAmount: 700000, buyers: 8500 },
    { type: '体力购买', amount: 2200000, percent: 25.9, paidAmount: 1760000, freeAmount: 440000, buyers: 12000 },
    { type: '礼包1', amount: 1500000, percent: 17.6, paidAmount: 1500000, freeAmount: 0, buyers: 3200 },
    { type: '礼包2', amount: 800000, percent: 9.4, paidAmount: 800000, freeAmount: 0, buyers: 1850 },
    { type: '礼包3', amount: 500000, percent: 5.9, paidAmount: 500000, freeAmount: 0, buyers: 960 },
    { type: '其他', amount: 0, percent: 0, paidAmount: 0, freeAmount: 0, buyers: 0 },
  ];

  // 晶石-获取&消耗数据
  const stoneFlowData = [
    { date: '2026-04-16', paidGain: 1250000, paidConsume: 980000, freeGain: 4500000, freeConsume: 3800000 },
    { date: '2026-04-15', paidGain: 1180000, paidConsume: 920000, freeGain: 4200000, freeConsume: 3600000 },
    { date: '2026-04-14', paidGain: 1320000, paidConsume: 1050000, freeGain: 4800000, freeConsume: 4100000 },
    { date: '2026-04-13', paidGain: 1150000, paidConsume: 890000, freeGain: 4100000, freeConsume: 3500000 },
    { date: '2026-04-12', paidGain: 1280000, paidConsume: 990000, freeGain: 4600000, freeConsume: 3900000 },
  ];

  // 晶石-存量数据
  const stoneStockData = [
    { date: '2026-04-16', paidDay: 5800000, freeDay: 15200000, paidWeek: 18200000, freeWeek: 45800000, paidMonth: 38500000, freeMonth: 92000000 },
    { date: '2026-04-15', paidDay: 5600000, freeDay: 14800000, paidWeek: 17800000, freeWeek: 44500000, paidMonth: 38000000, freeMonth: 91000000 },
    { date: '2026-04-14', paidDay: 5400000, freeDay: 14500000, paidWeek: 17500000, freeWeek: 44000000, paidMonth: 37500000, freeMonth: 90000000 },
    { date: '2026-04-13', paidDay: 5200000, freeDay: 14200000, paidWeek: 17200000, freeWeek: 43500000, paidMonth: 37000000, freeMonth: 89000000 },
    { date: '2026-04-12', paidDay: 5000000, freeDay: 14000000, paidWeek: 17000000, freeWeek: 43000000, paidMonth: 36500000, freeMonth: 88000000 },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始时间</label>
            <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})} style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束时间</label>
            <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})} style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部终端</option>
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

      {/* 晶石-获取&消耗 & 晶石-存量 */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        {/* 晶石-获取&消耗 */}
        <div className="card" style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>晶石-获取&消耗</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={stoneFlowData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} width={50} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
                formatter={(value) => value.toLocaleString()}
              />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Line type="monotone" dataKey="paidGain" name="付费获取" stroke={FLOW_COLORS[0]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="paidConsume" name="付费消耗" stroke={FLOW_COLORS[1]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="freeGain" name="免费获取" stroke={FLOW_COLORS[2]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="freeConsume" name="免费消耗" stroke={FLOW_COLORS[3]} strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ fontSize: '11px', width: '100%', tableLayout: 'fixed' }}>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}>日期</th>
                  <th style={{ width: '17%' }}>付费获取</th>
                  <th style={{ width: '17%' }}>付费消耗</th>
                  <th style={{ width: '17%' }}>免费获取</th>
                  <th style={{ width: '17%' }}>免费消耗</th>
                  <th style={{ width: '17%' }}>净变化</th>
                </tr>
              </thead>
              <tbody>
                {stoneFlowData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.paidGain.toLocaleString()}</td>
                    <td>{item.paidConsume.toLocaleString()}</td>
                    <td>{item.freeGain.toLocaleString()}</td>
                    <td>{item.freeConsume.toLocaleString()}</td>
                    <td>{(item.paidGain + item.freeGain - item.paidConsume - item.freeConsume).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 晶石-存量 */}
        <div className="card" style={{ padding: '16px' }}>
          <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: '600' }}>晶石-存量</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={stoneStockData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} />
              <YAxis tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} width={50} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
                formatter={(value) => value.toLocaleString()}
              />
              <Legend wrapperStyle={{ fontSize: '10px' }} />
              <Line type="monotone" dataKey="paidDay" name="付费-当日" stroke={FLOW_COLORS[0]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="freeDay" name="免费-当日" stroke={FLOW_COLORS[1]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="paidWeek" name="付费-7日" stroke={FLOW_COLORS[2]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="freeWeek" name="免费-7日" stroke={FLOW_COLORS[3]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="paidMonth" name="付费-30日" stroke={FLOW_COLORS[4]} strokeWidth={2} dot={{ r: 3 }} />
              <Line type="monotone" dataKey="freeMonth" name="免费-30日" stroke={FLOW_COLORS[5]} strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
          <div style={{ marginTop: '12px', overflowX: 'auto' }}>
            <table style={{ fontSize: '11px', width: '100%', tableLayout: 'fixed' }}>
              <thead>
                <tr>
                  <th style={{ width: '14%' }}>日期</th>
                  <th style={{ width: '14%' }}>付费-当日</th>
                  <th style={{ width: '14%' }}>免费-当日</th>
                  <th style={{ width: '14%' }}>付费-7日</th>
                  <th style={{ width: '14%' }}>免费-7日</th>
                  <th style={{ width: '15%' }}>付费-30日</th>
                  <th style={{ width: '15%' }}>免费-30日</th>
                </tr>
              </thead>
              <tbody>
                {stoneStockData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.date}</td>
                    <td>{item.paidDay.toLocaleString()}</td>
                    <td>{item.freeDay.toLocaleString()}</td>
                    <td>{item.paidWeek.toLocaleString()}</td>
                    <td>{item.freeWeek.toLocaleString()}</td>
                    <td>{item.paidMonth.toLocaleString()}</td>
                    <td>{item.freeMonth.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 晶石消耗途径分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>晶石消耗途径分布</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'center' }}>
          {/* 横向条形图 */}
          <ResponsiveContainer width="100%" height={280}>
            <BarChart 
              data={diamondConsume} 
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <YAxis 
                type="category" 
                dataKey="type" 
                tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
                width={70}
              />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '12px' }}
                formatter={(value, name) => {
                  if (name === 'amount') return [value.toLocaleString(), '消耗数量'];
                  return [value, name];
                }}
              />
              <Bar dataKey="amount" radius={[0, 4, 4, 0]}>
                {diamondConsume.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <LabelList dataKey="amount" position="right" formatter={(val) => `${val.toLocaleString()}`} tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          {/* 右侧数据列表 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '500' }}>
              <span>消耗类型</span>
              <span style={{ textAlign: 'right' }}>消耗数量</span>
              <span style={{ textAlign: 'right' }}>占比</span>
            </div>
            {diamondConsume.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', padding: '6px 0', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: COLORS[i], flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)' }}>{item.type}</span>
                </div>
                <span style={{ textAlign: 'right', color: 'var(--text-primary)', fontWeight: '500' }}>{item.amount.toLocaleString()}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{item.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 晶石消耗途径明细 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>晶石消耗途径明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>消耗类型</th>
                <th>消耗人数</th>
                <th>消耗数量（付费晶石+免费晶石）</th>
                <th>消耗数量（付费晶石）</th>
                <th>消耗数量（免费晶石）</th>
              </tr>
            </thead>
            <tbody>
              {diamondConsume.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.buyers > 0 ? item.buyers.toLocaleString() : '-'}</td>
                  <td>{item.amount > 0 ? item.amount.toLocaleString() : '-'}</td>
                  <td>{item.paidAmount > 0 ? item.paidAmount.toLocaleString() : '-'}</td>
                  <td>{item.freeAmount > 0 ? item.freeAmount.toLocaleString() : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default PaymentConsume;
