import React from 'react'
import { render, screen } from '@testing-library/react'
import { Icon } from '../Icon'
import type { IconName } from '@shared-types/icon'

jest.mock('@lib/icons', () => {
  const MockSvg = (props: React.SVGProps<SVGSVGElement>) => (
    <svg data-testid="mock-icon" {...props} />
  )

  return {
    iconMap: {
      cross: MockSvg,
      crown: MockSvg,
      pencil: MockSvg,
      picture: MockSvg,
    }
  }
})

describe('Icon component', () => {
  const defaultIcon: IconName = 'cross'

  it('renders correct SVG component from iconMap', () => {
    render(<Icon icon={defaultIcon} />)
    const svg = screen.getByTestId('mock-icon')
    expect(svg).toBeInTheDocument()
  })

  it('applies correct size from sizeMap', () => {
    render(<Icon icon={defaultIcon} size="lg" />)
    const svg = screen.getByTestId('mock-icon')
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  })

  it('applies default size "md" when size is not provided', () => {
    render(<Icon icon={defaultIcon} />)
    const svg = screen.getByTestId('mock-icon')
    expect(svg).toHaveAttribute('width', '16')
    expect(svg).toHaveAttribute('height', '16')
  })

  it('applies custom color and className', () => {
    render(<Icon icon={defaultIcon} color="red" className="test-class" />)
    const svg = screen.getByTestId('mock-icon')
    expect(svg).toHaveAttribute('fill', 'red')
    expect(svg).toHaveClass('test-class')
  })

  it('uses default color "currentColor" when not provided', () => {
    render(<Icon icon={defaultIcon} />)
    const svg = screen.getByTestId('mock-icon')
    expect(svg).toHaveAttribute('fill', 'currentColor')
  })
})
