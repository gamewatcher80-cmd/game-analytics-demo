import React, { useState } from 'react';

const CultivateSnapshot = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 成员卡持有情况（昨日，card_type=1）
  const memberCardData = [
    { id: 'm-ID-1', rarity: 'SSR', name: '成员卡A', holdCount: 8500, holdRate: 6.3 },
    { id: 'm-ID-2', rarity: 'SSR', name: '成员卡B', holdCount: 7200, holdRate: 5.3 },
    { id: 'm-ID-3', rarity: 'BD', name: '成员卡C', holdCount: 15800, holdRate: 11.7 },
    { id: 'm-ID-4', rarity: 'BD', name: '成员卡D', holdCount: 18600, holdRate: 13.8 },
    { id: 'm-ID-5', rarity: 'SR', name: '成员卡E', holdCount: 32400, holdRate: 24.0 },
    { id: 'm-ID-6', rarity: 'SR', name: '成员卡F', holdCount: 41200, holdRate: 30.5 },
    { id: 'm-ID-7', rarity: 'R', name: '成员卡G', holdCount: 68500, holdRate: 50.7 },
  ];

  // 留影卡持有情况（昨日，card_type=2）
  const photoCardData = [
    { id: 'p-ID-1', rarity: 'SSR', name: '留影卡A', holdCount: 3600, holdRate: 2.7 },
    { id: 'p-ID-2', rarity: 'BD', name: '留影卡B', holdCount: 8200, holdRate: 6.1 },
    { id: 'p-ID-3', rarity: 'BD', name: '留影卡C', holdCount: 12500, holdRate: 9.3 },
    { id: 'p-ID-4', rarity: 'SR', name: '留影卡D', holdCount: 24800, holdRate: 18.4 },
    { id: 'p-ID-5', rarity: 'R', name: '留影卡E', holdCount: 38500, holdRate: 28.5 },
  ];

  // 成员卡养成情况（昨日）
  const memberCultivateData = [
    { id: 'm-ID-1', rarity: 'SSR', name: '成员卡A', lvEnhance: 5.2, specialTrain: 3.8, skillEnhance: 4.5, awaken: 2.1 },
    { id: 'm-ID-2', rarity: 'SSR', name: '成员卡B', lvEnhance: 4.8, specialTrain: 3.5, skillEnhance: 4.2, awaken: 1.9 },
    { id: 'm-ID-3', rarity: 'BD', name: '成员卡C', lvEnhance: 6.5, specialTrain: 4.2, skillEnhance: 5.1, awaken: 2.8 },
    { id: 'm-ID-4', rarity: 'BD', name: '成员卡D', lvEnhance: 7.2, specialTrain: 4.8, skillEnhance: 5.6, awaken: 3.1 },
    { id: 'm-ID-5', rarity: 'SR', name: '成员卡E', lvEnhance: 5.8, specialTrain: 3.2, skillEnhance: 4.0, awaken: 1.6 },
    { id: 'm-ID-6', rarity: 'SR', name: '成员卡F', lvEnhance: 6.2, specialTrain: 3.6, skillEnhance: 4.3, awaken: 1.8 },
    { id: 'm-ID-7', rarity: 'R', name: '成员卡G', lvEnhance: 4.5, specialTrain: 2.1, skillEnhance: 3.2, awaken: 1.2 },
  ];

  // 留影卡养成情况（昨日）
  const photoCultivateData = [
    { id: 'p-ID-1', rarity: 'SSR', name: '留影卡A', lvEnhance: 4.5, upperUnlock: 2.8 },
    { id: 'p-ID-2', rarity: 'BD', name: '留影卡B', lvEnhance: 5.2, upperUnlock: 3.2 },
    { id: 'p-ID-3', rarity: 'BD', name: '留影卡C', lvEnhance: 5.8, upperUnlock: 3.5 },
    { id: 'p-ID-4', rarity: 'SR', name: '留影卡D', lvEnhance: 4.2, upperUnlock: 2.5 },
    { id: 'p-ID-5', rarity: 'R', name: '留影卡E', lvEnhance: 3.5, upperUnlock: 2.1 },
  ];

  const getRarityColor = (rarity) => {
    const map = { SSR: '#f59e0b', BD: '#8b5cf6', SR: '#3b82f6', R: '#22c55e' };
    return map[rarity] || '#94a3b8';
  };
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
          <div style={{ color: 'var(--text-primary)', fontWeight: '600', marginBottom: '4px' }}>成员卡 (card_type = 1)</div>
          <div style={{ paddingLeft: '12px' }}>
            <div><span style={{ fontWeight: '600' }}>成员卡ID</span> - 基于 <code>card_type=1</code> 情况下的 <code>card_id</code></div>
            <div><span style={{ fontWeight: '600' }}>成员卡品质</span> - 基于 <code>card_type=1</code> 情况下的 <code>card_rarity</code></div>
            <div><span style={{ fontWeight: '600' }}>成员卡名称</span> - 基于 <code>card_type=1</code> 情况下的 <code>card_name</code></div>
            <div><span style={{ fontWeight: '600' }}>活跃用户持有数量</span> - 基于DAU持有指定成员卡用户的数量</div>
            <div><span style={{ fontWeight: '600' }}>活跃用户持有率</span> - 基于DAU持有指定成员卡用户的比例</div>
          </div>
          <div style={{ color: 'var(--text-primary)', fontWeight: '600', margin: '12px 0 4px 0' }}>留影卡 (card_type = 2)</div>
          <div style={{ paddingLeft: '12px' }}>
            <div><span style={{ fontWeight: '600' }}>留影卡ID</span> - 基于 <code>card_type=2</code> 情况下的 <code>card_id</code></div>
            <div><span style={{ fontWeight: '600' }}>留影卡品质</span> - 基于 <code>card_type=2</code> 情况下的 <code>card_rarity</code></div>
            <div><span style={{ fontWeight: '600' }}>留影卡名称</span> - 基于 <code>card_type=2</code> 情况下的 <code>card_name</code></div>
            <div><span style={{ fontWeight: '600' }}>活跃用户持有数量</span> - 基于DAU持有指定留影卡用户的数量</div>
            <div><span style={{ fontWeight: '600' }}>活跃用户持有率</span> - 基于DAU持有指定留影卡用户的比例</div>
          </div>
          <div style={{ color: 'var(--text-primary)', fontWeight: '600', margin: '12px 0 4px 0' }}>持有量计算规则</div>
          <div style={{ paddingLeft: '12px' }}>
            <div>成员卡不会持有多个相同卡片；留影卡会持有多个相同卡片</div>
            <div>计算总持有量时，存在持有多卡情况，持有量只按 +1 计算</div>
          </div>
          <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed var(--border-color)' }}>数据来源: <code>card_op_flow</code>、<code>card_flow</code>、<code>card_snapshot(card_info)</code></div>
        </div>
      </div>

      {/* 1. 成员卡持有情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>成员卡持有情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡ID</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡品质</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>活跃用户持有数量</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>活跃用户持有率</th>
              </tr>
            </thead>
            <tbody>
              {memberCardData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.id}</td>
                  <td style={{ fontSize: '12px', color: getRarityColor(item.rarity), fontWeight: '600' }}>{item.rarity}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.holdCount)}</td>
                  <td style={{ fontSize: '12px' }}>{item.holdRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. 留影卡持有情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>留影卡持有情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡ID</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡品质</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>活跃用户持有数量</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>活跃用户持有率</th>
              </tr>
            </thead>
            <tbody>
              {photoCardData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.id}</td>
                  <td style={{ fontSize: '12px', color: getRarityColor(item.rarity), fontWeight: '600' }}>{item.rarity}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.holdCount)}</td>
                  <td style={{ fontSize: '12px' }}>{item.holdRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 成员卡养成情况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>成员卡养成情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡ID</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡品质</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>成员卡名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均Lv强化</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均特训</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均技能Lv强化</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均觉醒</th>
              </tr>
            </thead>
            <tbody>
              {memberCultivateData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.id}</td>
                  <td style={{ fontSize: '12px', color: getRarityColor(item.rarity), fontWeight: '600' }}>{item.rarity}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{item.lvEnhance.toFixed(1)}</td>
                  <td style={{ fontSize: '12px' }}>{item.specialTrain.toFixed(1)}</td>
                  <td style={{ fontSize: '12px' }}>{item.skillEnhance.toFixed(1)}</td>
                  <td style={{ fontSize: '12px' }}>{item.awaken.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. 留影卡养成情况 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>留影卡养成情况</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡ID</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡品质</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>留影卡名称</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均Lv强化</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均上限解锁</th>
              </tr>
            </thead>
            <tbody>
              {photoCultivateData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.id}</td>
                  <td style={{ fontSize: '12px', color: getRarityColor(item.rarity), fontWeight: '600' }}>{item.rarity}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{item.lvEnhance.toFixed(1)}</td>
                  <td style={{ fontSize: '12px' }}>{item.upperUnlock.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CultivateSnapshot;
