import { useState, useEffect } from "react";

/**
 * Custom hook for handling header scroll behavior
 * @param {number} threshold - Scroll threshold in pixels (default: 20)
 * @returns {boolean} isScrolled - Whether the page has been scrolled past the threshold
 */
export const useHeaderScroll = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > threshold);
    };

    // Add passive listener for better mobile performance
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isScrolled;
};

/**
 * Hook to determine if header should show background based on current page and scroll state
 * @param {string} currentPath - Current page path
 * @param {boolean} isScrolled - Whether page is scrolled
 * @returns {boolean} shouldShowBackground - Whether header should show background
 */
export const useHeaderBackground = (currentPath, isScrolled) => {
  const isHomePage = currentPath === "/";
  return !isHomePage || isScrolled;
};
