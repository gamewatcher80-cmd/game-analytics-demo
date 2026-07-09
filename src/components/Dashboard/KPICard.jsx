import React from 'react';

const KPICard = ({ title, value, unit = '', change, suffix = '' }) => {
  const isPositive = change >= 0;
  
  return (
    <div style={{
      background: 'var(--bg-card)',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid var(--border-color)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = 'var(--primary)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.15)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = 'var(--border-color)';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
    >
      <p style={{
        color: 'var(--text-secondary)',
        fontSize: '13px',
        marginBottom: '8px'
      }}>{title}</p>
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '8px'
      }}>
        <span style={{
          fontSize: '28px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          fontFamily: 'Roboto, monospace'
        }}>
          {typeof value === 'number' ? value.toLocaleString() : value}
          {unit}
        </span>
        {suffix && (
          <span style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
            marginBottom: '4px'
          }}>{suffix}</span>
        )}
      </div>
      {change !== undefined && (
        <p style={{
          fontSize: '12px',
          marginTop: '12px',
          color: isPositive ? 'var(--success)' : 'var(--danger)',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>{isPositive ? '↑' : '↓'}</span>
          <span>{Math.abs(change)}%</span>
          <span style={{ color: 'var(--text-muted)', marginLeft: '4px' }}>较上期</span>
        </p>
      )}
    </div>
  );
};

export default KPICard;
