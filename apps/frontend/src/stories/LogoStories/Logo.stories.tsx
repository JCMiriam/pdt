import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@components/ui/LogoComponent/Logo'

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'radio',
      options: ['fullcolor', 'monochrome'],
    },
    customColor: {
      control: 'color',
    },
  },
}

export default meta
type Story = StoryObj<typeof Logo>

export const Playground: Story = {
  args: {
    size: 'md',
    color: 'fullcolor',
    customColor: '#000000',
  },
}

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '2rem', padding: '2rem' }}>
      <div>
        <h4>Fullcolor</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Logo size="sm" color="fullcolor" />
          <Logo size="md" color="fullcolor" />
          <Logo size="lg" color="fullcolor" />
        </div>
      </div>

      <div>
        <h4>Monochrome (default color)</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Logo size="sm" color="monochrome" />
          <Logo size="md" color="monochrome" />
          <Logo size="lg" color="monochrome" />
        </div>
      </div>

      <div>
        <h4>Monochrome (custom color)</h4>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Logo size="sm" color="monochrome" customColor="#EF4444" />
          <Logo size="md" color="monochrome" customColor="#3B82F6" />
          <Logo size="lg" color="monochrome" customColor="#10B981" />
        </div>
      </div>
    </div>
  )
}
