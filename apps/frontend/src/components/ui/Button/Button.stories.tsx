import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    text: 'Click me',
    size: 'md',
    variant: 'primary',
    style: 'solid',
    iconPosition: 'left',
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    icon: <span>🔥</span>,
    text: 'Fire',
  },
};

export const IconOnly: Story = {
  args: {
    icon: <span>🛠</span>,
    style: 'icon',
    variant: 'primary',
    size: 'sm',
  },
};
