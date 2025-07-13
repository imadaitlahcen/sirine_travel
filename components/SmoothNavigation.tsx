import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { scrollToElement, navigateWithTransition, initializeSmoothScrolling } from '../utils/navigation';

interface SmoothLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  external?: boolean;
  smooth?: boolean;
  offset?: number;
  duration?: number;
  showLoadingIndicator?: boolean;
}

export function SmoothLink({
  href,
  children,
  className = '',
  onClick,
  external = false,
  smooth = true,
  offset = 80,
  duration = 800,
  showLoadingIndicator = true
}: SmoothLinkProps) {
  const router = useRouter();

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
    }

    // Handle external links
    if (external) {
      return; // Let the default behavior handle external links
    }

    // Handle anchor links (same page)
    if (href.startsWith('#')) {
      e.preventDefault();
      if (smooth) {
        scrollToElement(href.substring(1), { offset, duration });
      } else {
        const element = document.getElementById(href.substring(1));
        if (element) {
          element.scrollIntoView();
        }
      }
      return;
    }

    // Handle internal navigation
    if (href.startsWith('/')) {
      e.preventDefault();
      await navigateWithTransition(router, href, {
        showProgress: showLoadingIndicator,
        duration: 300
      });
      return;
    }
  };

  if (external) {
    return (
      <a
        href={href}
        className={`transition-all duration-300 hover:scale-105 ${className}`}
        onClick={handleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`transition-all duration-300 hover:scale-105 ${className}`}
        onClick={handleClick}
      >
        {children}
      </a>
    </Link>
  );
}

interface SmoothButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  loadingText?: string;
  scrollTo?: string;
  scrollOffset?: number;
  animationDelay?: number;
}

export function SmoothButton({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  loading = false,
  loadingText = 'Loading...',
  scrollTo,
  scrollOffset = 80,
  animationDelay = 0
}: SmoothButtonProps) {
  const handleClick = () => {
    if (disabled || loading) return;

    if (scrollTo) {
      setTimeout(() => {
        scrollToElement(scrollTo, { offset: scrollOffset });
      }, animationDelay);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        transition-all duration-300 transform hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
        focus:outline-none focus:ring-2 focus:ring-offset-2
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText}
        </span>
      ) : (
        children
      )}
    </button>
  );
}

interface NavigationProviderProps {
  children: React.ReactNode;
  enableSmoothScrolling?: boolean;
  scrollOffset?: number;
  scrollDuration?: number;
}

export function NavigationProvider({
  children,
  enableSmoothScrolling = true,
  scrollOffset = 80,
  scrollDuration = 800
}: NavigationProviderProps) {
  useEffect(() => {
    if (enableSmoothScrolling) {
      const cleanup = initializeSmoothScrolling({
        offset: scrollOffset,
        duration: scrollDuration
      });

      return cleanup;
    }
  }, [enableSmoothScrolling, scrollOffset, scrollDuration]);

  return <>{children}</>;
}

// Hook for smooth navigation
export function useSmoothNavigation() {
  const router = useRouter();

  const navigateTo = async (href: string, options?: {
    showProgress?: boolean;
    duration?: number;
    replace?: boolean;
  }) => {
    await navigateWithTransition(router, href, options);
  };

  const scrollTo = (elementId: string, options?: {
    offset?: number;
    duration?: number;
  }) => {
    scrollToElement(elementId, options);
  };

  return {
    navigateTo,
    scrollTo,
    router
  };
}

// Higher-order component for smooth navigation
export function withSmoothNavigation<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function SmoothNavigationWrapper(props: P) {
    const navigation = useSmoothNavigation();
    
    return (
      <NavigationProvider>
        <WrappedComponent {...props} navigation={navigation} />
      </NavigationProvider>
    );
  };
}

// Animated section component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'slide' | 'scale' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = '',
  animationType = 'fade',
  delay = 0,
  duration = 600,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    switch (animationType) {
      case 'fade':
        return `${baseClasses} ${isVisible ? 'opacity-100' : 'opacity-0'}`;
      case 'slide':
        return `${baseClasses} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`;
      case 'scale':
        return `${baseClasses} transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;
      default:
        return '';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}