import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Progress,
  Container,
  Code,
  Input
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/toast'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { detect } from 'detect-browser'

const BTUnavailableToastId = 'BTUnavailable'

// 多分、 refer to https://github.com/DamonOehlman/detect-browser/blob/master/src/index.ts#L67
const compatibleBrowsers = ['chrome', 'edge-chromium', 'edge', 'opera', 'opera-mini']

const BTSettingLinkSuffix = '://flags/#enable-experimental-web-platform-features'

const NavigateBTInitialize = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { demoMode, setDemoMode, initialLoading, waitForReloading, setScanningLE } =
    useContext(AppContext)
  const [canUseBT, setCanUseBT] = useState(false) // eslint-disable-line

  const [progressValue, setProgressValue] = useState(0)
  const [msg, setMsg] = useState('Title')
  const [description, setDescription] = useState('')

  const [err, setErr] = useState(null)

  const toast = useToast()
  const browser = detect()
  const isCompatible = compatibleBrowsers.includes(browser.name)

  const startLEScan = () => {
    navigator.bluetooth
      .requestLEScan({
        keepRepeatedDevices: true,
        acceptAllAdvertisements: true
      })
      .then(() => {
        setProgressValue(95)
        setScanningLE(true)
        console.log('requestLEScan() fired. wait...')
        setCanUseBT(true)
        onClose()
        navigator.bluetooth.addEventListener('advertisementreceived', (event) => {
          // console.log(event)
          const id = event.device.id
          console.log(id)
        })
      })
      .catch((e) => setErr(e))
  }
  window.startLEScan = startLEScan

  useEffect(() => {
    if (!navigator.bluetooth) {
      setMsg(`お使いのブラウザ（${browser.name} ${browser.version}）では BlueTooth が使えないよ！`)
      setDescription(`Demoモードで進んでね`)
      setProgressValue(5)
    }
    if (!navigator.bluetooth?.requestLEScan) {
      console.log('no requestLEScan')
      setProgressValue(30)
      if (isCompatible) {
        setMsg(
          <>
            <Code>experimental-web-platform-features</Code>の設定で、web bluetooth
            を使用することができます。
          </>
        )
        if (browser.name === 'chrome') {
          setDescription(
            <>
              <Input value={`chrome${BTSettingLinkSuffix}`} readOnly />
              <br />
              から、機能を有効にしてください。
            </>
          )
        } else if (['edge', 'edge-chromium'].includes(browser.name)) {
          setDescription(
            <>
              <Input value={`edge${BTSettingLinkSuffix}`} readOnly />
              <br />
              から、機能を有効にしてください。
            </>
          )
        } else {
          setMsg('すみません')
          setDescription('operaですね、わかりません')
        }
        // その指示をどっかで出す
      } else {
        throw new Error('対応してないブラウザで進めようとしました')
      }
    } else {
      console.log('requestLEScan exists')
      // 自動で起動することはできない、必ずユーザーの動きが必要らしい
      setMsg('BlueTooth を起動します')
      setProgressValue(80)
      setDescription(
        <>
          <Button onClick={startLEScan} size="lg">
            始める
          </Button>
          <div>
            <details>
              <summary>
                <small>何も起こらない場合(PC)</small>
              </summary>
              <small>
                まずは、一度リロードします。 <br />
                次にコンソールを開いて
                <Code>
                  <Input readOnly size="xs" maxWidth="10em" value={'startLEScan()'} />
                </Code>
                と打ってください。そしたら始まります。
              </small>
            </details>
          </div>
        </>
      )
    }
  }, []) // eslint-disable-line

  useEffect(() => {
    if (err) {
      console.log(err.name, err.message)
      if (err.name === 'NotAllowedError') {
        // サイトの設定で許可しにいく
        // chrome://settings/content/bluetoothScanning
      } else if (err.name === 'NotFoundError') {
        // 本体のBTが無効になっている
      }
    }
  }, [err])

  if (initialLoading) {
    return null
  } else {
    if (!isOpen && !demoMode && !canUseBT && !waitForReloading) {
      onOpen()
    }
  }

  const handleStartDemoMode = () => {
    setDemoMode(true)
    onClose()
  }

  const handleOverlayClick = () => {
    if (!canUseBT && !toast.isActive(BTUnavailableToastId)) {
      toast({
        id: BTUnavailableToastId,
        title: msg,
        description: 'それか、DEMO モードで進んでね！',
        status: 'warning',
        variant: 'subtle',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'} onOverlayClick={handleOverlayClick}>
        <ModalOverlay />
        <ModalContent>
          <Progress value={progressValue} colorScheme="green" size="sm" isAnimated hasStripe />
          <ModalHeader>{msg}</ModalHeader>
          <ModalBody>
            <div>{description}</div>
            <Container>
              <Button onClick={handleStartDemoMode} size="sm">
                デモモードで始める
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default NavigateBTInitialize
