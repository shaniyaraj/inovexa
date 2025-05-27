import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const useCustomAnalytics = () => {
  const location = useLocation();

  const trackVisitor = async (page, referrer = '') => {
    try {
      await axios.post('http://localhost:8000/api/track-visitor', {
        page,
        referrer
      });
    } catch (error) {
      console.error('Error tracking visitor:', error);
    }
  };

  useEffect(() => {
    // Track page view when component mounts or route changes
    const currentPage = location.pathname + location.search;
    const referrer = document.referrer;
    
    trackVisitor(currentPage, referrer);
  }, [location]);

  return { trackVisitor };
};

export default useCustomAnalytics; 