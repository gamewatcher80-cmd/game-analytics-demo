import React, { useState } from 'react';

const CultivateSnapshot = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 成员卡持有情况（昨日，card_type=1）
  const memberCardData = [
    { id: 'ID-1', rarity: '★★★★', name: 'ID-1', holdCount: 38500, holdRate: 28.5 },
    { id: 'ID-2', rarity: '★★★★', name: 'ID-2', holdCount: 32200, holdRate: 23.8 },
    { id: 'ID-3', rarity: '★★★', name: 'ID-3', holdCount: 45800, holdRate: 33.9 },
    { id: 'ID-4', rarity: '★★★', name: 'ID-4', holdCount: 28600, holdRate: 21.2 },
    { id: 'ID-5', rarity: '★★', name: 'ID-5', holdCount: 52400, holdRate: 38.8 },
    { id: 'ID-6', rarity: '★★', name: 'ID-6', holdCount: 41200, holdRate: 30.5 },
    { id: 'ID-7', rarity: '★', name: 'ID-7', holdCount: 68500, holdRate: 50.7 },
  ];

  // 留影卡持有情况（昨日，card_type=2）
  const photoCardData = [
    { id: 'ID-1', rarity: '★★★★', name: 'ID-1', holdCount: 18600, holdRate: 13.8 },
    { id: 'ID-2', rarity: '★★★★', name: 'ID-2', holdCount: 15200, holdRate: 11.3 },
    { id: 'ID-3', rarity: '★★★', name: 'ID-3', holdCount: 24800, holdRate: 18.4 },
    { id: 'ID-4', rarity: '★★★', name: 'ID-4', holdCount: 12500, holdRate: 9.3 },
    { id: 'ID-5', rarity: '★★', name: 'ID-5', holdCount: 28500, holdRate: 21.1 },
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
                  <td style={{ fontSize: '12px', color: '#f59e0b' }}>{item.rarity}</td>
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
                  <td style={{ fontSize: '12px', color: '#f59e0b' }}>{item.rarity}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.holdCount)}</td>
                  <td style={{ fontSize: '12px' }}>{item.holdRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. 成员卡养成情况（占位） */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>成员卡养成情况</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          color: 'var(--text-secondary)',
          fontSize: '13px',
          background: 'var(--bg-primary)',
          borderRadius: '8px',
          minHeight: '120px'
        }}>
          📋 等待用户确认展现形式后再补充表格内容
        </div>
      </div>

      {/* 4. 留影卡养成情况（占位） */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>留影卡养成情况</h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          color: 'var(--text-secondary)',
          fontSize: '13px',
          background: 'var(--bg-primary)',
          borderRadius: '8px',
          minHeight: '120px'
        }}>
          📋 等待用户确认展现形式后再补充表格内容
        </div>
      </div>
    </div>
  );
};

export default CultivateSnapshot;
