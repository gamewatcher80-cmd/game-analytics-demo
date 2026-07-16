import React, { useState } from 'react';

const menuGroups = [
  {
    title: '【基础运营数据】',
    items: [
      { id: 'overview', label: 'KPI 仪表盘', icon: '📊' },
      { id: 'realtime', label: '实时数据', icon: '⚡' },
      { id: 'daily', label: '每日数据', icon: '📅' },
      { id: 'weekly', label: '每周数据', icon: '📆' },
      { id: 'monthly', label: '每月数据', icon: '🗓️' },
      { id: 'region', label: '地区对比', icon: '🌍' },
      { id: 'cn-user', label: '简中用户', icon: '🇨🇳' },
      { id: 'active', label: '活跃', icon: '🔥' },
      { id: 'retention-new', label: '留存', icon: '🧡' },
      { id: 'ltv', label: 'LTV', icon: '💎' },
      { id: 'returning', label: '回流用户', icon: '🔄' },
      { id: 'funnel-conversion', label: '转化率漏斗', icon: '🎯' },
      { id: 'payment-recharge', label: '付费数据-充值', icon: '💳' },
      { id: 'payment-consume', label: '付费数据-消耗', icon: '🛒' },
      { id: 'payment-privilege', label: '付费数据-特权卡', icon: '💰' },
      { id: 'gacha', label: '抽卡分析', icon: '🎰' },
      { id: 'in-game-ads', label: '游戏内广告', icon: '📺' },
    ]
  },
  {
    title: '【游戏玩法数据】',
    items: [
      { id: 'gameplay-player-level', label: '玩家人物等级', icon: '⭐' },
      { id: 'gameplay-live-boost', label: '体力liveboost', icon: '⚡' },
      { id: 'gameplay-song', label: '关卡(曲目)', icon: '🎵' },
      { id: 'gameplay-cultivate-member', label: '养成-成员', icon: '🌱' },
      { id: 'gameplay-cultivate-snapshot', label: '养成-快照', icon: '📸' },
      { id: 'gameplay-cultivate-band', label: '养成-乐队', icon: '🎸' },
      { id: 'gameplay-performance', label: '演出', icon: '🎹' },
      { id: 'gameplay-story', label: '故事', icon: '📖' },
      { id: 'gameplay-currency', label: '货币/资源', icon: '💰' },
      { id: 'gameplay-item', label: '道具', icon: '🎒' },
      { id: 'gameplay-mission', label: '任务', icon: '✅' },
    ]
  },
  {
    title: '【副玩法数据】',
    items: [
      { id: 'at-overview', label: 'AT总览', icon: '🏪' },
      { id: 'at-level-distribution', label: 'AT等级分布', icon: '📈' },
      { id: 'shop-expansion', label: '店铺扩张情况', icon: '🏗️' },
      { id: 'silver-coin-medal', label: '银币/勋章', icon: '🪙' },
      { id: 'at-mission', label: '任务', icon: '📋' },
    ]
  },
  {
    title: '【UA数据】',
    items: [
      { id: 'ads', label: '投放数据', icon: '📢' },
      { id: 'placeholder-ua-1', label: '待补充1', icon: '📦' },
      { id: 'placeholder-ua-2', label: '待补充2', icon: '📦' },
    ]
  }
];

const Sidebar = ({ currentPage, onPageChange }) => {
  // 默认全部展开
  const [collapsedGroups, setCollapsedGroups] = useState({});

  const toggleGroup = (groupIndex) => {
    setCollapsedGroups(prev => ({
      ...prev,
      [groupIndex]: !prev[groupIndex]
    }));
  };

  return (
    <div 
      style={{
        width: '240px',
        background: 'var(--bg-secondary)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid var(--border-color)'
      }}
    >
      {/* Logo */}
      <div style={{
        padding: '20px',
        borderBottom: '1px solid var(--border-color)',
        background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-secondary) 100%)'
      }}>
        <h1 style={{
          fontSize: '18px',
          fontWeight: '700',
          background: 'linear-gradient(90deg, var(--primary) 0%, #00ff88 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '4px'
        }}>
          准备中项目
        </h1>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
          数据分析平台
        </p>
      </div>
      
      {/* Menu */}
      <nav style={{
        flex: 1,
        overflowY: 'auto',
        padding: '12px 0'
      }}>
        {menuGroups.map((group, groupIndex) => {
          const isCollapsed = collapsedGroups[groupIndex];
          
          return (
            <div key={groupIndex}>
              {/* 一级目录 - 可折叠 */}
              <div
                onClick={() => toggleGroup(groupIndex)}
                style={{
                  padding: '12px 20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--primary)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  userSelect: 'none',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <span>{group.title}</span>
                <span style={{
                  fontSize: '10px',
                  transition: 'transform 0.2s',
                  transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)'
                }}>
                  ▼
                </span>
              </div>
              
              {/* 二级目录 - 可折叠 */}
              <div style={{
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
                maxHeight: isCollapsed ? '0' : `${group.items.length * 44}px`
              }}>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    style={{
                      width: '100%',
                      padding: '10px 20px 10px 32px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      border: 'none',
                      background: currentPage === item.id ? 'var(--primary-light)' : 'transparent',
                      color: currentPage === item.id ? 'var(--primary)' : 'var(--text-secondary)',
                      borderLeft: currentPage === item.id ? '3px solid var(--primary)' : '3px solid transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textAlign: 'left',
                      fontSize: '13px'
                    }}
                    onMouseEnter={(e) => {
                      if (currentPage !== item.id) {
                        e.target.style.background = 'var(--bg-card)';
                        e.target.style.color = 'var(--text-primary)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (currentPage !== item.id) {
                        e.target.style.background = 'transparent';
                        e.target.style.color = 'var(--text-secondary)';
                      }
                    }}
                  >
                    <span style={{ fontSize: '14px' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      
      {/* Footer */}
      <div style={{
        padding: '16px 20px',
        borderTop: '1px solid var(--border-color)',
        fontSize: '11px',
        color: 'var(--text-muted)'
      }}>
        v1.0.0 Demo
      </div>
    </div>
  );
};

export default Sidebar;
