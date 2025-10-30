import React from "react";
import { SearchIcon } from "../assets/icons";

interface SelectSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

/**
 * SelectSearchInput
 * Standalone search input for use inside a Select popover.
 * It stops keydown propagation to prevent interfering with list navigation.
 */
export const SelectSearchInput: React.FC<SelectSearchInputProps> = ({
  value,
  onChange,
  placeholder
}) => {
  return (
    <div className="uci-px-2 uci-mb-1">
      <div className="uci-relative">
        <span
          className="uci-absolute uci-inset-y-0 uci-left-2 uci-text-[#666] uci-flex uci-items-center"
          aria-hidden="true"
        >
          <SearchIcon />
        </span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder || "Search..."}
          onKeyDown={(e) => e.stopPropagation()}
          data-slot="select-search"
          className="uci-w-full uci-text-[14px] uci-bg-[#111111] uci-border uci-border-[#383838] uci-rounded uci-pl-7 uci-pr-2 uci-py-2 uci-text-[#666] placeholder:uci-text-[#666] placeholder:uci-italic focus:uci-outline-none focus:uci-border-[#555]"
        />
      </div>
    </div>
  );
};

export default SelectSearchInput;
