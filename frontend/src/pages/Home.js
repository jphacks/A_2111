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
import ModalQrBody from '../components/ModalQrBody'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { Redirect, useLocation } from 'react-router-dom'
import NavigateBTInitialize from '../components/NavigateBTInitialize'
import RegisterFriend from '../components/RegisterFriend'
import Header from '../components/header'
import Pairing from '../components/Pairing'
import SelectDemoModeModal from '../components/SelectDemoModeModal'
import SelectUserScreen from './SelectUserScreen'
import { Bar, Line } from 'react-chartjs-2';

const useQuery = () => new URLSearchParams(useLocation().search)

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    shouldShowNewRegistration,
    isMaskOpen,
    setMaskOpen,
    familiars,
    isScanningLE,
    notPairedYet,
    ch,
    userId,
    signedInUser
  } = useContext(AppContext)
  const query = useQuery()

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

  // TODO グラフのデータ本物にする
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }
 
  return (
    <div>
      <SelectDemoModeModal />
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
      <Line data={data} options={options} />
      <Bar data={data} options={options} />
    </div>
  )
}

export default Home
