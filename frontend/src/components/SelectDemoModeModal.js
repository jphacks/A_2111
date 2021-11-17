import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Container
} from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const SelectDemoModeModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure() // eslint-disable-line
  const { demoMode, setDemoMode, setInitialLoading } = useContext(AppContext)
  // isOpen={isOpen}
  const handleSelectDemo = (isDemo) => {
    setDemoMode(isDemo)
    setInitialLoading(false)
  }
  return (
    <div>
      <Modal isOpen={demoMode === undefined} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>モードを選んでね</ModalHeader>
          <ModalBody>
            <Container textAlign={"center"}>
              <Button
                onClick={() => {
                  handleSelectDemo(true)
                }}
                size="md"
                colorScheme="orange"
                variant="outline"
                marginBottom={10}
              >
                デモモードで始める
              </Button>
              &nbsp;&nbsp;
              <Button
                onClick={() => {
                  handleSelectDemo(false)
                }}
                size="md"
                colorScheme="orange"
                variant="outline"

                marginBottom={5}
              >
                リアルモードで始める
              </Button>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default SelectDemoModeModal
