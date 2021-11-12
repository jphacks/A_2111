import styles from '../styles/Signup.module.scss'
import { Input, Button, Heading, Container , Select} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { postNameAndGetId } from '../utils/api'
import { setIdToLocalStorage } from '../utils/storage'
import { AppContext } from '../contexts/AppContext'
import { Redirect } from 'react-router-dom'

const Signup = () => {
  const { shouldShowNewRegistration, setShouldShowNewRegistration, setUserId } =
    useContext(AppContext)
  const [value, setValue] = useState('')
  const [maskSize, setMaskSize] = useState('')
  const [isSubmitting, setSubmiting] = useState(false)

  if (!shouldShowNewRegistration) {
    return <Redirect to="/" />
  }

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  const handleSelectChange = (e) => {
    let inputSize = e.target.value
    setMaskSize(inputSize)
  }

  const handlePost = async () => {
    console.log('postするぞ')
    console.log(value)
    setSubmiting(true)
    const userId = await postNameAndGetId(value)
    if (userId) {
      setIdToLocalStorage(userId, value)
      setUserId(userId)
      setShouldShowNewRegistration(false)
    }
  }

  return (
    <div className={styles.signupContainer}>
      <Container centerContent>
        <Heading as="h3" size="lg" mt={'100px'}>
          coconomask へようこそ！
          <br />
          ニックネームとマスクのサイズを登録しよう！
        </Heading>
      </Container>
      <Container>
        <Input
          placeholder="ニックネーム"
          onChange={handleInputChange}
          value={value}
          size="lg"
          mt={140}
          maxWidth={'80'}
          boxShadow="base blue"
        />
        <Select
          placeholder="サイズ"
          onChange={handleSelectChange}
          value={maskSize}
          size="lg"
          mt={10}
          maxWidth={'80'}
          boxShadow="base blue"
        >
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
        </Select>
        <br />
        <Button
          isLoading={isSubmitting}
          spinnerPlacement="end"
          loadingText="進む"
          disabled={!value.length || !maskSize.length || isSubmitting}
          mt={20}
          bg={'blue.200'}
          size="lg"
          onClick={handlePost}
        >
          進む
        </Button>
      </Container>
    </div>
  )
}

export default Signup
