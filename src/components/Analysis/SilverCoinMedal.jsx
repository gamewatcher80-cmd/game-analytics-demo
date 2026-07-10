import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SilverCoinMedal = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 1. 银币产出/消耗趋势（30天）
  const generateSilverTrendData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.1;
      return {
        date: date.toISOString().split('T')[0],
        produce: Math.floor((500000 + Math.random() * 200000) * dayFactor),
        consume: Math.floor((450000 + Math.random() * 180000) * dayFactor),
      };
    });
  };

  // 2. 勋章产出/消耗趋势（30天）
  const generateMedalTrendData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const dayFactor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.1;
      return {
        date: date.toISOString().split('T')[0],
        produce: Math.floor((80000 + Math.random() * 40000) * dayFactor),
        consume: Math.floor((70000 + Math.random() * 35000) * dayFactor),
      };
    });
  };

  // 3. 银币产出明细（按途径1~4）
  const generateSilverProduceDetail = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const total = Math.floor(400000 + Math.random() * 200000);
      return {
        date: date.toISOString().split('T')[0],
        total,
        way1: Math.floor(total * 0.45),
        way2: Math.floor(total * 0.25),
        way3: Math.floor(total * 0.18),
        way4: Math.floor(total * 0.12),
      };
    });
  };

  // 4. 银币消耗明细（按途径1~4）
  const generateSilverConsumeDetail = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const total = Math.floor(350000 + Math.random() * 180000);
      return {
        date: date.toISOString().split('T')[0],
        total,
        way1: Math.floor(total * 0.40),
        way2: Math.floor(total * 0.30),
        way3: Math.floor(total * 0.20),
        way4: Math.floor(total * 0.10),
      };
    });
  };

  // 5. 勋章产出明细（按途径1~4）
  const generateMedalProduceDetail = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const total = Math.floor(60000 + Math.random() * 30000);
      return {
        date: date.toISOString().split('T')[0],
        total,
        way1: Math.floor(total * 0.50),
        way2: Math.floor(total * 0.20),
        way3: Math.floor(total * 0.18),
        way4: Math.floor(total * 0.12),
      };
    });
  };

  // 6. 勋章消耗明细（按途径1~4）
  const generateMedalConsumeDetail = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const total = Math.floor(50000 + Math.random() * 25000);
      return {
        date: date.toISOString().split('T')[0],
        total,
        way1: Math.floor(total * 0.42),
        way2: Math.floor(total * 0.28),
        way3: Math.floor(total * 0.18),
        way4: Math.floor(total * 0.12),
      };
    });
  };

  const silverTrendData = generateSilverTrendData();
  const medalTrendData = generateMedalTrendData();
  const silverProduceDetail = generateSilverProduceDetail();
  const silverConsumeDetail = generateSilverConsumeDetail();
  const medalProduceDetail = generateMedalProduceDetail();
  const medalConsumeDetail = generateMedalConsumeDetail();

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  const formatNum = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toLocaleString();
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

      {/* 1. 银币产出/消耗 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>银币产出/消耗</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={silverTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Line type="monotone" dataKey="produce" stroke="#3b82f6" strokeWidth={2} name="产出" dot={false} />
            <Line type="monotone" dataKey="consume" stroke="#ef4444" strokeWidth={2} name="消耗" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 2. 勋章产出/消耗 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>勋章产出/消耗</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={medalTrendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} />
            <YAxis stroke="var(--text-muted)" fontSize={12} tick={{fill: 'var(--text-muted)'}} tickFormatter={formatNum} />
            <Tooltip contentStyle={customTooltipStyle} labelStyle={{color: 'var(--text-primary)'}} formatter={(v) => formatNum(v)} />
            <Legend wrapperStyle={{ color: 'var(--text-secondary)', fontSize: '12px' }} />
            <Line type="monotone" dataKey="produce" stroke="#3b82f6" strokeWidth={2} name="产出" dot={false} />
            <Line type="monotone" dataKey="consume" stroke="#ef4444" strokeWidth={2} name="消耗" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3. 银币产出明细 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>银币产出明细</h3>
        <div style={{ overflow: 'auto', maxHeight: '340px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px' }}>日期</th>
                <th style={{ fontSize: '12px' }}>合计</th>
                <th style={{ fontSize: '12px' }}>途径1</th>
                <th style={{ fontSize: '12px' }}>途径2</th>
                <th style={{ fontSize: '12px' }}>途径3</th>
                <th style={{ fontSize: '12px' }}>途径4</th>
              </tr>
            </thead>
            <tbody>
              {silverProduceDetail.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.total)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way1)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way2)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way3)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. 银币消耗明细 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>银币消耗明细</h3>
        <div style={{ overflow: 'auto', maxHeight: '340px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px' }}>日期</th>
                <th style={{ fontSize: '12px' }}>合计</th>
                <th style={{ fontSize: '12px' }}>途径1</th>
                <th style={{ fontSize: '12px' }}>途径2</th>
                <th style={{ fontSize: '12px' }}>途径3</th>
                <th style={{ fontSize: '12px' }}>途径4</th>
              </tr>
            </thead>
            <tbody>
              {silverConsumeDetail.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.total)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way1)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way2)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way3)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. 勋章产出明细 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>勋章产出明细</h3>
        <div style={{ overflow: 'auto', maxHeight: '340px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px' }}>日期</th>
                <th style={{ fontSize: '12px' }}>合计</th>
                <th style={{ fontSize: '12px' }}>途径1</th>
                <th style={{ fontSize: '12px' }}>途径2</th>
                <th style={{ fontSize: '12px' }}>途径3</th>
                <th style={{ fontSize: '12px' }}>途径4</th>
              </tr>
            </thead>
            <tbody>
              {medalProduceDetail.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.total)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way1)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way2)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way3)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. 勋章消耗明细 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>勋章消耗明细</h3>
        <div style={{ overflow: 'auto', maxHeight: '340px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px' }}>日期</th>
                <th style={{ fontSize: '12px' }}>合计</th>
                <th style={{ fontSize: '12px' }}>途径1</th>
                <th style={{ fontSize: '12px' }}>途径2</th>
                <th style={{ fontSize: '12px' }}>途径3</th>
                <th style={{ fontSize: '12px' }}>途径4</th>
              </tr>
            </thead>
            <tbody>
              {medalConsumeDetail.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.total)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way1)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way2)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way3)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.way4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SilverCoinMedal;
