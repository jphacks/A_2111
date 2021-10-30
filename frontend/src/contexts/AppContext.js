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
  const [shouldCheckBTStatus, _setShouldCheckBTStatus] = useState(true)
  const [familiars, setFamiliars] = useState([])

  const [notPairedYet, setNotPairedYet] = useState(true)
  const [wasCoconoThere, setWasCoconoThere] = useState(false)
  const [maskName, setMaskName] = useState(false)
  const [ch, setCh] = useState(undefined)

  const [waitForReloading, setWaitForReloading] = useState(false)
  const [isScanningLE, setScanningLE] = useState(false)

  const setShouldCheckBTStatus = (status) => {
    _setShouldCheckBTStatus(status)
  }

  const setDemoMode = (setToDemoMode) => {
    setWaitForReloading(true)
    setShouldCheckBTStatus(!setToDemoMode)
    setDemoModeToStorage(setToDemoMode)
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
    _setDemoMode(setToDemoMode)
    setTimeout(() => {
      setShouldCheckBTStatus(!setToDemoMode)
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
      } else {
        setUserId(idFromStorage)
      }
      const isDemoMode = getDemoModeFromStorage()
      console.log('isdemomode', isDemoMode)
      _setDemoMode(isDemoMode)
      setShouldCheckBTStatus(false)
    }
    setInitialLoading(false)
  }, []) // eslint-disable-line

  useEffect(() => {
    if (userId && !familiars.length) {
      getFamiliars(userId).then((data) => {
        setFamiliars(data)
      })
    }
  }, [userId]) // eslint-disable-line

  // useEffect(() => {
  //   if (ch) {
  //     setOpenMask(() => {
  //       setLoadingMaskToMove(true)
  //       ch.writeValue(Uint8Array.of(1)).then(() => {
  //         console.log('open!')
  //         setLoadingMaskToMove(false)
  //       })
  //     })
  //     setCloseMask(() => {
  //       setLoadingMaskToMove(true)
  //       ch.writeValue(Uint8Array.of(0)).then(() => {
  //         console.log('close!')
  //         setLoadingMaskToMove(false)
  //       })
  //     })
  //   }
  // }, [ch])

  useEffect(() => {
    if (!notPairedYet) {
      toast({
        title: 'COCONOMASK にペアリングしました',
        description: ``,
        // TODO: ここの3秒後、動的に変えたい
        status: 'info',
        variant: 'subtle',
        duration: 3000,
        isClosable: true
      })
    }
  }, [notPairedYet]) // eslint-disable-line

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
        waitForReloading,
        isScanningLE,
        setScanningLE,
        familiars,
        notPairedYet,
        setNotPairedYet,
        wasCoconoThere,
        setWasCoconoThere,
        maskName,
        setMaskName,
        ch,
        setCh
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
