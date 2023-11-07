import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollRestoration = () => {
  const location = useLocation();
  const scrollPositions = new Map();

  useEffect(() => {
    return () => {
      // Store the scroll position of the current page before navigating away
      if(document.querySelector('.main-content')) {
        document.querySelector('.main-content').scrollTop = 0;
      }
    };
  }, [location]);

  useEffect(() => {
    // On entering a new route, scroll to the stored position or to the top
    if(document.querySelector('.main-content')) {
      const storedPosition = scrollPositions.get(location.pathname) || 0;
    document.querySelector('.main-content').scrollTop = 0;
    }
  }, [location.pathname]);
};

export default useScrollRestoration;
