import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { gachaData } from '../../data/mockData';

const COLORS = ['#00d4ff', '#00c853', '#ffc107', '#ff5252', '#9c27b0'];

const GachaAnalysis = () => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  const customTooltipStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border-color)',
    borderRadius: '8px',
    padding: '12px'
  };

  // 抽卡数据概况
  const gachaOverviewData = [
    { date: '2026/4/16', players: 18500, totalPulls: 456000, avgPulls: 24.6, dailyReset: 8200, singleFree: 125000, multiFree: 68000, singlePaid: 95000, multiPaid: 85800 },
    { date: '2026/4/15', players: 17200, totalPulls: 412000, avgPulls: 23.9, dailyReset: 7800, singleFree: 118000, multiFree: 62000, singlePaid: 88000, multiPaid: 84000 },
    { date: '2026/4/14', players: 16800, totalPulls: 398000, avgPulls: 23.7, dailyReset: 7500, singleFree: 112000, multiFree: 58000, singlePaid: 85000, multiPaid: 83000 },
    { date: '2026/4/13', players: 15900, totalPulls: 375000, avgPulls: 23.6, dailyReset: 7100, singleFree: 105000, multiFree: 54000, singlePaid: 81000, multiPaid: 80000 },
    { date: '2026/4/12', players: 18200, totalPulls: 442000, avgPulls: 24.3, dailyReset: 8000, singleFree: 122000, multiFree: 66000, singlePaid: 93000, multiPaid: 84000 },
    { date: '2026/4/11', players: 16500, totalPulls: 389000, avgPulls: 23.6, dailyReset: 7200, singleFree: 108000, multiFree: 56000, singlePaid: 84000, multiPaid: 81000 },
    { date: '2026/4/10', players: 17100, totalPulls: 405000, avgPulls: 23.7, dailyReset: 7600, singleFree: 115000, multiFree: 60000, singlePaid: 87000, multiPaid: 83000 },
  ];

  // 卡池收入对比表格
  const poolRevenueTableData = [
    { startDate: '2026-04-01', poolName: '卡池1', poolType: '角色卡', duration: '14天', players: 28000, dailyReset: 125000, singleFree: 1850000, multiFree: 950000, singlePaid: 1420000, multiPaid: 1280000, totalDiamoinds: 285000000 },
    { startDate: '2026-03-15', poolName: '卡池2', poolType: '角色卡', duration: '14天', players: 25200, dailyReset: 108000, singleFree: 1620000, multiFree: 820000, singlePaid: 1250000, multiPaid: 1120000, totalDiamoinds: 252000000 },
    { startDate: '2026-03-01', poolName: '卡池3', poolType: '效果卡', duration: '14天', players: 24500, dailyReset: 102000, singleFree: 1550000, multiFree: 780000, singlePaid: 1180000, multiPaid: 1050000, totalDiamoinds: 238000000 },
    { startDate: '2026-02-15', poolName: '卡池4', poolType: '效果卡', duration: '14天', players: 23800, dailyReset: 98000, singleFree: 1480000, multiFree: 750000, singlePaid: 1120000, multiPaid: 980000, totalDiamoinds: 225000000 },
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
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>账号类型</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部</option>
              <option value="valid">有效</option>
              <option value="no_bot">去黑产</option>
              <option value="no_water">去水</option>
              <option value="valid_no_bot">有效+去黑产</option>
              <option value="valid_no_water">有效+去水</option>
              <option value="no_bot_no_water">去黑产+去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 抽卡数据概况 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>抽卡数据概况</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>抽卡参与玩家数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>抽卡次数(免费+付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>人均抽卡次数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>单次抽取(每日重置1次付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>单抽次数(免费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>十连抽次数(免费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>单抽次数(付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>十连抽次数(付费)</th>
              </tr>
            </thead>
            <tbody>
              {gachaOverviewData.map((row, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.players.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.totalPulls.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.avgPulls}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.dailyReset.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.singleFree.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.multiFree.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.singlePaid.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.multiPaid.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 卡池收入对比表格 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>卡池收入对比</h3>
        {/* 柱状图 */}
        <ResponsiveContainer width="100%" height={200} style={{ marginBottom: '16px' }}>
          <BarChart data={poolRevenueTableData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="startDate" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
            <Tooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '11px' }}
              formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="totalDiamoinds" name="总消耗晶石数" fill="#4f46e5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ background: 'var(--bg-secondary)' }}>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池开始时间</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池名称</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池类型</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池持续时间</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>参与卡池抽卡玩家数</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池单抽次数(每日重置1次付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池单抽次数(免费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池十连抽(免费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池单抽次数(付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池十连抽(付费)</th>
                <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>卡池抽卡总消耗晶石数</th>
              </tr>
            </thead>
            <tbody>
              {poolRevenueTableData.map((row, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.startDate}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.poolName}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.poolType}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.duration}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.players.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.dailyReset.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.singleFree.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.multiFree.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.singlePaid.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.multiPaid.toLocaleString()}</td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.totalDiamoinds.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GachaAnalysis;
