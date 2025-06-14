import { cn } from "@/lib/utils";
import { useLazyImage } from "@/hooks/useLazyImage";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
}

export const LazyImage = ({
  src,
  alt,
  placeholder,
  className,
  ...props
}: LazyImageProps) => {
  const { imgRef, isLoaded, error, handleLoad, handleError, placeholder: defaultPlaceholder } = useLazyImage({
    src,
    alt,
    placeholder,
  });

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <img
        ref={imgRef}
        src={placeholder || defaultPlaceholder}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          error && "opacity-50"
        )}
        onLoad={handleLoad}
        onError={handleError}
        loading="lazy"
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
}; 