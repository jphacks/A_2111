import { Button, Modal, ModalContent, ModalHeader, ModalBody, Grid } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'

const RegisterFriend = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const id = props.query.get('register')

  if (id && !isOpen) {
    onOpen()
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalContent>
          <ModalHeader>友達追加</ModalHeader>
          {/* <ModalCloseButton /> */}
          <ModalBody textAlign="center" mb="5">
            {id}を登録しますか
          </ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb="8">
            <Button colorScheme="teal" size="md" ml="10">
              はい
            </Button>
            <Button colorScheme="teal" size="md" mr="10">
              いいえ
            </Button>
          </Grid>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default RegisterFriend
