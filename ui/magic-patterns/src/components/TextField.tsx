import React from 'react';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
}

export function TextField({ label, hint, id, className = '', ...rest }: TextFieldProps) {
  const inputId = id ?? `field-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={inputId}
        {...rest}
        className={`w-full rounded-2xl border border-line bg-surface px-4 py-3.5 text-[15px] text-ink placeholder:text-muted/60 focus:border-sage focus:outline-none ${className}`} />
      
      {hint ? <p className="text-xs text-muted">{hint}</p> : null}
    </div>);

}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: string[];
}

export function SelectField({ label, options, id, ...rest }: SelectFieldProps) {
  const selectId = id ?? `select-${label.toLowerCase().replace(/[^a-z]+/g, '-')}`;

  return (
    <div className="space-y-1.5">
      <label htmlFor={selectId} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <select
        id={selectId}
        {...rest}
        className="w-full appearance-none rounded-2xl border border-line bg-surface px-4 py-3.5 text-[15px] text-ink focus:border-sage focus:outline-none">
        
        {options.map((option) =>
        <option key={option} value={option}>
            {option}
          </option>
        )}
      </select>
    </div>);

}