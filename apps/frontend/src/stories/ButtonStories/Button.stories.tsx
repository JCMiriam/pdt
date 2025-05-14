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
};
export default meta;

type Story = StoryObj<typeof Button>;

export const GalleryButtons: Story = {
  render: () => {
    const variants = ['primary', 'secondary', 'danger', 'alert', 'success'] as const;
    const styles = ['solid', 'outline'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {/* 1. Solid solo texto */}
        <div>
          <h4>Solid - Solo texto</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`solid-text-${variant}`}
                text="Texto"
                style="solid"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 2. Outline solo texto */}
        <div>
          <h4>Outline - Solo texto</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`outline-text-${variant}`}
                text="Texto"
                style="outline"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 3. Solid con icono */}
        <div>
          <h4>Solid - Icono + texto</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`solid-icon-text-${variant}`}
                text="Editar"
                icon="pencil"
                iconPosition="left"
                style="solid"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 4. Outline con icono */}
        <div>
          <h4>Outline - Icono + texto</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`outline-icon-text-${variant}`}
                text="Editar"
                icon="pencil"
                iconPosition="left"
                style="outline"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 5. Solid solo icono */}
        <div>
          <h4>Solid - Solo icono</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`solid-icon-only-${variant}`}
                icon="crown"
                style="solid"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 6. Outline solo icono */}
        <div>
          <h4>Outline - Solo icono</h4>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {variants.map((variant) => (
              <Button
                key={`outline-icon-only-${variant}`}
                icon="crown"
                style="outline"
                variant={variant}
                size="md"
              />
            ))}
          </div>
        </div>

        {/* 7. Solid tamaños (primary) */}
        <div>
          <h4>Solid - Variantes de tamaño (primary)</h4>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div
                key={`solid-sizes-${size}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <Button text="Texto" size={size} style="solid" variant="primary" />
                <Button text="Texto" icon="crown" size={size} style="solid" variant="primary" />
                <Button icon="crown" size={size} style="solid" variant="primary" />
              </div>
            ))}
          </div>
        </div>

        {/* 8. Outline tamaños (primary) */}
        <div>
          <h4>Outline - Variantes de tamaño (primary)</h4>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <div
                key={`outline-sizes-${size}`}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                <Button text="Texto" size={size} style="outline" variant="primary" />
                <Button text="Texto" icon="crown" size={size} style="outline" variant="primary" />
                <Button icon="crown" size={size} style="outline" variant="primary" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
