import type { Meta, StoryObj } from '@storybook/react'
import Button from '@components/ui/ButtonComponent/Button'
import { iconNames } from '@lib/icons'
import styles from './Button.module.scss'

const mockButtonProps = {
  text: 'Click me',
  icon: 'crown',
  iconPosition: 'left',
} as const

const variants = ['primary', 'secondary', 'danger', 'alert', 'success'] as const
const sizes = ['sm', 'md', 'lg'] as const

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    ...mockButtonProps,
    size: 'md',
    variant: 'primary',
    style: 'solid',
  },
  argTypes: {
    icon: {
      control: 'select',
      options: iconNames,
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Playground: Story = {
  args: {
    ...mockButtonProps,
  }
}

export const SolidTextButtons: Story = {
  render: () => (
    <div className={styles.buttonsVariantsGallery}>
      {variants.map((variant) => (
        <Button
          key={`solid-text-${variant}`}
          {...mockButtonProps}
          icon={undefined}
          style="solid"
          variant={variant}
          size="md"
        />
      ))}
    </div>
  )
}

export const OutlineTextButtons: Story = {
  render: () => (
    <div className={styles.buttonsVariantsGallery}>
      {variants.map((variant) => (
        <Button
          key={`outline-text-${variant}`}
          {...mockButtonProps}
          icon={undefined}
          style="outline"
          variant={variant}
          size="md"
        />
      ))}
    </div>
  )
}

export const SolidIconButtons: Story = {
  render: () => (
    <div className={styles.buttonsVariantsGallery}>
      {variants.map((variant) => (
        <Button
          key={`solid-icon-${variant}`}
          {...mockButtonProps}
          style="solid"
          variant={variant}
          size="md"
        />
      ))}
    </div>
  )
}

export const SolidSizeGallery: Story = {
  render: () => (
    <div className={styles.buttonsSizeGallery}>
      {sizes.map((size) => (
        <div className={styles.buttonsSizeGalleryContainer}>
          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} text={undefined} size={size} style="solid" variant="primary" />
          </div>

          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} text={undefined} size={size} style="solid" iconShape="default" variant="primary" />
          </div>

          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} icon={undefined} size={size} style="solid" variant="primary" />
          </div>
          
          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} size={size} style="solid" variant="primary" />
          </div>
        </div>
      ))}
    </div>
  )
}

export const OutlineSizeGallery: Story = {
  render: () => (
    <div className={styles.buttonsSizeGallery}>
      {sizes.map((size) => (
        <div className={styles.buttonsSizeGalleryContainer}>
          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} text={undefined} size={size} style="outline" variant="primary" />
          </div>

          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} text={undefined} size={size} style="outline" iconShape="default" variant="primary" />
          </div>

          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} icon={undefined} size={size} style="outline" variant="primary" />
          </div>
          
          <div className={styles.buttonsSizeGalleryContent}>
            <Button {...mockButtonProps} size={size} style="outline" variant="primary" />
          </div>
        </div>
      ))}
    </div>
  )
}
