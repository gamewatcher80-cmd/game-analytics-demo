import React, { useState } from 'react';

const ATMission = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 任务类型
  const missionTypes = ['主线任务', '支线任务', '日常任务', '活动任务', '成就任务', '周常任务'];

  // 生成任务明细数据
  const generateMissionData = () => {
    return Array.from({ length: 50 }, (_, i) => {
      const id = String(i + 1).padStart(3, '0');
      const typeIndex = i % 6;
      const userCount = Math.floor(2000 + Math.random() * 15000);
      return {
        id,
        name: `任务${id}`,
        type: missionTypes[typeIndex],
        userCount,
        completeCount: Math.floor(userCount * (1.1 + Math.random() * 1.5)),
      };
    });
  };

  const missionData = generateMissionData();

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

      {/* 任务明细 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>任务明细</h3>
        <div style={{ overflow: 'auto', maxHeight: '600px' }}>
          <table>
            <thead>
              <tr>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>任务ID</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>任务名</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>任务类型</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>完成人数</th>
                <th style={{ fontSize: '12px', position: 'sticky', top: 0, background: 'var(--bg-card)', zIndex: 1 }}>完成次数</th>
              </tr>
            </thead>
            <tbody>
              {missionData.map((item, index) => (
                <tr key={index}>
                  <td style={{ fontSize: '12px' }}>{item.id}</td>
                  <td style={{ fontSize: '12px' }}>{item.name}</td>
                  <td style={{ fontSize: '12px' }}>{item.type}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.userCount)}</td>
                  <td style={{ fontSize: '12px' }}>{formatNum(item.completeCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ATMission;
