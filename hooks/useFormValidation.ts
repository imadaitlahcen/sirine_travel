import { useState, useCallback } from 'react';

interface ValidationRules {
  [key: string]: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: string) => string | null;
  };
}

interface FormErrors {
  [key: string]: string;
}

export function useFormValidation(rules: ValidationRules) {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = useCallback((name: string, value: string): string | null => {
    const rule = rules[name];
    if (!rule) return null;

    // Required validation
    if (rule.required && (!value || value.trim() === '')) {
      return 'Ce champ est requis';
    }

    // Skip other validations if field is empty and not required
    if (!value || value.trim() === '') {
      return null;
    }

    // Min length validation
    if (rule.minLength && value.length < rule.minLength) {
      return `Minimum ${rule.minLength} caractères requis`;
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return `Maximum ${rule.maxLength} caractères autorisés`;
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      if (name === 'email') {
        return 'Format d\'email invalide';
      }
      if (name === 'phone') {
        return 'Format de téléphone invalide';
      }
      return 'Format invalide';
    }

    // Custom validation
    if (rule.custom) {
      return rule.custom(value);
    }

    return null;
  }, [rules]);

  const validateForm = useCallback((formData: { [key: string]: string }): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(rules).forEach((fieldName) => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validateField]);

  const validateSingleField = useCallback((name: string, value: string) => {
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error || ''
    }));
    return !error;
  }, [validateField]);

  const setFieldTouched = useCallback((name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const clearErrors = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const getFieldError = useCallback((name: string): string | undefined => {
    return touched[name] ? errors[name] : undefined;
  }, [errors, touched]);

  return {
    errors,
    touched,
    validateForm,
    validateSingleField,
    setFieldTouched,
    clearErrors,
    getFieldError,
    hasErrors: Object.keys(errors).some(key => errors[key])
  };
}

// Common validation rules
export const commonValidationRules = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  phone: {
    required: true,
    pattern: /^[+]?[0-9\s\-()]{10,}$/
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50
  },
  message: {
    maxLength: 500
  }
};