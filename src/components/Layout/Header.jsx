import React from 'react';
import { REGION_NAMES } from '../../data/mockData';

const Header = ({ currentPage, currentRegion, onRegionChange, pageTitle }) => {
  return (
    <div style={{
      height: '60px',
      background: 'var(--bg-secondary)',
      borderBottom: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px'
    }}>
      {/* Page Title */}
      <h2 style={{
        fontSize: '18px',
        fontWeight: '600',
        color: 'var(--text-primary)',
        margin: 0
      }}>
        {pageTitle}
      </h2>
      
      {/* Right Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
      </div>
    </div>
  );
};

export default Header;
