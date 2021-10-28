import styles from '../styles/Home.module.scss'
import maskPic from '../assets/mask.png'
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

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { shouldShowNewRegistration, isMaskOpen, setMaskOpen, familiars, isScanningLE } =
    useContext(AppContext)

  if (shouldShowNewRegistration) {
    return <Redirect to="/signup" />
  }

  const handleMaskChange = () => {
    setMaskOpen(!isMaskOpen)
  }

  return (
    <div>
      <NavigateBTInitialize />
      <div className={styles.headerContainer}>
        <p>**** さん</p>
        <hr className={styles.border} />
        <SwitchMode />
      </div>
      <p>
        <small>{isScanningLE && <>BlueTooth on&nbsp;</>}</small>
      </p>
      <div className={styles.mask}>
        {/* @usatyo ここお願い！ */}
        {isMaskOpen ? (
          <img className={styles.maskPic} src={maskPic} alt="open mask" />
        ) : (
          <img className={styles.maskPic} src={maskPic} alt="closed mask" />
        )}

        <p>マスク{isMaskOpen ? '外し中' : '着用中'}</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Switch onChange={handleMaskChange} colorScheme="orange" isChecked={!isMaskOpen} />
      </div>
      <div className={styles.friendList}>
        <HStack spacing="50vw">
          <p className={styles.friendListTitle}> 友達一覧</p>
          <Button variant="ghost" onClick={onOpen}>
            <BsPersonPlus size={25} />
          </Button>
          <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>マイ QR コード</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className={styles.qrcodeSentence}>
                  友達がこのQRコードをスキャンすると、あなたを友達に追加できます。
                </div>
                <ModalQrBody
                  text={'https://garigari-mask.com/qr?from=976fae18-031d-461e-92d7-bcfe1d72d8fe'}
                />
              </ModalBody>
            </ModalContent>
          </Modal>
        </HStack>
        <hr className={styles.border} />
        {/* TODO: コンポーネントに切り出したい↓ */}
        {familiars.length
          ? familiars.map((person, i) => (
              <Box
                key={i}
                boxShadow="xs"
                w="100%"
                p={3}
                marginBottom="1.5px"
                _hover={{ background: 'gray.200' }}
              >
                <p className={styles.friendName}>{person.name}</p>
              </Box>
            ))
          : null}
      </div>
    </div>
  )
}

export default Home
