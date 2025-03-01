/**
 * useIsMobile.ts
 * -------------------
 * Custom hook to detect if the user is on a mobile device based on screen width.
 */

import { useState, useEffect } from 'react';

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkMobile(); // Check on mount

    window.addEventListener('resize', checkMobile); // Listen for resizes
    return () => window.removeEventListener('resize', checkMobile); // Cleanup
  }, []);

  return isMobile;
}
