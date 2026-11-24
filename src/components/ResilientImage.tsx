import { useEffect, useRef, useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  imgClassName = 'object-cover',
  fallbackTitle,
  loading = 'lazy',
  fetchPriority = 'auto',
}: ResilientImageProps) {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [hasError, setHasError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setHasError(false);
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#191920] via-[#141419] to-[#0B0B0D] text-[#A5A5AD] p-6 text-center select-none ${className}`}
      >
        <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] flex items-center justify-center mb-3 text-[#FF6B35]">
          <ImageIcon className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-white/90 max-w-[22ch] leading-snug">
          {fallbackTitle || alt}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#141419] ${className}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#181820] to-[#111116]"
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full ${imgClassName} transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
