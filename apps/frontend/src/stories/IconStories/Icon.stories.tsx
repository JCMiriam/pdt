import type { Meta, StoryObj } from '@storybook/react'
import { Icon } from '@components/ui/IconComponent/Icon'
import { iconNames } from '@lib/icons'
import type { Size } from '@shared-types/icon'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: iconNames,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'color',
    },
  },
}
export default meta

type Story = StoryObj<typeof Icon>

export const Playground: Story = {
  args: {
    icon: 'crown',
    size: 'md',
    color: 'black',
  },
}

export const SizeGallery = () => {
  const sizes: Size[] = ['sm', 'md', 'lg', 'xl']
  const icon = 'crown'

  return (
    <section style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      {sizes.map((size) => (
        <div key={size} style={{ textAlign: 'center' }}>
          <Icon icon={icon} size={size} />
          <div style={{ fontSize: 12, marginTop: 4 }}>{size}</div>
        </div>
      ))}
    </section>
  )
}

export const IconGallery = () => (
  <section style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
    {iconNames.map((icon) => (
      <div key={icon} style={{ textAlign: 'center', width: 80 }}>
        <Icon icon={icon} size="md" />
        <div style={{ fontSize: 12, marginTop: 4 }}>{icon}</div>
      </div>
    ))}
  </section>
)
