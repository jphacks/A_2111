import styles from '../styles/Home.module.scss'
// import maskPic from '../assets/mask.png'
import maskOpenVideo from '../assets/maskOpen.mp4'
import maskCloseVideo from '../assets/maskClose.mp4'
import {
  Box,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Switch
} from '@chakra-ui/react'
import { BsPersonPlus } from 'react-icons/bs'
import { useDisclosure } from '@chakra-ui/hooks'
import SwitchMode from '../components/SwitchMode'
import ModalQrBody from '../components/ModalQrBody'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Redirect } from 'react-router-dom'
import NavigateBTInitialize from '../components/NavigateBTInitialize'
import { useLocation } from 'react-router-dom'
import RegisterFriend from '../components/RegisterFriend'
import Header from '../components/header'
import Pairing from '../components/Pairing'

const Home = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search)
  }
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    shouldShowNewRegistration,
    isMaskOpen,
    setMaskOpen,
    familiars,
    isScanningLE,
    notPairedYet,
    ch,
    userId
  } = useContext(AppContext)
  const query = useQuery()
  if (shouldShowNewRegistration) {
    return <Redirect to="/signup" />
  }
  console.log(userId)

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

  return (
    <div>
      <RegisterFriend query={query} />
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>マイ QR コード</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className={styles.qrcodeSentence}>
              友達がこのQRコードをスキャンすると、あなたを友達に追加できます。
            </div>
            <ModalQrBody text={window.location.origin + '?register=' + userId} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <NavigateBTInitialize />
      <div className={styles.headerContainer}>
        <Header />
        <p className={styles.userName}>{name}さん</p>
      </div>
      <SwitchMode />

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
          <div style={{ textAlign: 'center', transform: 'scale(3)' }}>
            <Switch onChange={handleMaskChange} colorScheme="facebook" isChecked={!isMaskOpen} />
          </div>
        </>
      )}
      <div className={styles.friendList}>
        <HStack spacing="50vw">
          <p className={styles.friendListTitle}> 友達一覧</p>
          <Button variant="ghost" onClick={onOpen}>
            <BsPersonPlus size={25} />
          </Button>
        </HStack>
        <hr className={styles.border} />
        {/* TODO: コンポーネントに切り出したい↓ */}
        {familiars?.length
          ? familiars.map((person, i) => (
              <Box
                key={i}
                boxShadow="xs"
                w="100%"
                p={3}
                marginBottom="1.5px"
                _hover={{ background: 'gray.200' }}
              >
                <p className={styles.friendName}>{person}</p>
              </Box>
            ))
          : null}
      </div>
    </div>
  )
}

export default Home
