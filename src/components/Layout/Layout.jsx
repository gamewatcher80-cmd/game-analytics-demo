import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, currentPage, onPageChange, currentRegion, onRegionChange, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 切换页面时关闭移动端侧边栏
  const handlePageChange = (page) => {
    onPageChange(page);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: 'var(--bg-primary)'
    }}>
      {/* 移动端遮罩层 */}
      {isMobile && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 90
          }}
        />
      )}

      {/* 侧边栏 */}
      <div style={{
        width: isMobile ? '260px' : '240px',
        position: isMobile ? 'fixed' : 'relative',
        top: 0, left: 0,
        height: '100vh',
        zIndex: isMobile ? 100 : 1,
        transform: isMobile ? (sidebarOpen ? 'translateX(0)' : 'translateX(-100%)') : 'none',
        transition: 'transform 0.3s ease',
        flexShrink: 0
      }}>
        <Sidebar currentPage={currentPage} onPageChange={handlePageChange} onClose={() => setSidebarOpen(false)} />
      </div>

      {/* 主内容区 */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        minWidth: 0
      }}>
        <Header
          currentPage={currentPage}
          currentRegion={currentRegion}
          onRegionChange={onRegionChange}
          pageTitle={pageTitle}
          isMobile={isMobile}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />
        <main style={{
          flex: 1,
          overflowY: 'auto',
          padding: isMobile ? '16px' : '24px'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
