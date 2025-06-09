import clsx from 'clsx';
import styles from './Skeleton.module.scss';

type SkeletonProps = {
  width?: number | string;
  height?: number | string;
  variant?: 'square' | 'round';
};

const Skeleton = ({
  width = '100%',
  height = '1rem',
  variant = 'square'
}: SkeletonProps) => {
  return (
    <div
      className={clsx( 
        styles.skeleton,
        variant === 'round' ? styles.round : styles.square,
      )}
      style={{ width, height }}
    />
  );
};

export default Skeleton;
