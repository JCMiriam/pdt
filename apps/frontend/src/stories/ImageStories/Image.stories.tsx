import type { Meta, StoryObj } from '@storybook/react';
import Image from '@components/ui/ImageComponent/Image';
import style from './Image.module.scss';

const avatarImages = import.meta.glob('@assets/images/avatars/avatar-*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const avatars = Object.entries(avatarImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, path]) => path);

const meta: Meta<typeof Image> = {
  title: 'UI/Image',
  component: Image,
  tags: ['autodocs'],
  args: {
    src: avatars[0],
    alt: 'Demo image',
    width: 120,
    height: 120,
    variant: 'square',
    objectFit: 'cover',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['square', 'round'],
    },
    objectFit: {
      control: { type: 'select' },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    className: { control: false },
    fallbackSrc: { control: 'text' },
    srcSet: { control: 'text' },
    sizes: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Playground: Story = {};

export const VariantGallery: Story = {
  render: () => (
    <div className={style.gallery}>
      <Image
        src={avatars[1]}
        alt="Round avatar"
        width={80}
        height={80}
        variant="round"
      />
      <Image
        src={avatars[2]}
        alt="Square avatar"
        width={80}
        height={80}
        variant="square"
      />
    </div>
  ),
};

export const WithFallbackDemo: Story = {
  render: () => (
    <Image
      src="/images/non-existent.jpg"
      fallbackSrc="/fallback.svg"
      alt="Fallback image demo"
      width={150}
      height={150}
      variant="round"
    />
  ),
};
