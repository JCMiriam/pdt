export type ModalProps = {
  isOpen: boolean
  onClose?: () => void
  header?: React.ReactNode
  children: React.ReactNode
  className?: string
  showOverlay?: boolean
  closable?: boolean
}
