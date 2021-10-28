import { useDisclosure } from '@chakra-ui/hooks'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import { detect } from 'detect-browser'

// 多分
const compatibleBrowsers = ['chrome', 'edge-chromium', 'edge', 'opera', 'opera-mini']

const NavigateBTInitialize = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { demoMode, setDemoMode, initialLoading } = useContext(AppContext)
  const [leScanAvailable, setLeScanAvailable] = useState(false) // eslint-disable-line

  const browser = detect()
  const isCompatible = compatibleBrowsers.includes(browser.name)

  if (initialLoading) {
    return null
  } else {
    if (!isOpen && !demoMode) {
      onOpen()
    }
    // if (!demoMode && shouldCheckBTStatus && !isOpen) { // TODO: わからん
    //   onOpen()
    // }
  }
  const handleStartDemoMode = () => {
    setDemoMode(true)
    onClose()
  }

  // 'aol' | 'edge' | 'edge-ios' | 'yandexbrowser' | 'kakaotalk' | 'samsung' | 'silk' | 'miui' | 'beaker' | 'edge-chromium' |
  // 'chrome' | 'chromium-webview' | 'phantomjs' | 'crios' | 'firefox' | 'fxios' | 'opera-mini' | 'opera' | 'ie' | 'bb10' |
  // 'android' | 'ios' | 'safari' | 'facebook' | 'instagram' | 'ios-webview' | 'curl' | 'searchbot';
  if (!navigator.bluetooth) {
    console.log('cannot use bluetooth')
    if (!isCompatible) {
      console.log(`お使いのブラウザ（${browser.name}）ではBlueTooth使えないっす`)
    } else {
      console.log('何らかの理由で BlueTooth が使えないよ！残念だね')
    }
  } else {
    console.log('navigator.bluetooth exists')
  }

  if (navigator.bluetooth?.requestLEScan) {
    console.log('requestLEScan exists')
    setLeScanAvailable(true)
  } else {
    console.log('no requestLEScan')
    if (isCompatible) {
      // flagsの設定で使えるようになる
      // その指示をどっかで出す
    }
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bluetooth 使いたいね</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>name: {browser?.name}</div>
            <Button onClick={handleStartDemoMode}>デモモードで始める</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default NavigateBTInitialize
