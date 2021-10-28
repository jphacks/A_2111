import { useToast } from '@chakra-ui/toast'
import React, { createContext, useEffect, useState } from 'react'
import { getFamiliars } from '../utils/api'
import {
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
  const [checkedBTAvailability, setCheckedBTAvailability] = useState(false) // eslint-disable-line
  const [shouldCheckBTStatus, _setShouldCheckBTStatus] = useState(true)
  const [familiars, setFamiliars] = useState([])

  const setShouldCheckBTStatus = (status) => {
    setCheckedBTAvailability(!status)
    _setShouldCheckBTStatus(status)
  }

  const setDemoMode = (setToDemoMode) => {
    setShouldCheckBTStatus(!setToDemoMode)
    setDemoModeToStorage(setToDemoMode)
    _setDemoMode(setToDemoMode)
    const message = setToDemoMode ? 'DEMO モードに切り替えます。' : 'DEMO モードを終了します 👋'
    toast({
      title: message,
      description: `リロードされます。`,
      // TODO: ここの3秒後、動的に変えたい
      status: 'info',
      variant: 'subtle',
      duration: 3000,
      isClosable: true
    })
    setTimeout(() => window.location.reload(), 500)
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
    getFamiliars().then((data) => {
      setFamiliars(data)
    })
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
        setShouldCheckBTStatus,
        familiars
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
