import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  placeholder?: string;
  label: string;
  required?: boolean;
  error?: string;
  disabled?: boolean;
  options?: { value: string; label: string }[];
  rows?: number;
  'aria-label'?: string;
}

export default function FormInput({
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  label,
  required = false,
  error,
  disabled = false,
  options,
  rows = 4,
  'aria-label': ariaLabel,
}: FormInputProps) {
  const baseClasses = `w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-gray-900 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed`;
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300';
  const inputClasses = `${baseClasses} ${errorClasses}`;

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            rows={rows}
            className={`${inputClasses} resize-none`}
            aria-label={ariaLabel || label}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          />
        );
      case 'select':
        return (
          <select
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            disabled={disabled}
            className={inputClasses}
            aria-label={ariaLabel || label}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            className={inputClasses}
            aria-label={ariaLabel || label}
            aria-describedby={error ? `${id}-error` : undefined}
            aria-invalid={!!error}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="required">*</span>}
      </label>
      {renderInput()}
      {error && (
        <p id={`${id}-error`} className="text-red-600 text-sm flex items-center gap-1" role="alert">
          <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}