import Logo from "@components/ui/LogoComponent/Logo";
import Modal from "@components/ui/ModalComponent/Modal";
import Skeleton from "@components/ui/SkeletonComponent/Skeleton";
import { useTranslation } from "react-i18next"

import styles from './CreateUserModal.module.scss'

const CreateUserModalHeader = () => {
  const { t } = useTranslation();
  // TODO: Cambiar el texto por la variable que recibe el id de la partida
  return (
    <div className={styles.modalHeader}>
      <Logo size="md" color="fullcolor" />
      <div className={styles.modalHeaderData}>
        <span className={styles.modalHeaderInfo}>{t('createUserModal.gameId')}</span>
        <h2 className={styles.modalHeaderId}>#618689133</h2>
      </div>
    </div>
  );
}

const CreateUserModal = () => {
  //const { t } = useTranslation();

  return (
    <Modal isOpen={true} showOverlay={false} closable={false} header={<CreateUserModalHeader />} >
      <Skeleton width="100%" height="2rem" variant="round" />
    </Modal>
  )
}

export default CreateUserModal