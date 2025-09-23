import React from 'react';
import type { PanelContainerProps } from '../types/components';

const PanelContainer: React.FC<PanelContainerProps> = ({ children, width, open }) => (
  <div
    className="uci-fixed uci-top-0 uci-left-0 uci-h-screen uci-bg-gray-900 uci-text-white uci-shadow-xl uci-border-r uci-border-gray-700 uci-flex uci-flex-col uci-z-[99998] uci-transition-transform uci-duration-300 uci-ease-out uci-overflow-hidden uci-box-border"
    style={{ width, transform: open ? "translateX(0)" : "translateX(-100%)" }}

  >
    {children}
  </div>
);

export default PanelContainer;
