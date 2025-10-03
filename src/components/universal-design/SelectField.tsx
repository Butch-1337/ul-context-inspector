import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

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

  // Debug logging
  console.log('SelectField props:', { name, value, options, onChange: typeof onChange });

  return (
    <Select
      name={name}
      onValueChange={(val) => {
        if (!onChange) return;

        // Create synthetic event object
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
        {options?.map((option) => (
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
