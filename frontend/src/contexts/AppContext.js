import React, { createContext, useEffect, useState } from 'react'
import { getUserIdFromLocalStorage, storageAvailable } from '../utils/storage'
import Signup from '../pages/Signup'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true)
  const [localStorageAvailable, setLocalStorageAvailable] = useState(false)
  const [userId, setUserId] = useState(undefined)
  const [demoMode, setDemoMode] = useState(undefined)

  useEffect(() => {
    if (storageAvailable()) {
      setLocalStorageAvailable(true)
      let id = getUserIdFromLocalStorage()
      if (!id) {
        // TODO: なまえを入力してIDを取得して保存しておく
        <Signup/>
      }
      // TODO: demoモードかどうか確認する
      setDemoMode(false)
    }
    setInitialLoading(false)
  }, [])
  return (
    <AppContext.Provider
      value={{
        userId,
        setUserId,
        initialLoading,
        setInitialLoading,
        localStorageAvailable,
        demoMode,
        setDemoMode
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
