import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { getPeopleAtLeastOnceSignedInBefore } from '../utils/storage'
import styles from '../styles/Signup.module.scss'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { BsPersonPlusFill } from 'react-icons/bs'

const SelectUserScreen = () => {
  const [members, setmembers] = useState([])

  useEffect(() => {
    getPeopleAtLeastOnceSignedInBefore().then((res) => {
      setmembers(res)
    })
  }, [])

  const { setSignedInUser, setShouldShowNewRegistration } = useContext(AppContext)

  const signInwithThis = (member) => {
    setSignedInUser(member)
    setShouldShowNewRegistration(false)
  }

  return (
    <div>
      <div>
        {members ? (
          <div style={{ height: '100vh' }}>
            <div style={{ height: '150px' }}></div>
            <p className={styles.signInSentence}>どのユーザーでログインしますか？</p>
            {members.map((member) => {
              return (
                <div className={styles.SelectUserButton}>
                  <Button
                    key={member}
                    marginTop={5}
                    width={'52'}
                    height={'50'}
                    bg={'green.500'}
                    variant="outline"
                    textAlign={'center'}
                    onClick={() => {
                      signInwithThis(member)
                    }}
                  >
                    {/* Todo:Box中を白にして外側灰色にしたい */}

                    {member}
                  </Button>
                </div>
              )
            })}
            <div className={styles.SelectUserButton}>
              <Button width={'52'} height={'50'} marginTop={20} leftIcon={<BsPersonPlusFill />}>
                ユーザーを追加
              </Button>
            </div>
          </div>
        ) : (
          <p>
            <button onClick={() => alert('未実装！')}>ユーザー新規登録はこちら！</button>
          </p>
        )}
      </div>
    </div>
  )
}

export default SelectUserScreen
