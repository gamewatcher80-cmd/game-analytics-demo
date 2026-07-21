import React, { useState } from 'react';

const CultivateBand = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 每日乐队养成情况（最近7天 × 5个乐队 = 35行）
  const bandCultivateData = [];
  for (let d = 6; d >= 0; d--) {
    const date = new Date();
    date.setDate(date.getDate() - d);
    for (let b = 1; b <= 5; b++) {
      const unlock = Math.floor(1500 + Math.random() * 1500 + b * 200);
      const enhance = Math.floor(800 + Math.random() * 1200 + b * 100);
      const cultivate = Math.floor(unlock + enhance * (0.6 + Math.random() * 0.3));
      bandCultivateData.push({
        date: `${date.getMonth() + 1}月${date.getDate()}日`,
        band: `乐队${b}`,
        cultivate: cultivate,
        unlock: unlock,
        enhance: enhance,
        enhanceCount: Math.floor(enhance * (1.5 + Math.random() * 1.5)),
      });
    }
  }

  const formatNum = (num) => {
    if (num >= 10000) return (num / 10000).toFixed(1) + '万';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'k';
    return num.toLocaleString();
  };

  return (
    <div style={{ padding: '24px' }}>
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

      {/* 计算逻辑说明 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <h3 style={{ marginBottom: '12px', fontSize: '15px', fontWeight: '600', color: 'var(--primary)' }}>【计算逻辑】</h3>
        <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>乐队名称</span>：<code>band_name</code>，共5个乐队</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>养成人数</span>：对该乐队进行过解锁或强化的去重玩家数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>解锁人数</span>：对该乐队进行过解锁的去重玩家数，<code>act_type = 1</code></div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>强化人数</span>：对该乐队进行过强化的去重玩家数，<code>act_type = 2</code></div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>强化次数</span>：对该乐队进行过强化的事件次数总和，<code>act_type = 2</code></div>
        </div>
      </div>

      {/* 每日乐队养成情况 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日乐队养成情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>日期</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>乐队名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>养成人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>解锁人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>强化人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>强化次数</th>
              </tr>
            </thead>
            <tbody>
              {bandCultivateData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
                  <td style={{ fontSize: '12px' }}>{item.band}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.cultivate)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.unlock)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.enhance)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.enhanceCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CultivateBand;
