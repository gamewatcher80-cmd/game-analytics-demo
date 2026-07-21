import React, { useState } from 'react';

const PerformancePlay = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 自由演出(单人) 按天汇总的30日数据（所有曲目总计，stage_type = 1）
  const generateFreePlayData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const factor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.1;
      return {
        date: `${date.getMonth() + 1}月${date.getDate()}日`,
        users: Math.floor((50000 + Math.random() * 8000) * factor),
        rate: ((12 + Math.random() * 6) * factor).toFixed(1),
        gamesPerUser: (2.2 + Math.random() * 0.5).toFixed(1),
        avgDuration: Math.floor((140 + Math.random() * 25) * factor),
        fullCombo: (28 + Math.random() * 8).toFixed(1),
        fullPerfect: (15 + Math.random() * 6).toFixed(1),
      };
    });
  };

  // 激奏演出(多人) 按天汇总的30日数据（所有曲目总计，stage_type = 4）
  const generateHardPlayData = () => {
    return Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      const factor = 1 + Math.sin((i / 30) * Math.PI * 2) * 0.1;
      return {
        date: `${date.getMonth() + 1}月${date.getDate()}日`,
        users: Math.floor((35000 + Math.random() * 6000) * factor),
        rate: ((7 + Math.random() * 4) * factor).toFixed(1),
        gamesPerUser: (1.2 + Math.random() * 0.3).toFixed(1),
        avgDuration: Math.floor((130 + Math.random() * 30) * factor),
        fullCombo: (18 + Math.random() * 7).toFixed(1),
        fullPerfect: (9 + Math.random() * 4).toFixed(1),
      };
    });
  };

  const freePlayData = generateFreePlayData();
  const hardPlayData = generateHardPlayData();

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
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          自由演出-单人 <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '400' }}>(stage_type = 1)</span>
        </h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>日期</th>
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
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
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
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>
          激奏演出-多人 <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '400' }}>(stage_type = 4)</span>
        </h3>
        <div style={{ overflow: 'auto', maxHeight: '500px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>日期</th>
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
                  <td style={{ fontSize: '12px' }}>{item.date}</td>
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
