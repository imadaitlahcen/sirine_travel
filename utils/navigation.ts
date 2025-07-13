// Smooth scrolling utility functions

export interface ScrollOptions {
  behavior?: 'smooth' | 'auto';
  block?: 'start' | 'center' | 'end' | 'nearest';
  inline?: 'start' | 'center' | 'end' | 'nearest';
  offset?: number; // Additional offset for fixed headers
  duration?: number; // Animation duration in milliseconds
}

/**
 * Smooth scroll to an element by ID
 * @param elementId - The ID of the element to scroll to
 * @param options - Scroll options
 */
export const scrollToElement = (elementId: string, options: ScrollOptions = {}) => {
  const {
    behavior = 'smooth',
    block = 'start',
    inline = 'nearest',
    offset = 0,
    duration = 800
  } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID '${elementId}' not found`);
    return false;
  }

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  // Use custom animation if duration is specified and different from default
  if (duration !== 800 && behavior === 'smooth') {
    animateScrollTo(offsetPosition, duration);
  } else {
    window.scrollTo({
      top: offsetPosition,
      behavior
    });
  }

  return true;
};

/**
 * Smooth scroll to top of page
 * @param behavior - Scroll behavior
 */
export const scrollToTop = (behavior: 'smooth' | 'auto' = 'smooth') => {
  window.scrollTo({
    top: 0,
    behavior
  });
};

/**
 * Check if an element is in viewport
 * @param elementId - The ID of the element to check
 * @param threshold - Percentage of element that should be visible (0-1)
 */
export const isElementInViewport = (elementId: string, threshold: number = 0.1): boolean => {
  const element = document.getElementById(elementId);
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height * threshold) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width * threshold) >= 0);

  return vertInView && horInView;
};

/**
 * Add smooth scroll behavior to anchor links
 * @param options - Scroll options including offset and duration
 */
export const initializeSmoothScrolling = (options: ScrollOptions = {}) => {
  const { offset = 80, duration = 800 } = options;
  
  // Handle hash links on page load
  if (window.location.hash) {
    setTimeout(() => {
      const elementId = window.location.hash.substring(1);
      scrollToElement(elementId, { offset, duration });
    }, 100);
  }

  // Handle anchor link clicks
  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
    
    if (link && link.hash) {
      e.preventDefault();
      const elementId = link.hash.substring(1);
      
      if (scrollToElement(elementId, { offset, duration })) {
        // Update URL without triggering page reload
        history.pushState(null, '', link.hash);
      }
    }
  };

  document.addEventListener('click', handleClick);
  
  // Return cleanup function
  return () => {
    document.removeEventListener('click', handleClick);
  };
};

/**
 * Navigate to a different page with smooth transition
 * @param router - Next.js router instance
 * @param url - The URL to navigate to
 * @param options - Navigation options
 */
export const navigateWithTransition = async (
  router: any,
  url: string, 
  options: { 
    showProgress?: boolean;
    showLoading?: boolean;
    scrollToTop?: boolean;
    locale?: string;
    duration?: number;
    replace?: boolean;
  } = {}
) => {
  const { 
    showProgress = true, 
    showLoading = true, 
    scrollToTop = true, 
    locale,
    duration = 300,
    replace = false 
  } = options;

  try {
    // Show loading indicator if needed
    if (showLoading || showProgress) {
      document.body.classList.add('page-transitioning');
    }

    // Scroll to top before navigation if requested
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Navigate using Next.js router
    if (replace) {
      if (locale) {
        await router.replace(url, url, { locale });
      } else {
        await router.replace(url);
      }
    } else {
      if (locale) {
        await router.push(url, url, { locale });
      } else {
        await router.push(url);
      }
    }

  } catch (error) {
    console.error('Navigation error:', error);
  } finally {
    // Remove loading indicator
    if (showLoading || showProgress) {
      setTimeout(() => {
        document.body.classList.remove('page-transitioning');
      }, duration);
    }
  }
};

/**
 * Create a debounced scroll handler
 * @param callback - Function to call on scroll
 * @param delay - Debounce delay in milliseconds
 */
export const createScrollHandler = (callback: () => void, delay: number = 100) => {
  let timeoutId: NodeJS.Timeout;
  
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(callback, delay);
  };
};

/**
 * Get scroll progress (0-1) of the page
 */
export const getScrollProgress = (): number => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
};

/**
 * Animate scroll to position with custom easing
 * @param targetPosition - Target scroll position
 * @param duration - Animation duration in milliseconds
 * @param easing - Easing function
 */
export const animateScrollTo = (
  targetPosition: number,
  duration: number = 800,
  easing: (t: number) => number = (t) => t * (2 - t) // easeOutQuad
) => {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  const animateScroll = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    
    window.scrollTo(0, startPosition + distance * easedProgress);
    
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  requestAnimationFrame(animateScroll);
};

/**
 * Add scroll-based animations to elements
 * @param elements - Elements to animate
 * @param options - Animation options
 */
export const addScrollAnimations = (
  elements: NodeListOf<Element> | Element[],
  options: {
    threshold?: number;
    rootMargin?: string;
    animationClass?: string;
  } = {}
) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    animationClass = 'animate-in'
  } = options;

  if (!('IntersectionObserver' in window)) {
    // Fallback for browsers without IntersectionObserver
    elements.forEach(el => el.classList.add(animationClass));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold, rootMargin }
  );

  elements.forEach(el => observer.observe(el));
};