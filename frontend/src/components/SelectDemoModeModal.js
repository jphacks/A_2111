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
          <ModalHeader>モードを</ModalHeader>
          <ModalBody>
            <div>選んでね</div>
            <Container>
              <Button
                onClick={() => {
                  handleSelectDemo(true)
                }}
                size="sm"
              >
                デモモードで始める
              </Button>
              &nbsp;&nbsp;
              <Button
                onClick={() => {
                  handleSelectDemo(false)
                }}
                size="sm"
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
