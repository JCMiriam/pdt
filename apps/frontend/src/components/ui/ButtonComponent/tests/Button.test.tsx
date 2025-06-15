import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../Button'

const checkButtonDefaults = () => {
  render(
    <Button text="Defaults" variant="primary" style="solid" size="md" />
  )

  const button = screen.getByRole('button')

  expect(button).toHaveAttribute('type', 'button')
  expect(button).not.toBeDisabled()

  expect(button).not.toHaveClass('icon-only')
  expect(button).not.toHaveClass('icon-round')

  expect(button.querySelector('.loader')).not.toBeInTheDocument()
}

jest.mock('@components/ui/IconComponent/Icon', () => ({
    Icon: ({ className }: { className: string }) => <span data-testid="icon" className={className} />
}))

describe('Button component', () => {
    const sizes = ['sm', 'md', 'lg'] as const

    const defaultProps = {
        text: 'Click me',
        icon: 'cross',
        variant: 'primary',
        style: 'solid',
        size: 'md',
        onClick: jest.fn(),
        iconShape: 'round',
        iconPosition: 'left',
        type: 'button',
        loading: false,
        disabled: false
    } as const

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('applies default props when omitted', () => {
        checkButtonDefaults()
    })

    sizes.forEach((size) => {
        it(`applies size class "${size}"`, () => {
            render(<Button text={`Size ${size}`} variant="primary" style="solid" size={size} />)
            const button = screen.getByRole('button')
            expect(button).toHaveClass(size)
        })
    })

    it('renders with icon on the left', () => {
        render(<Button {...defaultProps} iconPosition="left" />)
        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('icon--left')
    })

    it('renders with icon on the right', () => {
        render(<Button {...defaultProps} iconPosition="right" />)
        const icon = screen.getByTestId('icon')
        expect(icon).toHaveClass('icon--right')
    })

    it('renders icon-only round button', () => {
        render(<Button {...defaultProps} text={undefined} />)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('icon-round')
        expect(button).not.toHaveTextContent(/.+/)
    })

    it('renders icon-only default shape button', () => {
        render(<Button {...defaultProps} text={undefined} iconShape="default" />)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('icon-only')
    })

    it('calls onClick when clicked', () => {
        render(<Button {...defaultProps} />)
        fireEvent.click(screen.getByRole('button'))
        expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
    })

    it('disables the button when disabled', () => {
        render(<Button {...defaultProps} disabled />)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('disables the button when loading', () => {
        render(<Button {...defaultProps} loading />)
        expect(screen.getByRole('button')).toBeDisabled()
    })

    it('shows loader when loading', () => {
        render(<Button {...defaultProps} loading />)
        expect(screen.getByRole('button').querySelector('.loader')).toBeInTheDocument()
    })

    it('applies extra className', () => {
        render(<Button {...defaultProps} className="extra-class" />)
        expect(screen.getByRole('button')).toHaveClass('extra-class')
    })

    it('applies correct variant, style and size classes', () => {
        render(<Button {...defaultProps} variant="danger" style="outline" size="lg" />)
        const button = screen.getByRole('button')
        expect(button).toHaveClass('danger')
        expect(button).toHaveClass('outline')
        expect(button).toHaveClass('lg')
    })

    it('does not apply icon-only or icon-round when both icon and text are present', () => {
        render(<Button {...defaultProps} />)
        const button = screen.getByRole('button')
        expect(button).not.toHaveClass('icon-only')
        expect(button).not.toHaveClass('icon-round')
    })

    it('applies "md" size class by default when size is not provided', () => {
        render(
            <Button
                text="Default size"
                variant="primary"
                style="solid"
            />
        )

        const button = screen.getByRole('button')
        expect(button).toHaveClass('md')
    })
})
