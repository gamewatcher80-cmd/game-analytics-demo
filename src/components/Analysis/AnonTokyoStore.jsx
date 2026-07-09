import React from 'react';

const AnonTokyoStore = ({ currentRegion }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      padding: '40px'
    }}>
      <div style={{
        fontSize: '64px',
        marginBottom: '20px'
      }}>
        🚧
      </div>
      <h2 style={{ 
        fontSize: '20px', 
        fontWeight: '600', 
        color: 'var(--text-primary)',
        marginBottom: '12px'
      }}>
        功能开发中
      </h2>
      <p style={{ 
        fontSize: '14px', 
        color: 'var(--text-secondary)',
        textAlign: 'center',
        maxWidth: '400px'
      }}>
        商店副玩法页面正在开发中，敬请期待...
      </p>
    </div>
  );
};

export default AnonTokyoStore;
