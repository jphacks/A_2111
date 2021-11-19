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
import Webcam from "react-webcam"
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
      title: '写真を撮影しました',
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
          <ModalHeader>顔の写真を撮るよ</ModalHeader>
          <ModalBody>
            <Container>
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/png"
              />
              <Button
                onClick={capture}
                size="md"
                colorScheme="orange"
                variant="outline"
                width='80%'
                left="50%"
                transform="translateX(-50%)"
                margin='20px 0'
              >
                撮影
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default PictureModal
