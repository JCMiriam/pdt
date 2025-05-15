import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Modal from '@components/ui/ModalComponent/Modal'
import type { ModalProps } from '@components/ui/ModalComponent/types'

const meta: Meta<typeof Modal> = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    className: { control: 'text' },
    showOverlay: { control: 'boolean' },
    closable: { control: 'boolean' },
    header: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const defaultHeader = <h2 className="modal-title">Modal de prueba</h2>

const ModalPlayground = (args: ModalProps) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
      <Modal
        {...args}
        isOpen={open}
        onClose={args.closable !== false ? () => setOpen(false) : undefined}
        header={args.header ?? defaultHeader}
      >
        <p>Este es un modal de prueba</p>
      </Modal>
    </>
  )
}

export const Playground: Story = {
  render: ModalPlayground,
  args: {
    isOpen: true,
    closable: true,
    showOverlay: true,
  },
}

export const Gallery: Story = {
  render: () => {
    return (
      <div style={{ display: 'grid', gap: '2rem', padding: '2rem', maxWidth: 600 }}>
        <div>
          <h4>Con overlay y cerrable</h4>
          <Modal isOpen closable showOverlay header={<h2>Modal estándar</h2>} onClose={() => {}}>
            <p>Este modal se puede cerrar y tiene overlay.</p>
          </Modal>
        </div>

        <div>
          <h4>Sin overlay</h4>
          <Modal isOpen showOverlay={false} closable header={<h2>Sin overlay</h2>} onClose={() => {}}>
            <p>No hay fondo detrás del modal.</p>
          </Modal>
        </div>

        <div>
          <h4>Modal permanente (no closable)</h4>
          <Modal isOpen closable={false} showOverlay={false} header={<h2>Fijo</h2>}>
            <p>Este modal está permanentemente abierto.</p>
          </Modal>
        </div>
      </div>
    )
  },
}
