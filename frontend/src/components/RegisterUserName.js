import styles from '../styles/Signup.module.scss'
import { Input, Button, Heading, Container } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { postNameAndGetId } from '../utils/api'
import { setIdToLocalStorage } from '../utils/storage'
import { AppContext } from '../contexts/AppContext'
import { Redirect } from 'react-router-dom'
import komachi from '../assets/komachi.png'

const RegisterUserName = () => {
  const { shouldShowNewRegistration, setShouldShowNewRegistration, setUserId, demoMode } =
    useContext(AppContext)
  const [value, setValue] = useState('')
  const [isSubmitting, setSubmiting] = useState(false)

  if (!shouldShowNewRegistration || demoMode === undefined) {
    return <Redirect to="/" />
  }

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
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
          cocoamask へようこそ！
          <br />
          ニックネームを登録しよう！
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
        <br />
        <Button
          isLoading={isSubmitting}
          spinnerPlacement="end"
          loadingText="進む"
          disabled={!value.length || isSubmitting}
          mt={20}
          bg={'blue.200'}
          size="lg"
          onClick={handlePost}
        >
          進む
        </Button>
        <img className={styles.komachiPic} src={komachi} alt="未来　小町"></img>
      </Container>
    </div>
  )
}

export default RegisterUserName
