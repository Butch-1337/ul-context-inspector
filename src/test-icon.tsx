import React from 'react';
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export const TestIcons = () => {
  return (
    <div style={{ padding: '20px', background: '#white' }}>
      <h3>Icon Test</h3>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div>
          <p>ChevronDown:</p>
          <ChevronDown size={24} style={{ border: '1px solid red' }} />
        </div>
        <div>
          <p>ChevronUp:</p>
          <ChevronUp size={24} style={{ border: '1px solid red' }} />
        </div>
        <div>
          <p>Check:</p>
          <Check size={24} style={{ border: '1px solid red' }} />
        </div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <p>With classes:</p>
        <ChevronDown 
          className="uci-text-primary uci-size-4 uci-transition-transform uci-duration-200" 
          style={{ border: '1px solid blue', width: '32px', height: '32px' }}
        />
      </div>
    </div>
  );
};
