import { Button, Modal, ModalContent, ModalHeader, ModalBody, Grid } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { getNameFromId } from '../utils/api'

const RegisterFriend = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const id = props.query.get('register')
  const [name, setName] = useState('...')

  const history = useHistory()
  const handleToHomePage = () => {
    history.push('/')
    onClose()
  }

  if (id && !isOpen) {
    // laodされた時だけだすようにしたい
    if (!name) {
      getNameFromId(id).then((_name) => {
        setName(_name)
        console.log(_name)
        console.log(';lakjhg')
      })
    }
    onOpen()
  }
  const Addfriend = () => {
    handleToHomePage()
    onClose()
  }
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalContent>
          <ModalHeader>友達追加</ModalHeader>
          <ModalBody textAlign="center" mb="5">
            {name}を登録しますか
          </ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb="8">
            <Button colorScheme="teal" size="md" ml="10" onClick={Addfriend}>
              はい
            </Button>
            <Button colorScheme="teal" size="md" mr="10" onClick={handleToHomePage}>
              いいえ
            </Button>
          </Grid>
        </ModalContent>
      </Modal>
    </div>
  )
}

export default RegisterFriend
