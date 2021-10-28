import { useToast } from '@chakra-ui/toast'
import React, { createContext, useEffect, useState } from 'react'
import {
  getBTStatusFromStorage,
  getDemoModeFromStorage,
  getUserIdFromLocalStorage,
  setDemoModeToStorage,
  storageAvailable
} from '../utils/storage'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const toast = useToast()
  const [initialLoading, setInitialLoading] = useState(true)
  const [localStorageAvailable, setLocalStorageAvailable] = useState(false)
  const [userId, setUserId] = useState(undefined)
  const [demoMode, _setDemoMode] = useState(undefined)
  const [shouldShowNewRegistration, setShouldShowNewRegistration] = useState(false)
  const [isMaskOpen, setMaskOpen] = useState(false)
  const [checkedBTAvailability, setCheckedBTAvailability] = useState(false)
  const [shouldCheckBTStatus, _setShouldCheckBTStatus] = useState(true)

  const setShouldCheckBTStatus = (status) => {
    setCheckedBTAvailability(!status)
    _setShouldCheckBTStatus(status)
  }

  const setDemoMode = (setToDemoMode) => {
    console.log('called')
    let message = null
    setShouldCheckBTStatus(!setToDemoMode)
    setDemoModeToStorage(setToDemoMode)
    if (setToDemoMode) {
      message = 'DEMO モードに切り替えます。'
    } else {
      message = 'DEMO モードを終了します 👋'
    }
    _setDemoMode(setToDemoMode)

    toast({
      title: message,
      description: `リロードされます。`,
      // TODO: ここの3秒後、動的に変えたい
      status: 'info',
      variant: 'subtle',
      duration: 3000,
      isClosable: true
    })

    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  useEffect(() => {
    if (storageAvailable()) {
      setLocalStorageAvailable(true)
      let idFromStorage = getUserIdFromLocalStorage()
      if (!idFromStorage) {
        setShouldShowNewRegistration(true)
        // これで自動で /signup に遷移する
      }
      const isDemoMode = getDemoModeFromStorage()
      console.log('isdemomode', isDemoMode)
      _setDemoMode(isDemoMode)
      setShouldCheckBTStatus(false)
    }
    setInitialLoading(false)
  }, []) // eslint-disable-line

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
