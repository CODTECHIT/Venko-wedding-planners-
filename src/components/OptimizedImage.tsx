import React, { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const OptimizedImage = React.memo(function OptimizedImage({ src, alt, className = "", priority = false }: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      // Preload priority images immediately
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      return () => { document.head.removeChild(link); };
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" } // Start loading 400px before visible
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, src]);

  // Check if already cached
  useEffect(() => {
    if (inView && imgRef.current?.complete) {
      setLoaded(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-secondary/50 animate-pulse" />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "low"}
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
});

export default OptimizedImage;
