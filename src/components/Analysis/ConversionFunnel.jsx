import React, { useState } from 'react';

const ConversionFunnel = ({ currentRegion }) => {
  const [funnelType, setFunnelType] = useState('before');

  // 模拟转化漏斗数据
  const beforeFunnel = [
    { stage: '安装成功 (确认是否可埋点)', count: 72000, rate: '100%' },
    { stage: 'APP启动加载loading (确认是否可埋点)', count: 58000, rate: '80.6%', drop: '19.4%' },
    { stage: '注册', count: 45000, rate: '77.6%', drop: '22.4%' },
    { stage: '登录', count: 40000, rate: '88.9%', drop: '11.1%' },
    { stage: '待补充事件1', count: 36000, rate: '90.0%', drop: '10.0%' },
    { stage: '创角', count: 32000, rate: '88.9%', drop: '11.1%' },
    { stage: '新手任务初始化', count: 28000, rate: '87.5%', drop: '12.5%' },
    { stage: '新手任务-完成第1个分支任务', count: 22000, rate: '78.6%', drop: '21.4%' },
    { stage: '新手任务-全部完成', count: 18000, rate: '81.8%', drop: '18.2%' },
    { stage: '首次充值', count: 8500, rate: '47.2%', drop: '52.8%' },
    { stage: '复购', count: 5200, rate: '61.2%', drop: '38.8%' },
  ];

  const funnel1 = [
    { stage: '待补充漏斗1事件1', count: 50000, rate: '100%' },
    { stage: '待补充漏斗1事件2', count: 40000, rate: '80.0%', drop: '20.0%' },
    { stage: '待补充漏斗1事件3', count: 30000, rate: '75.0%', drop: '25.0%' },
    { stage: '待补充漏斗1事件4', count: 22000, rate: '73.3%', drop: '26.7%' },
    { stage: '待补充漏斗1事件5', count: 15000, rate: '68.2%', drop: '31.8%' },
  ];

  // 新手引导任务转化漏斗
  const newbieGuide = [
    { stage: '进入新手引导', count: 45000, rate: '100%' },
    { stage: '完成引导步骤1', count: 38000, rate: '84.4%', drop: '15.6%' },
    { stage: '完成引导步骤2', count: 32000, rate: '84.2%', drop: '15.8%' },
    { stage: '完成引导步骤3', count: 27000, rate: '84.4%', drop: '15.6%' },
    { stage: '完成新手引导', count: 22000, rate: '81.5%', drop: '18.5%' },
  ];

  const funnel2 = [
    { stage: '待补充漏斗2事件1', count: 80000, rate: '100%' },
    { stage: '待补充漏斗2事件2', count: 60000, rate: '75.0%', drop: '25.0%' },
    { stage: '待补充漏斗2事件3', count: 45000, rate: '75.0%', drop: '25.0%' },
    { stage: '待补充漏斗2事件4', count: 32000, rate: '71.1%', drop: '28.9%' },
    { stage: '待补充漏斗2事件5', count: 25000, rate: '78.1%', drop: '21.9%' },
  ];

  const funnelData = funnelType === 'before' ? beforeFunnel : funnelType === 'newbie-guide' ? newbieGuide : funnelType === 'funnel1' ? funnel1 : funnel2;

  // 游戏进入流程转化漏斗 - 日期数据表格
  const conversionTableData = [
    { date: '2026/4/16', newInstall: 72000, install: '100.0%', loading: '80.6%', register: '77.6%', login: '88.9%', event1: '90.0%', createChar: '88.9%', taskInit: '87.5%', taskBranch: '78.6%', taskComplete: '81.8%', firstPay: '47.2%', repeatBuy: '61.2%' },
    { date: '2026/4/15', newInstall: 68000, install: '100.0%', loading: '79.8%', register: '76.2%', login: '89.2%', event1: '88.5%', createChar: '87.1%', taskInit: '86.3%', taskBranch: '77.4%', taskComplete: '80.5%', firstPay: '46.5%', repeatBuy: '60.3%' },
    { date: '2026/4/14', newInstall: 75000, install: '100.0%', loading: '81.2%', register: '78.1%', login: '87.6%', event1: '91.2%', createChar: '89.5%', taskInit: '88.0%', taskBranch: '79.2%', taskComplete: '82.1%', firstPay: '48.0%', repeatBuy: '62.1%' },
    { date: '2026/4/13', newInstall: 65000, install: '100.0%', loading: '78.5%', register: '75.8%', login: '88.0%', event1: '89.0%', createChar: '86.8%', taskInit: '85.5%', taskBranch: '76.8%', taskComplete: '79.6%', firstPay: '45.8%', repeatBuy: '59.7%' },
    { date: '2026/4/12', newInstall: 82000, install: '100.0%', loading: '82.1%', register: '79.5%', login: '90.3%', event1: '92.1%', createChar: '90.2%', taskInit: '89.1%', taskBranch: '80.5%', taskComplete: '83.2%', firstPay: '48.5%', repeatBuy: '63.0%' },
    { date: '2026/4/11', newInstall: 71000, install: '100.0%', loading: '80.3%', register: '77.0%', login: '88.5%', event1: '89.8%', createChar: '88.3%', taskInit: '87.0%', taskBranch: '78.0%', taskComplete: '81.0%', firstPay: '47.0%', repeatBuy: '61.0%' },
    { date: '2026/4/10', newInstall: 69000, install: '100.0%', loading: '79.5%', register: '76.5%', login: '87.8%', event1: '88.2%', createChar: '87.5%', taskInit: '86.2%', taskBranch: '77.2%', taskComplete: '80.3%', firstPay: '46.7%', repeatBuy: '60.5%' },
  ];

  // 新手引导任务转化漏斗 - 日期数据表格
  const newbieGuideTableData = [
    { date: '2026/4/16', newUsers: 45000, guideStart: '100.0%', guideStep1: '84.4%', guideStep2: '84.2%', guideStep3: '84.4%', guideComplete: '81.5%' },
    { date: '2026/4/15', newUsers: 42000, guideStart: '100.0%', guideStep1: '83.8%', guideStep2: '83.5%', guideStep3: '84.0%', guideComplete: '80.8%' },
    { date: '2026/4/14', newUsers: 48000, guideStart: '100.0%', guideStep1: '85.2%', guideStep2: '84.8%', guideStep3: '85.0%', guideComplete: '82.3%' },
    { date: '2026/4/13', newUsers: 39000, guideStart: '100.0%', guideStep1: '82.5%', guideStep2: '83.0%', guideStep3: '82.8%', guideComplete: '79.5%' },
    { date: '2026/4/12', newUsers: 51000, guideStart: '100.0%', guideStep1: '86.0%', guideStep2: '85.5%', guideStep3: '85.8%', guideComplete: '83.0%' },
    { date: '2026/4/11', newUsers: 44000, guideStart: '100.0%', guideStep1: '84.0%', guideStep2: '83.8%', guideStep3: '84.2%', guideComplete: '81.0%' },
    { date: '2026/4/10', newUsers: 41000, guideStart: '100.0%', guideStep1: '83.5%', guideStep2: '83.2%', guideStep3: '83.8%', guideComplete: '80.5%' },
  ];

  // 漏斗颜色渐变 - 从深到浅表示转化流失
  const getFunnelColor = (index, total) => {
    const colors = [
      '#4f46e5', // indigo-600
      '#6366f1', // indigo-500
      '#818cf8', // indigo-400
      '#a5b4fc', // indigo-300
      '#818cf8', // indigo-400
      '#6366f1', // indigo-500
      '#4f46e5', // indigo-600
      '#4338ca', // indigo-700
      '#3730a3', // indigo-800
    ];
    return colors[index % colors.length];
  };

  // 获取当前日期用于默认值
  const getToday = () => new Date().toISOString().split('T')[0];
  const getDefaultStartDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
  };

  return (
    <div style={{ padding: '24px' }}>
      {/* 筛选控件 */}
      <div className="card" style={{ marginBottom: '20px', padding: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>漏斗类型</label>
            <select value={funnelType} onChange={(e) => setFunnelType(e.target.value)}>
              <option value="before">游戏进入流程转化漏斗</option>
              <option value="newbie-guide">新手引导任务转化漏斗</option>
              <option value="funnel1">商店副玩法转化</option>
              <option value="funnel2">待补充漏斗2</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>开始时间</label>
            <input type="date" defaultValue={getDefaultStartDate()} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>结束时间</label>
            <input type="date" defaultValue={getToday()} />
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
            <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '4px' }}>账号类型</label>
            <select defaultValue="all">
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

      {/* 漏斗可视化 - 堆叠柱状图 */}
      <div className="card" style={{ marginBottom: '20px' }}>
        <h3 style={{ marginBottom: '4px', fontSize: '16px', fontWeight: '600' }}>
          {funnelType === 'before' ? '游戏进入流程转化漏斗' : funnelType === 'newbie-guide' ? '新手引导任务转化漏斗' : funnelType === 'funnel1' ? '商店副玩法转化' : '待补充漏斗2'}
        </h3>
        <p style={{ marginBottom: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
          <span style={{ color: 'var(--text-primary)', fontWeight: '500' }}>全步骤</span>
          <span style={{ margin: '0 8px', color: 'var(--border-color)' }}>|</span>
          <span>过去7天</span>
        </p>

        {/* 图表容器 - 固定高度确保底部对齐 */}
        <div style={{ position: 'relative', height: '360px', overflowX: 'auto', overflowY: 'hidden' }}>
          {/* Y轴 */}
          <div style={{ position: 'absolute', left: '10px', top: '0', bottom: '60px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
            {['100%', '80%', '60%', '40%', '20%', '0%'].map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </div>

          {/* 柱状图和标签区域 */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'flex-end', 
            justifyContent: funnelType === 'before' ? 'center' : 'flex-start', 
            gap: '16px', 
            padding: '0 40px 40px 60px', 
            position: 'absolute', 
            left: 0, 
            right: 0, 
            bottom: 0,
            height: '320px'
          }}>
            {funnelData.map((item, index) => {
              const maxCount = funnelData[0].count;
              const retentionPct = (item.count / maxCount) * 100;
              const prevCount = index > 0 ? funnelData[index - 1].count : maxCount;
              const stepRate = index > 0 ? ((item.count / prevCount) * 100).toFixed(2) + '%' : '100%';
              // 固定柱子总高度280px
              const barHeight = 280;
              // 留存高度百分比
              const keepPct = retentionPct;

              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  {/* 柱子容器 - 固定高度 */}
                  <div style={{
                    width: '64px',
                    height: `${barHeight}px`,
                    position: 'relative'
                  }}>
                    {/* 单个柱子 - 用渐变实现两色拼接，完全避免拼接缝隙 */}
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(to bottom, #dbeafe 0%, #dbeafe ${100 - keepPct}%, #3b82f6 ${100 - keepPct}%, #3b82f6 100%)`,
                      borderRadius: '4px',
                      overflow: 'hidden'
                    }}>
                      {/* 深蓝色区域内的文字 - 绝对定位在柱子底部区域 */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: `${keepPct}%`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        color: '#fff',
                        paddingTop: '6px',
                        overflow: 'hidden'
                      }}>
                        <span style={{ fontSize: '12px', fontWeight: '600', lineHeight: '1.2' }}>{item.rate}</span>
                        {keepPct > 15 && <span style={{ fontSize: '10px', lineHeight: '1.2', opacity: 0.9 }}>{(item.count / 1000).toFixed(1)}k</span>}
                      </div>
                    </div>

                    {/* 步骤间转化率标签 - 放在两根柱子之间的下方 */}
                    {index > 0 && (
                      <div style={{
                        position: 'absolute',
                        left: '-32px',
                        top: `${barHeight * (100 - keepPct) / 100 + 8}px`,
                        background: '#fff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '6px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#3b82f6',
                        boxShadow: '0 2px 8px rgba(59,130,246,0.15)',
                        whiteSpace: 'nowrap',
                        zIndex: 10,
                        transform: 'translateX(-50%)'
                      }}>
                        {stepRate}
                      </div>
                    )}
                  </div>

                  {/* X轴标签 - 文字描述在柱状图下方 */}
                  <div style={{ marginTop: '8px', fontSize: '11px', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '80px', lineHeight: '1.3' }}>
                    {item.stage}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 游戏进入流程转化漏斗 - 转化率数据表格 */}
      {funnelType === 'before' && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>转化率数据明细</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>新增安装数量</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>安装成功</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>APP启动加载loading</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>注册</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>登录</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>待补充事件1</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>创角</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>新手任务初始化</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>新手任务-完成第1个分支任务</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>新手任务-全部完成</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>首次充值</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>复购</th>
                </tr>
              </thead>
              <tbody>
                {conversionTableData.map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.newInstall.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.install}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.loading}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.register}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.login}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.event1}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.createChar}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.taskInit}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.taskBranch}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.taskComplete}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.firstPay}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.repeatBuy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 新手引导任务转化漏斗 - 转化率数据表格 */}
      {funnelType === 'newbie-guide' && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>转化率数据明细</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>新增用户数</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>进入新手引导</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>完成引导步骤1</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>完成引导步骤2</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>完成引导步骤3</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>完成新手引导</th>
                </tr>
              </thead>
              <tbody>
                {newbieGuideTableData.map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.newUsers.toLocaleString()}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.guideStart}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.guideStep1}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.guideStep2}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.guideStep3}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>{row.guideComplete}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 商店副玩法转化 - 数据明细 */}
      {funnelType === 'funnel1' && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>转化率数据明细</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件1</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件2</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件3</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件4</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件5</th>
                </tr>
              </thead>
              <tbody>
                {conversionTableData.slice(0, 5).map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>100.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>80.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>75.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>73.3%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>68.2%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 待补充漏斗2 - 数据明细 */}
      {funnelType === 'funnel2' && (
        <div className="card" style={{ marginBottom: '20px' }}>
          <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: '600' }}>转化率数据明细</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>日期</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件1</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件2</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件3</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件4</th>
                  <th style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '600', whiteSpace: 'nowrap' }}>事件5</th>
                </tr>
              </thead>
              <tbody>
                {conversionTableData.slice(0, 5).map((row, index) => (
                  <tr key={index} style={{ background: index % 2 === 0 ? 'transparent' : 'var(--bg-secondary)' }}>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)', fontWeight: '500' }}>{row.date}</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>100.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>75.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>75.0%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>71.1%</td>
                    <td style={{ padding: '10px 12px', textAlign: 'center', borderBottom: '1px solid var(--border)' }}>78.1%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversionFunnel;