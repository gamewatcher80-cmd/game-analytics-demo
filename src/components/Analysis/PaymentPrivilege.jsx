import React, { useState } from 'react';

const PaymentPrivilege = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 特权卡购买明细数据
  const purchaseData = [
    { date: '2026-04-19', total: 158200, monthlyCard: 47400, pass: 32600, buff1: 28500, buff2: 18500, buff3: 12800, buff4: 9200, buff5: 5200, anonTokyo: 4000 },
    { date: '2026-04-18', total: 145600, monthlyCard: 43680, pass: 30120, buff1: 26280, buff2: 17080, buff3: 11840, buff4: 8520, buff5: 4800, anonTokyo: 3280 },
    { date: '2026-04-17', total: 138900, monthlyCard: 41670, pass: 28650, buff1: 25020, buff2: 16275, buff3: 11250, buff4: 8100, buff5: 4500, anonTokyo: 3435 },
    { date: '2026-04-16', total: 152400, monthlyCard: 45720, pass: 31360, buff1: 27420, buff2: 17920, buff3: 12400, buff4: 8880, buff5: 5040, anonTokyo: 3560 },
    { date: '2026-04-15', total: 141200, monthlyCard: 42360, pass: 29080, buff1: 25420, buff2: 16580, buff3: 11480, buff4: 8260, buff5: 4620, anonTokyo: 3400 },
  ];

  // 特权卡订阅&续期明细数据
  const subscriptionDetailData = [
    { date: '2026-04-19', cardType: '月卡', currentSubs: 15800, newSubs: 3300, prevRenewal: 12500, renewalRate: 79.1 },
    { date: '2026-04-19', cardType: '通行证', currentSubs: 8200, newSubs: 1500, prevRenewal: 6700, renewalRate: 81.7 },
    { date: '2026-04-19', cardType: '乐队buff卡1', currentSubs: 5600, newSubs: 1200, prevRenewal: 4400, renewalRate: 78.6 },
    { date: '2026-04-19', cardType: '乐队buff卡2', currentSubs: 4200, newSubs: 850, prevRenewal: 3350, renewalRate: 79.8 },
    { date: '2026-04-19', cardType: '乐队buff卡3', currentSubs: 3100, newSubs: 620, prevRenewal: 2480, renewalRate: 80.0 },
    { date: '2026-04-19', cardType: '乐队buff卡4', currentSubs: 2200, newSubs: 450, prevRenewal: 1750, renewalRate: 79.5 },
    { date: '2026-04-19', cardType: '乐队buff卡5', currentSubs: 1500, newSubs: 280, prevRenewal: 1220, renewalRate: 81.3 },
    { date: '2026-04-19', cardType: '特权卡X', currentSubs: 950, newSubs: 180, prevRenewal: 770, renewalRate: 81.1 },
    { date: '2026-04-18', cardType: '月卡', currentSubs: 15500, newSubs: 3200, prevRenewal: 12300, renewalRate: 79.4 },
    { date: '2026-04-18', cardType: '通行证', currentSubs: 8100, newSubs: 1450, prevRenewal: 6650, renewalRate: 82.1 },
  ];

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'flex-end' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始时间</label>
            <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({...dateRange, startDate: e.target.value})} style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束时间</label>
            <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({...dateRange, endDate: e.target.value})} style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>服务器</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部服务器</option>
              <option value="en">英文地区</option>
              <option value="kr">韩国</option>
              <option value="tw">港澳台</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>终端</label>
            <select defaultValue="all" style={{ width: '160px', height: '36px', boxSizing: 'border-box', padding: '0 8px', fontSize: '13px' }}>
              <option value="all">全部终端</option>
              <option value="ios">iOS</option>
              <option value="android">安卓</option>
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
              <option value="valid_no_bot">有效+去黑产</option>
              <option value="valid_no_water">有效+去水</option>
              <option value="no_bot_no_water">去黑产+去水</option>
            </select>
          </div>
        </div>
      </div>

      {/* 特权卡购买明细数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>特权卡购买明细数据</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '12px' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px' }}>日期</th>
                <th style={{ padding: '8px 6px' }}>总计充值</th>
                <th style={{ padding: '8px 6px' }}>月卡-充值</th>
                <th style={{ padding: '8px 6px' }}>通行证-充值</th>
                <th style={{ padding: '8px 6px' }}>乐队buff卡1</th>
                <th style={{ padding: '8px 6px' }}>乐队buff卡2</th>
                <th style={{ padding: '8px 6px' }}>乐队buff卡3</th>
                <th style={{ padding: '8px 6px' }}>乐队buff卡4</th>
                <th style={{ padding: '8px 6px' }}>乐队buff卡5</th>
                <th style={{ padding: '8px 6px' }}>特权卡X</th>
              </tr>
            </thead>
            <tbody>
              {purchaseData.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '6px' }}>{item.date}</td>
                  <td style={{ padding: '6px' }}>{item.total.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.monthlyCard.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.pass.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.buff1.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.buff2.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.buff3.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.buff4.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.buff5.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.anonTokyo.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 特权卡订阅&续期明细数据 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>特权卡订阅&续期明细数据</h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ fontSize: '12px' }}>
            <thead>
              <tr>
                <th style={{ padding: '8px 6px' }}>日期</th>
                <th style={{ padding: '8px 6px' }}>特权卡类型</th>
                <th style={{ padding: '8px 6px' }}>当前订阅人数</th>
                <th style={{ padding: '8px 6px' }}>本期新增订阅</th>
                <th style={{ padding: '8px 6px' }}>上期续费人数</th>
                <th style={{ padding: '8px 6px' }}>续费率</th>
              </tr>
            </thead>
            <tbody>
              {subscriptionDetailData.map((item, index) => (
                <tr key={index}>
                  <td style={{ padding: '6px' }}>{item.date}</td>
                  <td style={{ padding: '6px' }}>{item.cardType}</td>
                  <td style={{ padding: '6px' }}>{item.currentSubs.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.newSubs.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.prevRenewal.toLocaleString()}</td>
                  <td style={{ padding: '6px' }}>{item.renewalRate}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default PaymentPrivilege;
