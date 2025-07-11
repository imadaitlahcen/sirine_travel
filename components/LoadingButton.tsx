import React from 'react';

interface LoadingButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  loadingText?: string;
}

export default function LoadingButton({
  children,
  loading = false,
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  loadingText = 'Envoi en cours...'
}: LoadingButtonProps) {
  const baseClasses = `group relative px-10 md:px-12 py-4 md:py-5 rounded-xl font-semibold transition-all duration-300 transform shadow-xl overflow-hidden min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`;
  const defaultClasses = `bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-teal-700 hover:to-emerald-600 hover:scale-[1.02] hover:shadow-2xl`;
  const finalClasses = className || `${baseClasses} ${defaultClasses}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={finalClasses}
      aria-busy={loading}
      aria-describedby={loading ? 'loading-description' : undefined}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {loading ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span>{loadingText}</span>
          </>
        ) : (
          <>
            <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            {children}
          </>
        )}
      </span>
      
      {/* Hover effects */}
      {!loading && !disabled && (
        <>
          <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        </>
      )}
      
      {/* Screen reader description for loading state */}
      {loading && (
        <span id="loading-description" className="sr-only">
          Formulaire en cours d'envoi, veuillez patienter
        </span>
      )}
    </button>
  );
}