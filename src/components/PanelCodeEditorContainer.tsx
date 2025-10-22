import React, { useState } from "react";

import {
  IconButton,
  SearchIcon,
  DownloadIcon,
  CopyIcon,
  CloseIcon
} from "../assets/icons";

import type { PanelCodeEditorContainerProps } from "../types/components";

const PanelCodeEditorContainer: React.FC<PanelCodeEditorContainerProps> = ({
  children,
  codeWrap: initialCodeWrap = false,
  isSearchVisible,
  onChangeSearch,
  onCloseButtonClick,
  onCopyButtonClick,
  onDownloadButtonClick,
  onSearchButtonClick,
  searchValue,
}) => {
  const [codeWrap, setCodeWrap] = useState(initialCodeWrap);

  return (
    <div className="uci-code-editor-container">
      <div className="uci-code-editor-toolbar">
        <div className="uci-code-editor-toolbar-toggles uci-flex uci-items-center uci-gap-2">
          Code

          <label className="uci-flex uci-items-center uci-gap-1 uci-cursor-pointer uci-text-sm">
            <input
              type="checkbox"
              checked={codeWrap}
              onChange={(e) => setCodeWrap(e.target.checked)}
              className="uci-cursor-pointer"
            />
            <span>Wrap</span>
          </label>
        </div>

        <div className="uci-code-editor-toolbar-buttons">
          <IconButton
            label="Search"
            onClick={onSearchButtonClick}
            active={isSearchVisible}
          >
            <SearchIcon />
          </IconButton>

          <IconButton label="Copy JSON" onClick={onCopyButtonClick}>
            <CopyIcon />
          </IconButton>

          <IconButton
            classNames="uci-bg-[#3F59E4] uci-rounded"
            label="Download JSON"
            onClick={onDownloadButtonClick}
          >
            <DownloadIcon />
          </IconButton>
        </div>
      </div>

      {isSearchVisible && (
        <div className="uci-code-editor-search-area">
          <input
            type="text"
            id="editor-search"
            name="editor-search-field"
            placeholder="Search keys and values..."
            onChange={onChangeSearch}
            value={searchValue}
            className="uci-flex-1 uci-bg-[#111111] uci-border uci-border-[#383838] uci-rounded uci-px-3 uci-py-2 uci-text-white uci-text-sm focus:uci-outline-none focus:uci-border-[#99A7F1]"
          />
          <IconButton
            classNames="!uci-border-[#383838] !uci-border-solid uci-rounded
              uci-p-[8px] uci-mr-0 uci-bg-[#111111] !uci-border-[1px]"
            label="Close search"
            onClick={onCloseButtonClick}
          >
            <CloseIcon />
          </IconButton>
        </div>
      )}

      <div className="uci-code-editor-area">
        {children(codeWrap)}
      </div>
    </div>
  );
};

export default PanelCodeEditorContainer;
