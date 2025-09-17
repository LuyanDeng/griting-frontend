import { useEffect, RefObject } from 'react';

function useOutsideClick(
  ref: RefObject<HTMLElement>,
  handler: () => void
): void {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // Check if ref.current exists before using contains
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      
      handler();
    };
    
    document.addEventListener('mousedown', listener);
    
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
}

export default useOutsideClick;