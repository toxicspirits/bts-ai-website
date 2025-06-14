import { useEffect, useRef, useState } from 'react';

interface UseLazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
}

export const useLazyImage = ({ src, alt, placeholder = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' }: UseLazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            imgRef.current.src = src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  return {
    imgRef,
    isLoaded,
    error,
    handleLoad,
    handleError,
    placeholder,
  };
}; 