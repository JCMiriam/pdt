import type { Meta, StoryObj } from '@storybook/react'
import Logo from '@components/ui/LogoComponent/Logo'
import style from './Logo.module.scss';

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
    <div className={style.gridLogoContainer}>
      <div>
        <h4>Fullcolor</h4>
        <div className={style.mainLogoContainer}>
          <Logo size="sm" color="fullcolor" />
          <Logo size="md" color="fullcolor" />
          <Logo size="lg" color="fullcolor" />
        </div>
      </div>

      <div>
        <h4>Monochrome (default color)</h4>
        <div className={style.mainLogoContainer}>
          <Logo size="sm" color="monochrome" />
          <Logo size="md" color="monochrome" />
          <Logo size="lg" color="monochrome" />
        </div>
      </div>

      <div>
        <h4>Monochrome (custom color)</h4>
        <div className={style.mainLogoContainer}>
          <Logo size="sm" color="monochrome" customColor="var(--yellow-sand)" />
          <Logo size="md" color="monochrome" customColor="var(--red-alert)" />
          <Logo size="lg" color="monochrome" customColor="var(--green-water)" />
        </div>
      </div>
    </div>
  )
}
