import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList, Tooltip } from 'recharts';

const COLORS = ['#c7d2fe', '#a5b4fc', '#818cf8', '#6366f1', '#4f46e5', '#4338ca', '#3730a3'];
const CHART_COLORS = ['#818cf8', '#6366f1', '#4f46e5'];

const PaymentRecharge = ({ currentRegion }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    endDate: new Date().toISOString().split('T')[0]
  });

  // 商品销售明细
  const productSales = [
    { date: '2026-04-19', productName: '月卡(30元)', productId: 'P001', buyers: 4500, totalSales: 135000, iosSales: 81000, androidSales: 40500, androidOfficialSales: 9000, webSales: 4500 },
    { date: '2026-04-19', productName: '月卡(68元)', productId: 'P002', buyers: 3200, totalSales: 217600, iosSales: 130560, androidSales: 65280, androidOfficialSales: 13056, webSales: 8704 },
    { date: '2026-04-19', productName: '首充礼包', productId: 'P003', buyers: 8500, totalSales: 127500, iosSales: 76500, androidSales: 38250, androidOfficialSales: 8500, webSales: 4250 },
    { date: '2026-04-18', productName: '648钻石', productId: 'P004', buyers: 12000, totalSales: 777600, iosSales: 466560, androidSales: 233280, androidOfficialSales: 46656, webSales: 31104 },
    { date: '2026-04-18', productName: '328钻石', productId: 'P005', buyers: 8500, totalSales: 278800, iosSales: 167280, androidSales: 83640, androidOfficialSales: 16728, webSales: 11152 },
    { date: '2026-04-17', productName: '98钻石', productId: 'P006', buyers: 18000, totalSales: 176400, iosSales: 105840, androidSales: 52920, androidOfficialSales: 10584, webSales: 7056 },
    { date: '2026-04-17', productName: '30钻石', productId: 'P007', buyers: 45000, totalSales: 135000, iosSales: 81000, androidSales: 40500, androidOfficialSales: 9000, webSales: 4500 },
  ];

  // 付费用户分层数据
  const userTypeDist = [
    { name: '1~100元', value: 35, count: 5530, revenue: 320740 },
    { name: '101~500元', value: 28, count: 4424, revenue: 1260840 },
    { name: '501~1000元', value: 15, count: 2370, revenue: 1706400 },
    { name: '1001~3000元', value: 12, count: 1896, revenue: 3507600 },
    { name: '3001~10000元', value: 6, count: 948, revenue: 5498400 },
    { name: '10001~20000元', value: 3, count: 474, revenue: 6873000 },
    { name: '20000元以上', value: 1, count: 158, revenue: 5530000 },
  ];

  const userGroups = [
    { id: 1, name: '1~100元', count: 5530, revenue: 320740, avgSpend: 58 },
    { id: 2, name: '101~500元', count: 4424, revenue: 1260840, avgSpend: 285 },
    { id: 3, name: '501~1000元', count: 2370, revenue: 1706400, avgSpend: 720 },
    { id: 4, name: '1001~3000元', count: 1896, revenue: 3507600, avgSpend: 1850 },
    { id: 5, name: '3001~10000元', count: 948, revenue: 5498400, avgSpend: 5800 },
    { id: 6, name: '10001~20000元', count: 474, revenue: 6873000, avgSpend: 14500 },
    { id: 7, name: '20000元以上', count: 158, revenue: 5530000, avgSpend: 35000 },
  ];

  // 首充购买商品数据
  const firstPurchaseData = [
    { product: '首充礼包', count: 8500 },
    { product: '月卡(30元)', count: 2800 },
    { product: '月卡(68元)', count: 1850 },
    { product: '98钻石', count: 1200 },
    { product: '328钻石', count: 850 },
    { product: '648钻石', count: 520 },
    { product: '30钻石', count: 380 },
  ];

  // 各等级段付费用户人均充值额数据
  const levelArppuData = [
    { level: '1-10级', arppu: 45 },
    { level: '11-20级', arppu: 128 },
    { level: '21-30级', arppu: 285 },
    { level: '31-40级', arppu: 456 },
    { level: '41-50级', arppu: 680 },
    { level: '51-60级', arppu: 920 },
    { level: '61-70级', arppu: 1250 },
    { level: '71-80级', arppu: 1680 },
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

      {/* 商品销售明细数据 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>商品销售明细数据</h3>
        <div style={{ overflowX: 'auto' }}>
          <table>
            <thead>
              <tr>
                <th>日期</th>
                <th>商品名字</th>
                <th>商品ID</th>
                <th>购买人数</th>
                <th>总销量</th>
                <th>iOS销量</th>
                <th>Android销量</th>
                <th>Android官方包销量</th>
                <th>WEB商城</th>
              </tr>
            </thead>
            <tbody>
              {productSales.map((item, index) => (
                <tr key={index}>
                  <td>{item.date}</td>
                  <td>{item.productName}</td>
                  <td>{item.productId}</td>
                  <td>{item.buyers.toLocaleString()}</td>
                  <td>{item.totalSales.toLocaleString()}</td>
                  <td>{item.iosSales.toLocaleString()}</td>
                  <td>{item.androidSales.toLocaleString()}</td>
                  <td>{item.androidOfficialSales.toLocaleString()}</td>
                  <td>{item.webSales.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 首充购买商品 & 各等级段付费用户人均充值额 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '20px' }}>
        {/* 首充购买商品 */}
        <div className="card">
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>首充购买商品</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>查询区间内，首次充值购买商品的累计数量</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={firstPurchaseData} margin={{ top: 5, right: 20, left: 10, bottom: 25 }}>
              <XAxis dataKey="product" tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} angle={-20} textAnchor="end" />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '12px' }}
                formatter={(value) => [value.toLocaleString(), '购买人数']}
              />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {firstPurchaseData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* 各等级段付费用户人均充值额 */}
        <div className="card">
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>各等级段付费用户人均充值额</h3>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '12px' }}>查询区间内，各等级段付费用户人均充值额对比情况</p>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={levelArppuData} margin={{ top: 5, right: 20, left: 10, bottom: 25 }}>
              <XAxis dataKey="level" tick={{ fontSize: 10, fill: 'var(--text-secondary)' }} angle={-20} textAnchor="end" />
              <YAxis tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <Tooltip 
                contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '12px' }}
                formatter={(value) => [`¥${value}`, '人均充值额']}
              />
              <Bar dataKey="arppu" radius={[4, 4, 0, 0]}>
                {levelArppuData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={CHART_COLORS[index % CHART_COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 付费用户分层分布 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>付费用户分层分布</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', alignItems: 'center' }}>
          {/* 横向条形图 */}
          <ResponsiveContainer width="100%" height={280}>
            <BarChart 
              data={userTypeDist} 
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              <YAxis 
                type="category" 
                dataKey="name" 
                tick={{ fontSize: 11, fill: 'var(--text-secondary)' }}
                width={80}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {userTypeDist.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                <LabelList dataKey="value" position="right" formatter={(val) => `${val}%`} tick={{ fontSize: 11, fill: 'var(--text-secondary)' }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          {/* 右侧数据列表 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', paddingBottom: '8px', borderBottom: '1px solid var(--border-color)', fontSize: '11px', color: 'var(--text-secondary)', fontWeight: '500' }}>
              <span>金额区间</span>
              <span style={{ textAlign: 'right' }}>用户数</span>
              <span style={{ textAlign: 'right' }}>占比</span>
            </div>
            {userTypeDist.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', padding: '6px 0', fontSize: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: COLORS[i], flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                </div>
                <span style={{ textAlign: 'right', color: 'var(--text-primary)', fontWeight: '500' }}>{item.count.toLocaleString()}</span>
                <span style={{ textAlign: 'right', color: 'var(--text-secondary)' }}>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 付费层级详情 */}
      <div className="card">
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>付费层级详情</h3>
        <table style={{ width: '100%', fontSize: '13px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
              <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>累计充值金额区间</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>用户数</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>充值额</th>
              <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontWeight: '500' }}>平均充值额</th>
            </tr>
          </thead>
          <tbody>
            {userGroups.map((group) => (
              <tr key={group.id} style={{ borderBottom: '1px solid var(--border-color)', cursor: 'pointer' }}
                onMouseEnter={(e) => e.target.closest('tr').style.background = 'var(--primary-light)'}
                onMouseLeave={(e) => e.target.closest('tr').style.background = 'transparent'}
              >
                <td style={{ padding: '12px', color: 'var(--text-primary)' }}>{group.name}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>{group.count.toLocaleString()}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>¥{group.revenue.toLocaleString()}</td>
                <td style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)' }}>¥{group.avgSpend.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentRecharge;