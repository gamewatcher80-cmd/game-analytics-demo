import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, BarChart, Bar } from 'recharts';

const ATOverview = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 生成30天AT数据
  const generateATData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.1;
      const dau = Math.floor((8000 + Math.random() * 4000) * dayFactor);
      const totalEnter = Math.floor((15000 + Math.random() * 8000) * dayFactor);
      const avgStay = (5 + Math.random() * 10).toFixed(1);
      return {
        date: date.toISOString().split('T')[0],
        dau,
        totalEnter,
        avgEnterPerUser: (totalEnter / dau).toFixed(2),
        avgStayTime: avgStay,
        stayRange0to1: Math.floor(15 + Math.random() * 10),
        stayRange1to5: Math.floor(30 + Math.random() * 15),
        stayRange5to10: Math.floor(25 + Math.random() * 10),
        stayRange10plus: Math.floor(10 + Math.random() * 8),
      };
    });
  };

  const atData = generateATData();

  // 生成AT留存率数据
  const generateRetentionData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const baseRate = 35 + Math.random() * 15;
      return {
        date: date.toISOString().split('T')[0],
        d1: (baseRate).toFixed(2),
        d3: (baseRate * 0.7).toFixed(2),
        d4: (baseRate * 0.62).toFixed(2),
        d5: (baseRate * 0.55).toFixed(2),
        d6: (baseRate * 0.5).toFixed(2),
        d7: (baseRate * 0.45).toFixed(2),
        d14: (baseRate * 0.28).toFixed(2),
        d30: (baseRate * 0.15).toFixed(2),
      };
    });
  };

  const retentionData = generateRetentionData();

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  const formatNumber = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toFixed(0);
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

      {/* 1. AT DAU */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>AT DAU</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={atData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="dau" stroke="#3b82f6" strokeWidth={2} name="AT DAU" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 每日总进入次数 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日总进入次数</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={atData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="totalEnter" stroke="#22c55e" strokeWidth={2} name="总进入次数" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 人均进入次数 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>人均进入次数</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={atData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="avgEnterPerUser" stroke="#f59e0b" strokeWidth={2} name="人均进入次数" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 4. 平均停留时长 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>平均停留时长</h3>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart data={atData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} unit="min" />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Line type="monotone" dataKey="avgStayTime" stroke="#ef4444" strokeWidth={2} name="平均停留时长(分钟)" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 5. 停留时长分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>停留时长分布</h3>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={atData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} unit="%" />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Bar dataKey="stayRange0to1" stackId="a" fill="#3b82f6" name="0~1min" />
            <Bar dataKey="stayRange1to5" stackId="a" fill="#22c55e" name="1min~5min" />
            <Bar dataKey="stayRange5to10" stackId="a" fill="#f59e0b" name="5min~10min" />
            <Bar dataKey="stayRange10plus" stackId="a" fill="#ef4444" name="10min+" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* 6. AT日报明细 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>AT日报明细</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>日期</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>AT DAU</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>总进入次数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>人均进入次数</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>平均停留时长</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>0~1min</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>1min~5min</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>5min~10min</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>10min+</th>
              </tr>
            </thead>
            <tbody>
              {atData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.date}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.dau.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.totalEnter.toLocaleString()}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.avgEnterPerUser}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.avgStayTime}min</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.stayRange0to1}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.stayRange1to5}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.stayRange5to10}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.stayRange10plus}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 7. AT留存率 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>AT留存率</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>日期</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>次日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>3日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>4日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>5日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>6日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>7日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>14日</th>
                <th style={{ fontSize: '12px', lineHeight: '1.4' }}>30日</th>
              </tr>
            </thead>
            <tbody>
              {retentionData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.date}</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d1}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d3}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d4}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d5}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d6}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d7}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d14}%</td>
                  <td style={{ fontSize: '12px', lineHeight: '1.4' }}>{item.d30}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ATOverview;
