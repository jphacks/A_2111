import styles from '../styles/Home.module.scss'
// import maskPic from '../assets/mask.png'
import maskOpenVideo from '../assets/maskOpen2.mp4'
import maskCloseVideo from '../assets/maskClose2.mp4'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Switch
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Redirect } from 'react-router-dom'
import NavigateBTInitialize from '../components/NavigateBTInitialize'
// import { useLocation } from 'react-router-dom'
import Header from '../components/header'
import Pairing from '../components/Pairing'
import SelectDemoModeModal from '../components/SelectDemoModeModal'
import SelectUserScreen from './SelectUserScreen'
import MyChart from '../components/myChart'

// const useQuery = () => new URLSearchParams(useLocation().search)

const Home = () => {
  const { isOpen, onClose } = useDisclosure()
  const {
    shouldShowNewRegistration,
    isMaskOpen,
    setMaskOpen,
    isScanningLE,
    notPairedYet,
    ch,
    signedInUser
  } = useContext(AppContext)

  const handleMaskChange = () => {
    const nextStatus = !isMaskOpen
    if (ch) {
      ch.writeValue(Uint8Array.of(nextStatus ? 1 : 0)).then(() => {
        console.log(nextStatus ? 'open!' : 'close!')
        // setLoadingMaskToMove(false)
      })
    }
    setMaskOpen(nextStatus)
  }
  const name = localStorage.getItem('GARIGARI_MASK_USER_NAME_KEY')

  if (!signedInUser) {
    return (
      <>
        <SelectUserScreen />
        <SelectDemoModeModal />
      </>
    )
  }

  if (shouldShowNewRegistration) {
    return <Redirect to="/signup" />
  }

  return (
    <div>
      <SelectDemoModeModal />
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>マイ QR コード</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles.qrcodeSentence}>
              友達がこのQRコードをスキャンすると、あなたを友達に追加できます。
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
      <NavigateBTInitialize />
      <div className={styles.headerContainer}>
        <Header />
        <p className={styles.userName}>{name}さん</p>
        {/* TODO:名前を表示させる */}
      </div>

      <p>
        <small>{isScanningLE && <>BlueTooth on&nbsp;</>}</small>
      </p>
      {notPairedYet ? (
        <Pairing />
      ) : (
        <>
          <div className={styles.mask}>
            {isMaskOpen ? (
              <video className={styles.maskPic} src={maskOpenVideo} autoPlay muted></video>
            ) : (
              <video className={styles.maskPic} src={maskCloseVideo} autoPlay muted></video>
            )}
            <p>マスク{isMaskOpen ? '外し中' : '着用中'}</p>
          </div>
          <div style={{ textAlign: 'center', transform: 'scale(1)' }}>
            <Switch
              onChange={handleMaskChange}
              colorScheme="facebook"
              size="lg"
              isChecked={!isMaskOpen}
            />
          </div>
        </>
      )}
      <div style={{ height: '105vh' }}>
        <MyChart />
      </div>
    </div>
  )
}

export default Home
