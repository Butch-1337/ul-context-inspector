import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import type { OptionInput } from '../types/components';

interface SelectFieldProps {
  name: string;
  onChange: (event: { target: { value: string } }) => void;
  options: Array<{ value: string; text: string }>;
  placeholder?: string;
  prefix?: string;
  value?: string;
  disabled?: boolean;
}

const SelectField = ({
  name,
  onChange,
  options,
  prefix,
  placeholder,
  value,
  disabled
}: SelectFieldProps) => {

  const mapOptions = (options: OptionInput[]): { value: string; text: string }[] => {
    return options?.map((option) => ({
      value: typeof option === 'object' ? option.value : option,
      text: typeof option === 'object' ? option.label : option
    }));
  };

  // Debug logging
  console.log('SelectField props:', { name, value, options, onChange: typeof onChange });

  return (
    <Select
      name={name}
      onValueChange={(val) => {
        // create synthetic event object to match SelectField expects
        const syntheticEvent = {
          target: { value: val }
        };
        onChange(syntheticEvent);
      }}
      value={value}
    >
      <SelectTrigger
        prefix={prefix}
        className="uci-w-full"
        disabled={disabled}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {mapOptions(options)?.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
          >
            {option.text}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectField;
