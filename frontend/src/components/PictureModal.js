import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Container,
  useToast
} from '@chakra-ui/react'
import Webcam from 'react-webcam'
import { useRef, useState, useCallback } from 'react'

const PictureModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure() // eslint-disable-line
  const webcamRef = useRef(null)
  const [imgSrc, setImgSrc] = useState(null)
  const toast = useToast()

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImgSrc(imageSrc)
    toast({
      title: '認証しました！',
      description: ``,
      status: 'info',
      variant: 'subtle',
      duration: 3000,
      isClosable: true
    })
  }, [webcamRef, setImgSrc, toast])

  return (
    <div>
      {/* <Modal isOpen={demoMode === undefined} onClose={onClose}> */}
      <Modal isOpen={!imgSrc} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>顔認証によるログイン</ModalHeader>
          <p style={{ marginLeft: '10%', color: 'grey' }}>
            ※デモモードのため、画像は保存されません。
          </p>
          <ModalBody>
            <Container>
              <Webcam mirrored audio={false} ref={webcamRef} screenshotFormat="image/png" />
              <Button
                onClick={capture}
                size="md"
                colorScheme="orange"
                variant="outline"
                width="80%"
                left="50%"
                transform="translateX(-50%)"
                margin="20px 0"
              >
                認証する
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PictureModal
