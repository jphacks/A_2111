import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Grid,
  Spinner
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import { getNameFromId, makeNewFamiliar } from '../utils/api'
import { AppContext } from '../contexts/AppContext'

const RegisterFriend = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {userId} = useContext(AppContext)
  const idFromQuery = props.query.get('register')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const history = useHistory()
  const handleToHomePage = () => {
    history.push('/')
    onClose()
  }

  if (idFromQuery && !isOpen) {
    // laodされた時だけだすようにしたい
    if (!name) {
      getNameFromId(idFromQuery).then((_name) => {
        setName(_name)
        console.log(_name)
        setIsLoading(false)
      })
    }
    onOpen()
  }
  const Addfriend = () => {
    handleToHomePage()
    makeNewFamiliar(userId, idFromQuery)
    onClose()
  }

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose} size={'sm'}>
        <ModalContent>
          <ModalHeader>友達追加</ModalHeader>
          {isLoading ? (
            <ModalBody textAlign="center" mb="5">
              <Spinner />
            </ModalBody>
          ) : name ? (
            <ModalBody textAlign="center" mb="5">
              <p>{name}さんを追加しますか？</p>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} mt="5" mb="8">
                <Button colorScheme="teal" size="md" ml="10" onClick={Addfriend}>
                  はい
                </Button>
                <Button colorScheme="teal" size="md" mr="10" onClick={handleToHomePage}>
                  いいえ
                </Button>
              </Grid>
            </ModalBody>
          ) : (
            <ModalBody textAlign="center" mb="5">
              <p>無効なQRコードです</p>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} mb="8">
                <Button colorScheme="teal" size="md" mr="10" onClick={handleToHomePage}>
                  閉じる
                </Button>
              </Grid>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default RegisterFriend
