import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children, currentPage, onPageChange, currentRegion, onRegionChange, pageTitle }) => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: 'var(--bg-primary)'
    }}>
      <Sidebar currentPage={currentPage} onPageChange={onPageChange} />
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header 
          currentPage={currentPage}
          currentRegion={currentRegion}
          onRegionChange={onRegionChange}
          pageTitle={pageTitle}
        />
        <main style={{
          flex: 1,
          overflowY: 'auto',
          padding: '24px'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
