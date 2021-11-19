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
            <Container>
              <Button
                onClick={() => {
                  handleSelectDemo(true)
                }}
                size="md"
                colorScheme="orange"
                variant="outline"
                width="80%"
                left="50%"
                transform="translateX(-50%)"
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
                width='80%'
                left="50%"
                transform="translateX(-50%)"
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
