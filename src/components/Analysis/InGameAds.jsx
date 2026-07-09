import React, { useState } from 'react';

const InGameAds = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 游戏内广告基础数据
  const baseData = [
    { date: '2026-04-19', clickUsers: 45200, watchUsers: 38500, revenue: 128500, clicks: 125000, completeRate: '85.2%', avgPlays: 3.2, fillRate: '92.5%' },
    { date: '2026-04-18', clickUsers: 43800, watchUsers: 37200, revenue: 122800, clicks: 118000, completeRate: '84.9%', avgPlays: 3.1, fillRate: '91.8%' },
    { date: '2026-04-17', clickUsers: 46500, watchUsers: 39800, revenue: 135600, clicks: 132000, completeRate: '85.6%', avgPlays: 3.4, fillRate: '93.2%' },
    { date: '2026-04-16', clickUsers: 42100, watchUsers: 35800, revenue: 115200, clicks: 108000, completeRate: '85.0%', avgPlays: 3.0, fillRate: '90.5%' },
    { date: '2026-04-15', clickUsers: 44800, watchUsers: 38200, revenue: 129800, clicks: 122000, completeRate: '85.3%', avgPlays: 3.3, fillRate: '92.0%' },
    { date: '2026-04-14', clickUsers: 41200, watchUsers: 34800, revenue: 112500, clicks: 105000, completeRate: '84.5%', avgPlays: 2.9, fillRate: '89.8%' },
    { date: '2026-04-13', clickUsers: 43500, watchUsers: 37000, revenue: 124600, clicks: 118500, completeRate: '85.1%', avgPlays: 3.2, fillRate: '91.5%' },
  ];

  // 各类广告点击情况
  const adTypeData = [
    { date: '2026-04-19', adPosition: '位置1', clickUsers: 45200, watchUsers: 38500, revenue: 128500, clicks: 125000, completeRate: '85.2%', avgPlays: 3.2, fillRate: '92.5%' },
    { date: '2026-04-19', adPosition: '位置2', clickUsers: 32100, watchUsers: 27800, revenue: 89200, clicks: 85600, completeRate: '82.3%', avgPlays: 2.8, fillRate: '88.5%' },
    { date: '2026-04-19', adPosition: '位置3', clickUsers: 18500, watchUsers: 15200, revenue: 45600, clicks: 45200, completeRate: '78.9%', avgPlays: 2.1, fillRate: '85.2%' },
    { date: '2026-04-18', adPosition: '位置1', clickUsers: 43800, watchUsers: 37200, revenue: 122800, clicks: 118000, completeRate: '84.9%', avgPlays: 3.1, fillRate: '91.8%' },
    { date: '2026-04-18', adPosition: '位置2', clickUsers: 31200, watchUsers: 26800, revenue: 85600, clicks: 82800, completeRate: '81.8%', avgPlays: 2.7, fillRate: '87.2%' },
    { date: '2026-04-18', adPosition: '位置3', clickUsers: 17800, watchUsers: 14600, revenue: 43200, clicks: 43600, completeRate: '78.2%', avgPlays: 2.0, fillRate: '84.6%' },
    { date: '2026-04-17', adPosition: '位置1', clickUsers: 46500, watchUsers: 39800, revenue: 135600, clicks: 132000, completeRate: '85.6%', avgPlays: 3.4, fillRate: '93.2%' },
    { date: '2026-04-17', adPosition: '位置2', clickUsers: 33500, watchUsers: 28900, revenue: 95800, clicks: 92500, completeRate: '83.1%', avgPlays: 2.9, fillRate: '89.8%' },
    { date: '2026-04-17', adPosition: '位置3', clickUsers: 19200, watchUsers: 15800, revenue: 48200, clicks: 48500, completeRate: '79.5%', avgPlays: 2.2, fillRate: '86.1%' },
    { date: '2026-04-16', adPosition: '位置1', clickUsers: 42100, watchUsers: 35800, revenue: 115200, clicks: 108000, completeRate: '85.0%', avgPlays: 3.0, fillRate: '90.5%' },
    { date: '2026-04-16', adPosition: '位置2', clickUsers: 29800, watchUsers: 25200, revenue: 78200, clicks: 75800, completeRate: '80.9%', avgPlays: 2.5, fillRate: '85.3%' },
    { date: '2026-04-16', adPosition: '位置3', clickUsers: 16800, watchUsers: 13800, revenue: 39800, clicks: 40200, completeRate: '77.6%', avgPlays: 1.9, fillRate: '83.2%' },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
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
              <option value="all">全部终端</option>
              <option value="ios">iOS</option>
              <option value="android">Android</option>
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

      {/* 游戏内广告基础数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>游戏内广告基础数据</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>点击人数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>观看人数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告收入</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告点击量</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告完播率</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>人均播放次数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告填充率</th>
              </tr>
            </thead>
            <tbody>
              {baseData.map((row, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.clickUsers.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.watchUsers.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#4f46e5', fontWeight: '500' }}>¥{row.revenue.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.clicks.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#22c55e', fontWeight: '600' }}>{row.completeRate}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.avgPlays}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#3b82f6', fontWeight: '600' }}>{row.fillRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 各类广告点击情况 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>各类广告点击情况</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告位类型</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>点击人数（至少点击1次）</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>观看人数(至少完播1次)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告收入</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告点击量</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告完播率</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告人均播放次数(基于DAU)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>广告填充率</th>
              </tr>
            </thead>
            <tbody>
              {adTypeData.map((row, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.adPosition}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.clickUsers.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.watchUsers.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#4f46e5', fontWeight: '500' }}>¥{row.revenue.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.clicks.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#22c55e', fontWeight: '600' }}>{row.completeRate}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.avgPlays}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', color: '#3b82f6', fontWeight: '600' }}>{row.fillRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InGameAds;
