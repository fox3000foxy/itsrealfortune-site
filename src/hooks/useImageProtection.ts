import { useEffect } from 'react';

function useImageProtection() {
  useEffect(() => {
    const preventDrag = (e: Event) => e.preventDefault();

    document.addEventListener('dragstart', preventDrag);
    document.addEventListener('contextmenu', preventDrag);

    return () => {
      document.removeEventListener('dragstart', preventDrag);
      document.removeEventListener('contextmenu', preventDrag);
    };
  }, []); // Dependency array ensures this runs only once
}

export { useImageProtection };

