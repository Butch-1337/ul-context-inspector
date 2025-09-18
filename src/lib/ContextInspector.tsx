import React, { useState } from 'react';
import './styles.css';
import './tailwind.css';
import { useContextSnapshot } from '../hooks/useContextSnapshot';
import { PanelContainer, PanelHeader, EmptyState } from '../components/Panel';

export interface ContextInspectorProps {
  /** The global object key to inspect, e.g. 'ulContext'. Defaults to 'ulContext'. */
  targetKey?: string;
  /** Auto open the panel when mounted. */
  defaultOpen?: boolean;
  /** Poll interval (ms) to refresh snapshot. Set 0 to disable polling. */
  pollInterval?: number;
  /** Allow overriding root object (defaults to window). Facilitates testing. */
  root?: any;
  /** Optional height of the panel (when open). */
  height?: number | string;
}

// snapshot logic now lives in useContextSnapshot

export const ContextInspector: React.FC<ContextInspectorProps> = ({
  targetKey = 'ulContext',
  defaultOpen = false,
  pollInterval = 3000,
  root = typeof window !== 'undefined' ? (window as any) : {},
  height = 300
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const targetObj = (root as any)[targetKey];
  const { entries, lastUpdated, refresh } = useContextSnapshot({ targetObj, pollInterval });

  return (
    <div className={`uci-root ${open ? 'open' : ''}`}>
      <button
        className="uci-toggle uci-bg-gray-900 uci-text-white uci-text-xs uci-font-medium hover:uci-bg-gray-800 focus:uci-outline-none focus:uci-ring-2 focus:uci-ring-indigo-500"
        onClick={() => setOpen(o => !o)}
        title="Toggle context inspector"
      >
        {open ? 'Close' : 'Open'} Inspector
      </button>
      {open && (
        <PanelContainer height={height}>
          <PanelHeader>
            <strong className="uci-text-xs uci-font-semibold">Context Inspector</strong>
            <span className="uci-meta uci-gap-2">
              key: <code>{targetKey}</code>{' '}
              {lastUpdated && <em>updated {new Date(lastUpdated).toLocaleTimeString()}</em>}
              <button
                className="uci-bg-gray-700 hover:uci-bg-gray-600 uci-text-white uci-text-[10px] uci-rounded uci-px-2 uci-py-1"
                onClick={refresh}
                title="Refresh now"
              >Refresh</button>
            </span>
          </PanelHeader>
          {targetObj ? (
            <div className="uci-body">
              {entries.length === 0 && <EmptyState message="Empty object" />}
              {entries.map(e => (
                <div key={e.path} className="uci-entry">
                  <div className="uci-path">{e.path}</div>
                  <div className="uci-type">{e.type}</div>
                  <pre className="uci-value">{safeStringify(e.value)}</pre>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState message={`No object at window.${targetKey}`} />
          )}
        </PanelContainer>
      )}
    </div>
  );
};

function safeStringify(value: unknown) {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (typeof value === 'function') return '[Function]';
  try {
    return JSON.stringify(value, getCircularReplacer(), 2);
  } catch {
    return String(value);
  }
}

function getCircularReplacer() {
  const seen = new WeakSet();
  return function(key: string, value: any) {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular]';
      }
      seen.add(value);
    }
    return value;
  };
}
