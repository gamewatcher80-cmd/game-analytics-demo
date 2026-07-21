import React, { useState } from 'react';

const PerformancePlay = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 自由演出(单人) 按 stage_id 分组的昨日数据
  const freePlayData = [
    { stage: '曲目1', users: 18500, rate: 14.8, gamesPerUser: 2.6, avgDuration: 145, fullCombo: 32.5, fullPerfect: 18.3 },
    { stage: '曲目2', users: 16200, rate: 12.9, gamesPerUser: 2.4, avgDuration: 138, fullCombo: 35.2, fullPerfect: 20.1 },
    { stage: '曲目3', users: 14800, rate: 11.8, gamesPerUser: 2.3, avgDuration: 152, fullCombo: 28.7, fullPerfect: 15.6 },
    { stage: '曲目4', users: 12500, rate: 9.9, gamesPerUser: 2.1, avgDuration: 165, fullCombo: 25.3, fullPerfect: 12.8 },
    { stage: '曲目5', users: 9800, rate: 7.8, gamesPerUser: 1.9, avgDuration: 178, fullCombo: 22.1, fullPerfect: 10.5 },
    { stage: '曲目6', users: 7200, rate: 5.7, gamesPerUser: 1.7, avgDuration: 192, fullCombo: 18.6, fullPerfect: 8.4 },
  ];

  // 激奏演出(多人) 按 stage_id 分组的昨日数据
  const hardPlayData = [
    { stage: '曲目1', users: 9800, rate: 7.8, gamesPerUser: 1.5, avgDuration: 125, fullCombo: 25.3, fullPerfect: 12.6 },
    { stage: '曲目2', users: 8500, rate: 6.8, gamesPerUser: 1.4, avgDuration: 132, fullCombo: 22.1, fullPerfect: 10.8 },
    { stage: '曲目3', users: 7200, rate: 5.7, gamesPerUser: 1.3, avgDuration: 142, fullCombo: 19.8, fullPerfect: 9.2 },
    { stage: '曲目4', users: 5800, rate: 4.6, gamesPerUser: 1.2, avgDuration: 156, fullCombo: 16.5, fullPerfect: 7.8 },
    { stage: '曲目5', users: 4500, rate: 3.6, gamesPerUser: 1.1, avgDuration: 168, fullCombo: 14.2, fullPerfect: 6.1 },
    { stage: '曲目6', users: 3200, rate: 2.5, gamesPerUser: 1.0, avgDuration: 185, fullCombo: 11.8, fullPerfect: 4.9 },
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
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>参与人数</span> - 每日自由演出参与角色去重后总数 / 每日激奏演出参与角色去重后总数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>参与率</span> - 每日自由演出参与人数 ÷ 当日DAU / 每日激奏演出参与人数 ÷ 当日DAU</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>人均局数</span> - 当日自由演出玩家局数 ÷ 当日自由演出参与人数 / 当日激奏玩家局数 ÷ 当日激奏参与人数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>平均时长</span> - 自由演出stage_time总和 ÷ 当日自由演出完成局数 / 激奏演出stage_time总和 ÷ 当日激奏演出完成局数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>全连击</span> - 当日自由演出全连击局数 ÷ 当日自由演出完成局数 / 当日激奏演出全连击局数 ÷ 当日激奏演出完成局数</div>
          <div><span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>全Perfect</span> - 当日自由演出全Perfect有效局数 ÷ 当日自由演出完成局数 / 当日激奏演出全Perfect有效局数 ÷ 当日激奏演出完成局数</div>
          <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px dashed var(--border-color)' }}>数据来源: <code>stage_flow</code> 表，曲目名 = <code>stage_id</code>，曲目挑战类型 = <code>stage_type</code></div>
        </div>
      </div>

      {/* 1. 自由演出(单人) */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>自由演出(单人)</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>曲目 (stage_id)</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>参与人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>参与率</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>人均局数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均时长(秒)</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>全连击率</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>全Perfect率</th>
              </tr>
            </thead>
            <tbody>
              {freePlayData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.stage}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.users)}</td>
                  <td style={{ fontSize: '12px' }}>{item.rate}%</td>
                  <td style={{ fontSize: '12px' }}>{item.gamesPerUser}</td>
                  <td style={{ fontSize: '12px' }}>{item.avgDuration}</td>
                  <td style={{ fontSize: '12px' }}>{item.fullCombo}%</td>
                  <td style={{ fontSize: '12px' }}>{item.fullPerfect}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. 激奏演出(多人) */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>激奏演出(多人)</h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>曲目 (stage_id)</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>参与人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>参与率</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>人均局数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>平均时长(秒)</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>全连击率</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>全Perfect率</th>
              </tr>
            </thead>
            <tbody>
              {hardPlayData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.stage}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.users)}</td>
                  <td style={{ fontSize: '12px' }}>{item.rate}%</td>
                  <td style={{ fontSize: '12px' }}>{item.gamesPerUser}</td>
                  <td style={{ fontSize: '12px' }}>{item.avgDuration}</td>
                  <td style={{ fontSize: '12px' }}>{item.fullCombo}%</td>
                  <td style={{ fontSize: '12px' }}>{item.fullPerfect}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PerformancePlay;
