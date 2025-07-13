import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

interface DynamicContentProps {
  contentKey: string;
  namespace?: string;
  fallback?: React.ReactNode;
  loadingComponent?: React.ReactNode;
  animationDelay?: number;
  className?: string;
  children?: (content: any, isLoading: boolean) => React.ReactNode;
}

interface ContentState {
  content: any;
  isLoading: boolean;
  error: string | null;
}

const DefaultLoadingComponent = () => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

export default function DynamicContent({
  contentKey,
  namespace = 'common',
  fallback,
  loadingComponent = <DefaultLoadingComponent />,
  animationDelay = 0,
  className = '',
  children
}: DynamicContentProps) {
  const { t, ready } = useTranslation(namespace);
  const router = useRouter();
  const [state, setState] = useState<ContentState>({
    content: null,
    isLoading: true,
    error: null
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  useEffect(() => {
    if (!ready) return;

    const loadContent = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        // Simulate dynamic content loading
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const content = t(contentKey, { returnObjects: true });
        
        setState({
          content,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState({
          content: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to load content'
        });
      }
    };

    loadContent();
  }, [contentKey, namespace, ready, t, router.locale]);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      setState(prev => ({ ...prev, isLoading: true }));
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  if (!isVisible) {
    return <div className={className}>{loadingComponent}</div>;
  }

  if (state.error) {
    return (
      <div className={`text-red-500 ${className}`}>
        {fallback || `Error loading content: ${state.error}`}
      </div>
    );
  }

  if (state.isLoading) {
    return <div className={className}>{loadingComponent}</div>;
  }

  const content = state.content;

  if (children) {
    return (
      <div className={`transition-all duration-500 ease-in-out ${className}`}>
        {children(content, state.isLoading)}
      </div>
    );
  }

  // Handle different content types
  if (typeof content === 'string') {
    return (
      <div 
        className={`transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  if (Array.isArray(content)) {
    return (
      <div className={`transition-all duration-500 ease-in-out ${className}`}>
        {content.map((item, index) => (
          <div 
            key={index}
            className="animate-in slide-in-from-left duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {typeof item === 'string' ? item : JSON.stringify(item)}
          </div>
        ))}
      </div>
    );
  }

  if (typeof content === 'object' && content !== null) {
    return (
      <div className={`transition-all duration-500 ease-in-out ${className}`}>
        {Object.entries(content).map(([key, value], index) => (
          <div 
            key={key}
            className="animate-in slide-in-from-left duration-300"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <strong>{key}:</strong> {typeof value === 'string' ? value : JSON.stringify(value)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`transition-all duration-500 ease-in-out ${className}`}>
      {content || fallback || 'No content available'}
    </div>
  );
}

// Higher-order component for dynamic content
export function withDynamicContent<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  contentConfig: {
    contentKey: string;
    namespace?: string;
    loadingComponent?: React.ReactNode;
  }
) {
  return function DynamicContentWrapper(props: P) {
    return (
      <DynamicContent
        contentKey={contentConfig.contentKey}
        namespace={contentConfig.namespace}
        loadingComponent={contentConfig.loadingComponent}
      >
        {(content, isLoading) => (
          <WrappedComponent {...props} content={content} isLoading={isLoading} />
        )}
      </DynamicContent>
    );
  };
}

// Hook for dynamic content
export function useDynamicContent(contentKey: string, namespace = 'common') {
  const { t, ready } = useTranslation(namespace);
  const router = useRouter();
  const [state, setState] = useState<ContentState>({
    content: null,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    if (!ready) return;

    const loadContent = async () => {
      setState(prev => ({ ...prev, isLoading: true, error: null }));
      
      try {
        await new Promise(resolve => setTimeout(resolve, 50));
        const content = t(contentKey, { returnObjects: true });
        
        setState({
          content,
          isLoading: false,
          error: null
        });
      } catch (error) {
        setState({
          content: null,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Failed to load content'
        });
      }
    };

    loadContent();
  }, [contentKey, namespace, ready, t, router.locale]);

  return state;
}