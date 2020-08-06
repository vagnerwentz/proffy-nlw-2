import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  optionLabel: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, optionLabel, ...rest }) =>  {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        
        <option value="" disabled hidden>{optionLabel}</option>

        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>{option.label}</option>
          )
        })}
      </select>
    </div>
  );
};

export default Select;