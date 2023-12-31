const { useState, useEffect } = require("react");

// This is the custom hook for judging the window size of the physical device
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia(query);
  
      // Function to update matches based on the media query
      const updateMatches = () => setMatches(mediaQuery.matches);
  
      // Initial check and setup listener
      updateMatches();
      mediaQuery.addListener(updateMatches);
  
      // Cleanup: remove the listener when the component unmounts
      return () => mediaQuery.removeListener(updateMatches);
    }, [query]);
  
    return matches;
  }