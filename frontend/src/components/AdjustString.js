import styles from '../styles/Signup.module.scss'
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import komachi from '../assets/komachi.png'

const AdjustString = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
      <p className={styles.AdjustStringSentence}>紐の長さを調節するよ！</p>
      <div className={styles.StringSlider}>
        <Slider defaultValue={60} min={0} max={300} step={30} marginBottom={20}>
          <SliderTrack bg="orange.100">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="orange.400" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
        <Button size={'lg'}>決定</Button>
      </div>
      <img className={styles.komachiPic} src={komachi} alt="未来　小町"></img>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>COCONO　MASKを装着してください</ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AdjustString
