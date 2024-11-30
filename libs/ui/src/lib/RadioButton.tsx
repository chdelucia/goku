import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonProps {
  name: string;
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  className = '',
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="mt-2 space-x-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="form-radio h-4 w-4 text-indigo-600"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

