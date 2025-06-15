import { useState } from 'react';
import Skeleton from '../SkeletonComponent/Skeleton';
import styles from './Image.module.scss';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  fallbackSrc?: string;
  sizes?: string;
  srcSet?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  variant?: 'square' | 'round';
};

const Image = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallbackSrc = '/fallback.svg',
  sizes = '100vw',
  srcSet,
  objectFit = 'contain',
  variant = 'square',
}: ImageProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const variantClass = variant === 'round' ? styles.round : styles.square;

  return (
    <div
      className={`${styles.wrapper} ${variantClass} ${className}`}
      style={{ width, height }}
    >
      {!loaded && !error && (
        <div className={styles.skeletonWrapper}>
          <Skeleton width={width} height={height} variant={variant} />
        </div>
      )}

      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          className={`${styles.image} ${variantClass} ${
            loaded ? styles.visible : styles.hidden
          }`}
          width={width}
          height={height}
          style={{ objectFit }}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
        />
      ) : !fallbackError ? (
        <img
          src={fallbackSrc}
          alt={`${alt} (fallback)`}
          onError={() => setFallbackError(true)}
          className={`${styles.image} ${variantClass} ${styles.visible}`}
          width={width}
          height={height}
          style={{ objectFit }}
          loading="lazy"
        />
      ) : (
        <div className={`${styles.fallbackError} ${variantClass}`}>
          Image not available
        </div>
      )}
    </div>
  );
};

export default Image;
