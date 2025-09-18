import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../lib/tailwind.css';
import '../lib/styles.css';

/**
 * State 1: Connected to tenant.
 * Reads window.universal_login_context (if present) and allows inline JSON editing.
 * Edits overwrite window.universal_login_context. Includes search, copy, download actions.
 */

interface UniversalLoginContextPanelProps {
  /** Start open by default */
  defaultOpen?: boolean;
  /** Height of panel */
  height?: number | string;
  /** Optional width */
  width?: number | string;
  /** Allow custom window root (testability) */
  root?: WindowLike;
  /** Disabled select label (read-only for this state) */
  // Sliding panel with persistent handle. When closed panel translates left leaving handle visible.
  const handleWidth = 46; // px reserved to keep handle visible when closed
  return (
    <div
      className="uci-fixed uci-top-0 uci-left-0 uci-h-screen uci-pointer-events-none"
      style={{ zIndex: 99998 }}
    >
      <div
        className="uci-h-full uci-bg-gray-900 uci-text-gray-100 uci-shadow-xl uci-border-r uci-border-gray-700 uci-flex uci-flex-col uci-transition-transform uci-duration-300 uci-ease-out uci-pointer-events-auto"
        style={{
          width,
          transform: open ? 'translateX(0)' : `translateX(calc(-100% + ${handleWidth}px))`
        }}
      >
        {/* Handle / Toggle */}
        <button
          type="button"
          aria-label={open ? 'Collapse tenant context panel' : 'Expand tenant context panel'}
          onClick={() => setOpen(o => !o)}
          className="uci-absolute uci-top-1/2 uci--translate-y-1/2 uci-right-[-20px] uci-bg-indigo-600 hover:uci-bg-indigo-500 uci-text-white uci-text-[11px] uci-font-medium uci-rounded-r uci-shadow uci-px-2 uci-py-2 uci-rotate-0"
          style={{ writingMode: 'vertical-rl' as any, textOrientation: 'mixed' }}
        >
          {open ? 'Close' : 'Tenant Context Data'}
        </button>

        <div className="uci-flex uci-items-center uci-justify-between uci-gap-2 uci-px-3 uci-py-2 uci-border-b uci-border-gray-700">
          <select
            className="uci-bg-gray-800 uci-border uci-border-gray-600 uci-rounded uci-text-xs uci-px-2 uci-py-1 disabled:uci-opacity-60"
            disabled
            value={screenLabel}
            onChange={() => {}}
          >
            <option>{screenLabel}</option>
          </select>
          <div className="uci-flex uci-items-center uci-gap-2">
            <IconButton label="Search" onClick={() => setSearchVisible(v => !v)} active={searchVisible}>
              <SearchIcon />
            </IconButton>
            <IconButton label="Copy JSON" onClick={onCopy}>
              <CopyIcon />
            </IconButton>
            <IconButton label="Download JSON" onClick={onDownload}>
              <DownloadIcon />
            </IconButton>
          </div>
        </div>
        {searchVisible && (
          <div className="uci-px-3 uci-py-2 uci-border-b uci-border-gray-700">
            <input
              type="text"
              className="uci-w-full uci-bg-gray-800 uci-border uci-border-gray-600 focus:uci-ring-2 focus:uci-ring-indigo-500 uci-rounded uci-text-xs uci-px-2 uci-py-1"
              placeholder="Search (filters lines)"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}
        <div className="uci-flex-1 uci-overflow-hidden uci-flex uci-flex-col">
          <div className="uci-flex-1 uci-overflow-auto uci-px-3 uci-pt-3 uci-pb-6">
            <EditorArea
              raw={raw}
              display={filteredDisplay}
              onChange={setRaw}
              isFiltered={!!search}
              isValid={isValid}
            />
          </div>
        </div>
      </div>
    </div>
  );
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tenant-context.json';
      a.click();
      URL.revokeObjectURL(url);
  } catch { /* ignore */ }
  }, [raw]);

  const filteredDisplay = useMemo(() => {
    if (!search) return raw;
    // Simple line filter: keep lines matching search (case-insensitive)
    const lower = search.toLowerCase();
    return raw
      .split(/\n/)
      .filter(l => l.toLowerCase().includes(lower))
      .join('\n');
  }, [raw, search]);

  return (
    <div>
      {!open && (
        <button
          className="uci-fixed uci-top-1/2 uci--translate-y-1/2 uci-left-2 uci-bg-indigo-600 hover:uci-bg-indigo-500 uci-text-white uci-font-medium uci-px-3 uci-py-2 uci-rounded uci-shadow"
          onClick={() => setOpen(true)}
        >
          Tenant Context Data
        </button>
      )}
      {open && (
        <div
          className="uci-fixed uci-top-0 uci-left-0 uci-bg-gray-900 uci-text-gray-100 uci-shadow-xl uci-border-r uci-border-gray-700 uci-flex uci-flex-col"
          style={{ height, width }}
        >
          <div className="uci-flex uci-items-center uci-justify-between uci-gap-2 uci-px-3 uci-py-2 uci-border-b uci-border-gray-700">
            <select
              className="uci-bg-gray-800 uci-border uci-border-gray-600 uci-rounded uci-text-xs uci-px-2 uci-py-1 disabled:uci-opacity-60"
              disabled
              value={screenLabel}
              onChange={() => {}}
            >
              <option>{screenLabel}</option>
            </select>
            <div className="uci-flex uci-items-center uci-gap-2">
              <IconButton label="Search" onClick={() => setSearchVisible(v => !v)} active={searchVisible}>
                <SearchIcon />
              </IconButton>
              <IconButton label="Copy JSON" onClick={onCopy}>
                <CopyIcon />
              </IconButton>
              <IconButton label="Download JSON" onClick={onDownload}>
                <DownloadIcon />
              </IconButton>
              <IconButton label="Close" onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </div>
          </div>
          {searchVisible && (
            <div className="uci-px-3 uci-py-2 uci-border-b uci-border-gray-700">
              <input
                type="text"
                className="uci-w-full uci-bg-gray-800 uci-border uci-border-gray-600 focus:uci-ring-2 focus:uci-ring-indigo-500 uci-rounded uci-text-xs uci-px-2 uci-py-1"
                placeholder="Search (filters lines)"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          )}
          <div className="uci-flex-1 uci-overflow-hidden uci-flex uci-flex-col">
            <div className="uci-flex-1 uci-overflow-auto uci-px-3 uci-pt-3 uci-pb-6">
              <EditorArea
                raw={raw}
                display={filteredDisplay}
                onChange={setRaw}
                isFiltered={!!search}
                isValid={isValid}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Subcomponents ---

const IconButton: React.FC<React.PropsWithChildren<{ label: string; onClick: () => void; active?: boolean }>> = ({ label, onClick, children, active }) => (
  <button
    className={`uci-p-1 uci-rounded uci-border uci-text-gray-200 hover:uci-bg-gray-700 uci-border-gray-600 uci-transition-colors ${active ? 'uci-bg-gray-700' : 'uci-bg-gray-800'}`}
    title={label}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

interface EditorAreaProps {
  raw: string;
  display: string;
  onChange: (v: string) => void;
  isFiltered: boolean;
  isValid: boolean;
}

const EditorArea: React.FC<EditorAreaProps> = ({ raw, display, onChange, isFiltered, isValid }) => {
  const show = isFiltered ? display : raw;
  return (
    <textarea
      className={`uci-w-full uci-h-full uci-resize-none uci-font-mono uci-text-[11px] uci-leading-4 uci-bg-gray-950 uci-text-gray-100 uci-rounded uci-border ${isValid ? 'uci-border-gray-700' : 'uci-border-red-500'} focus:uci-outline-none focus:uci-ring-2 focus:uci-ring-indigo-500`}
      value={show}
      spellCheck={false}
      onChange={e => {
        if (isFiltered) {
          // If filtered, editing lines wouldn't map back; disable edit while filtered.
          return;
        }
        onChange(e.target.value);
      }}
    />
  );
};

// --- Icons (inline SVG) ---
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);
const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export type { UniversalLoginContextPanelProps };
