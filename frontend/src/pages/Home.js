import styles from '../styles/Home.module.scss'
// import maskPic from '../assets/mask.png'
import maskOpenVideo from '../assets/maskOpen.mp4'
import maskCloseVideo from '../assets/maskClose.mp4'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
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
import PictureModal from '../components/PictureModal'

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
  // const name = localStorage.getItem('GARIGARI_MASK_USER_NAME_KEY')

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
        <p className={styles.userName}>
          {signedInUser}
          <span style={{ fontSize: '20px' }}> さん</span>
        </p>
      </div>

      <p>
        <small>{isScanningLE && <>BlueTooth on&nbsp;</>}</small>
      </p>
      {notPairedYet ? (
        <Pairing />
      ) : (
        <>
          <PictureModal />
          <div className={styles.mask}>
            {isMaskOpen ? (
              <video className={styles.maskPic} src={maskOpenVideo} autoPlay muted></video>
            ) : (
              <video className={styles.maskPic} src={maskCloseVideo} autoPlay muted></video>
            )}
            <p>マスク{isMaskOpen ? '外し中' : '着用中'}</p>
          </div>
          <div
            href="https://youtu.be/VOmlp4k5T0A"
            target="_blank"
            rel="noreferrer"
            data-keyframers-credit
            style={{ color: '#444' }}
          ></div>
          <script src="https://codepen.io/shshaw/pen/QmZYMG.js"></script>

          <div id="app" style={{marginBottom:"60px" , marginTop:"20px"}} onChange={handleMaskChange}>
            <label className={styles.checker}>
              <input className={styles.checkbox} type="checkbox" />
              <div className={styles.checkbg}></div>
              <div className={styles.checkmark}>
                <svg viewBox="0 0 100 100">
                  <path
                    d="M20,55 L40,75 L77,27"
                    fill="none"
                    stroke="#FFF"
                    stroke-width="15"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </label>
          </div>
        </>
      )}
      <div style={{ height: '110vh' }}>
        <MyChart />
      </div>
    </div>
  )
}

export default Home
