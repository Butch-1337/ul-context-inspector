import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import type { FlexibleOption } from "./../types/components";

interface SelectFieldProps {
  name: string;
  onChange: (event: { target: { value: string } }) => void;
  options: FlexibleOption[];
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
  // convert options to normalized format
  const normalizedOptions = options.map(option => {
    if (typeof option === 'object') {
      return { value: option.value, text: option.text || option.label || option.value };
    } else {
      return { value: option, text: option };
    }
  });

  console.log('SelectField props:', { name, value, options, normalizedOptions, onChange: typeof onChange });
  return (
    <Select
      name={name}
      onValueChange={(value: string) => {
        if (!onChange) return;
        // create synthetic event object (expected by component)
        const syntheticEvent = {
          target: { value: value }
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
        {/* Custom SelectValue that uses our normalized options directly */}
        <span>
          {value ? normalizedOptions.find(opt => opt.value === value)?.text || placeholder : placeholder}
        </span>
      </SelectTrigger>
      <SelectContent>
        {normalizedOptions?.map((option) => (
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
