import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { getPeopleAtLeastOnceSignedInBefore } from '../utils/storage'

const SelectUserScreen = () => {
  const members = getPeopleAtLeastOnceSignedInBefore()
  const { setSignedInUser } = useContext(AppContext)

  const signInwithThis = (member) => {
    setSignedInUser(member)
  }

  return (
    <div>
      <div>
        {members ? (
          <>
            {members.map((member) => {
              return (
                <p key={member} style={{ margin: '100px' }}>
                  <button
                    onClick={() => {
                      signInwithThis(member)
                    }}
                  >
                    {member} でログイン
                  </button>
                </p>
              )
            })}
            <p>それか、新規登録してね</p>
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
