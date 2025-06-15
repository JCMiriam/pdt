import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import Modal from '@components/ui/ModalComponent/Modal'
import type { ModalProps } from '@components/ui/ModalComponent/types'
//TODO: Review styles
import style from './Modal.module.scss'

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

const defaultHeader = <h2 className="modal-title">Test modal</h2>

const ModalPlayground = (args: ModalProps) => {
  const [open, setOpen] = useState(true)

  return (
    <section className={style.baseModalContainer}>
      <button onClick={() => setOpen(true)}>Open modal</button>
      <Modal
        {...args}
        isOpen={open}
        onClose={args.closable !== false ? () => setOpen(false) : undefined}
        header={args.header ?? defaultHeader}
      >
        <p>Lorem ipsum dolor sit amet</p>
      </Modal>
    </section>
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
      <section className={style.baseModalContainer}>
        <div className={style.baseModalContainer}>
          <h4>With overlap and closable</h4>
          <Modal isOpen closable showOverlay header={<h2>Standard modal</h2>} onClose={() => {}}>
            <p>This modal is closable and has an overlay.</p>
          </Modal>
        </div>

        <div className={style.baseModalContainer}>
          <h4>Without overlay</h4>
          <Modal isOpen showOverlay={false} closable header={<h2>Without overlay</h2>} onClose={() => {}}>
            <p>There is no background behind the modal.</p>
          </Modal>
        </div>

        <div className={style.baseModalContainer}>
          <h4>Permanent modal (not closable)</h4>
          <Modal isOpen closable={false} showOverlay={false} header={<h2>Fixed</h2>}>
            <p>This modal is permanently open.</p>
          </Modal>
        </div>
      </section>
    )
  },
}
