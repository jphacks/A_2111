import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { getPeopleAtLeastOnceSignedInBefore } from '../utils/storage'
import styles from '../styles/Signup.module.scss'
import { Box } from '@chakra-ui/react'

const SelectUserScreen = () => {
  const members = getPeopleAtLeastOnceSignedInBefore()
  const { setSignedInUser, setShouldShowNewRegistration } = useContext(AppContext)

  const signInwithThis = (member) => {
    setSignedInUser(member)
    setShouldShowNewRegistration(false)
  }

  return (
    <div>
      <div>
        {members ? (
          <>
            <p className={styles.signInSentence}>どのユーザーでログインしますか？</p>
            {members.map((member) => {
              return (
                <Box key={member} style={{ margin: '50px' }} bg={'blue.100'}>
                  {/* Box中を白にして外側灰色にしたい */}
                  <button
                    onClick={() => {
                      signInwithThis(member)
                    }}
                  >
                    {member}
                  </button>
                </Box>
              )
            })}
            <p>ユーザーを追加</p>
          </>
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
