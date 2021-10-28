import React, { createContext, useEffect, useState } from 'react'
import {
  getBTStatusFromStorage,
  getUserIdFromLocalStorage,
  storageAvailable
} from '../utils/storage'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const [initialLoading, setInitialLoading] = useState(true)
  const [localStorageAvailable, setLocalStorageAvailable] = useState(false)
  const [userId, setUserId] = useState(undefined)
  const [demoMode, setDemoMode] = useState(undefined)
  const [shouldShowNewRegistration, setShouldShowNewRegistration] = useState(false)
  const [isMaskOpen, setMaskOpen] = useState(false)
  const [checkedBTAvailability, setCheckedBTAvailability] = useState(false)
  const [shouldCheckBTStatus, _setShouldCheckBTStatus] = useState(
    !Boolean(getBTStatusFromStorage())
  )

  const setShouldCheckBTStatus = (status) => {
    setCheckedBTAvailability(!status)
    _setShouldCheckBTStatus(status)
  }

  useEffect(() => {
    if (storageAvailable()) {
      setLocalStorageAvailable(true)
      let idFromStorage = getUserIdFromLocalStorage()
      if (!idFromStorage) {
        setShouldShowNewRegistration(true)
        // これで自動で /signup に遷移する
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
        isMaskOpen,
        setMaskOpen,
        initialLoading,
        setInitialLoading,
        localStorageAvailable,
        demoMode,
        setDemoMode,
        shouldShowNewRegistration,
        setShouldShowNewRegistration,
        shouldCheckBTStatus,
        setShouldCheckBTStatus
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
