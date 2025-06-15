import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from '@components/ui/SkeletonComponent/Skeleton';
import style from './Skeleton.module.scss';
import clsx from 'clsx';

const meta: Meta<typeof Skeleton> = {
  title: 'UI/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  args: {
    width: 120,
    height: 20,
    variant: 'square',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['square', 'round'],
    },
    width: {
      control: { type: 'text' },
    },
    height: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {
  args: {
    width: 200,
    height: 30,
    variant: 'square',
  },
};

export const VariantGallery: Story = {
  render: () => (
    <div className={style.mainSkeletonContainer}>
      <Skeleton width={60} height={60} variant="round" />
      <Skeleton width={100} height={20} variant="square" />
    </div>
  ),
};

export const SizeGallery: Story = {
  render: () => (
    <div className={style.mainSkeletonContainer}>
      <Skeleton width={200} height={10} />
      <Skeleton width={200} height={20} />
      <Skeleton width={200} height={30} />
      <Skeleton width={200} height={40} />
    </div>
  ),
};

export const CardLoaderDemo: Story = {
  render: () => (
    <section className={style.skeletonCardContainer}>
      <div className={style.skeletonCard}>
        <Skeleton width={80} height={80} variant="round" />
        <Skeleton width="80%" height={16} />
        <Skeleton width="60%" height={16} />
        <Skeleton width="100%" height={40} variant="square" />
      </div>
      <div className={clsx(style.skeletonCard, style.skeletonCardDark)}>
        <Skeleton width={80} height={80} variant="round" />
        <Skeleton width="80%" height={16} />
        <Skeleton width="60%" height={16} />
        <Skeleton width="100%" height={40} variant="square" />
      </div>
    </section>
    
  ),
};
