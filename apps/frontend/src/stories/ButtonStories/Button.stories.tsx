import Button from '@components/ui/ButtonComponent/Button';
import type { Meta, StoryObj } from '@storybook/react';
import { iconNames } from '@lib/icons';

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
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconNames,
    },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const WithIcon: Story = {
  args: {
    icon: 'pencil',
    text: 'Editar',
  },
}

export const IconOnly: Story = {
  args: {
    icon: 'crown',
    style: 'icon',
    variant: 'primary',
    size: 'sm',
    text: undefined,
  },
}

export const GalleryButtons = () => {
  const variants = ['primary', 'secondary', 'danger', 'alert', 'success', 'link'] as const
  const styles = ['solid', 'outline', 'icon'] as const

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {styles.map((style) => (
        <div key={style}>
          <h4 style={{ marginBottom: '0.5rem' }}>Style: {style}</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {variants.map((variant) => (
              <Button
                key={`${style}-${variant}`}
                text={style !== 'icon' ? variant : undefined}
                icon="crown"
                style={style}
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

