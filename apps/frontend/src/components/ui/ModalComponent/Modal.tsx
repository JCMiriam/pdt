import React, { useEffect, useRef } from 'react'
import { ModalProps } from './types'
import styles from './Modal.module.scss'

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  header,
  children,
  showOverlay = true,
  closable = true
}) => {
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closable && onClose) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closable, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closable && e.target === overlayRef.current && onClose) {
      onClose()
    }
  }

  return (
    <div className={`${styles.modalOverlay} ${!showOverlay ? 'transparent' : ''}`}
      ref={overlayRef} onClick={handleOverlayClick}>
        <div className={styles.modalContainer} role="dialog" aria-modal="true">
          {header && <div className={styles.modalHeader}>{header}</div>}
          <div className="modal-body">{children}</div>
          {closable && onClose && (
            <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
              ×
            </button>
          )}
        </div>
    </div>
  )
}

export default Modal
