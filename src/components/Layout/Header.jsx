import React from 'react';

const Header = ({ currentPage, currentRegion, onRegionChange, pageTitle, isMobile, onToggleSidebar }) => {
  return (
    <div style={{
      height: '56px',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      flexShrink: 0
    }}>
      {/* 左侧：汉堡按钮 + 页面标题 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
        {isMobile && (
          <button
            onClick={onToggleSidebar}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-primary)',
              flexShrink: 0
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        )}
        <h2 style={{
          fontSize: isMobile ? '15px' : '18px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          margin: 0,
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {pageTitle}
        </h2>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
      </div>
    </div>
  );
};

export default Header;
