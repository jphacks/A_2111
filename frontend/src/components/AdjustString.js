import styles from '../styles/Signup.module.scss'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import komachi from '../assets/komachi.png'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const AdjustString = () => {
  const { onClose } = useDisclosure()

  const { openAdjustString, setOpenAdjustString } = useContext(AppContext)

  return (
    <div>
      <Modal
        isOpen={openAdjustString}
        onClose={() => {
          onClose()
          setOpenAdjustString(false)
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <p className={styles.AdjustStringSentence}>紐の長さを調節するよ！</p>
            <div className={styles.StringSlider}>
              <Slider defaultValue={60} min={0} max={300} step={30} marginBottom={5}>
                <SliderTrack bg="orange.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack bg="orange.400" />
                </SliderTrack>
                <SliderThumb boxSize={6} />
              </Slider>
              <Button size={'lg'}>決定</Button>
            </div>
            <img className={styles.komachiPic} src={komachi} alt="未来　小町"></img>
            {/* COCONO　MASKを装着してください */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default AdjustString
