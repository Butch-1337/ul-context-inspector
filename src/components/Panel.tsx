import React from 'react';

export const PanelContainer: React.FC<React.PropsWithChildren<{ height: number | string }>> = ({ height, children }) => (
  <div className="uci-panel uci-flex uci-flex-col" style={{ height }}>{children}</div>
);

export const PanelHeader: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="uci-header uci-flex uci-items-center uci-justify-between">{children}</div>
);

export const EmptyState: React.FC<{ message: string }> = ({ message }) => (
  <div className="uci-empty">{message}</div>
);
