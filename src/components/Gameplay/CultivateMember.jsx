import React, { useState } from 'react';

const CultivateMember = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 每日角色养成情况（昨日，按 member_name 分组）
  const memberCultivateData = [
    { name: '角色1', users: 18500, upgradeCount: 32600, totalLevel: 142800, avgLevel: 4.4 },
    { name: '角色2', users: 16200, upgradeCount: 28100, totalLevel: 118500, avgLevel: 4.2 },
    { name: '角色3', users: 14800, upgradeCount: 25500, totalLevel: 102000, avgLevel: 4.0 },
    { name: '角色4', users: 12500, upgradeCount: 21800, totalLevel: 91500, avgLevel: 4.2 },
    { name: '角色5', users: 9800, upgradeCount: 17500, totalLevel: 68200, avgLevel: 3.9 },
    { name: '角色6', users: 7200, upgradeCount: 12800, totalLevel: 51200, avgLevel: 4.0 },
  ];

  // 角色升级原因细分（昨日，按 reason 分组）
  const reasonDistributionData = [
    { reason: '原因1', users: 22000, count: 45000, ratio: 32.5, totalLevel: 198000, avgLevel: 4.4 },
    { reason: '原因2', users: 18500, count: 38200, ratio: 27.6, totalLevel: 164200, avgLevel: 4.3 },
    { reason: '原因3', users: 15800, count: 32600, ratio: 23.6, totalLevel: 137000, avgLevel: 4.2 },
    { reason: '原因4', users: 12500, count: 22600, ratio: 16.3, totalLevel: 90400, avgLevel: 4.0 },
  ];

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
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>角色名称</span> - 基于 <code>member_name</code></div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>升级原因</span> - 基于 <code>reason</code></div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>养成人数</span> - 进行角色养成操作的去重玩家数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>升级次数</span> - 基于 <code>member_op_flow</code> 事件次数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>总提升等级</span> - 基于 <code>member_rank_level</code> 和 <code>member_before_rank_level</code> 进行计算</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>单次平均提升等级</span> - 总提升等级 ÷ 升级次数</div>
        </div>
      </div>

      {/* 1. 每日角色养成情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>每日角色养成情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>角色名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>养成人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>升级次数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>总提升等级</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>单次平均提升等级</th>
              </tr>
            </thead>
            <tbody>
              {memberCultivateData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.users)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.upgradeCount)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.totalLevel)}</td>
                  <td style={{ fontSize: '12px' }}>{item.avgLevel.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. 角色升级原因细分 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>角色升级原因细分</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>升级原因</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>养成人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>升级次数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>次数占比</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>总提升等级</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>单次平均提升等级</th>
              </tr>
            </thead>
            <tbody>
              {reasonDistributionData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.reason}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.users)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.count)}</td>
                  <td style={{ fontSize: '12px' }}>{item.ratio}%</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.totalLevel)}</td>
                  <td style={{ fontSize: '12px' }}>{item.avgLevel.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CultivateMember;
