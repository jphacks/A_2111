import { useToast } from '@chakra-ui/toast'
import React, { createContext, useEffect, useState } from 'react'
import { getFamiliars, getNameFromId } from '../utils/api'
import {
  getDemoModeFromStorage,
  getUserIdFromLocalStorage,
  setDemoModeToStorage,
  storageAvailable
} from '../utils/storage'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const toast = useToast()

  const [showSplash, setShowSplash] = useState(true)
  const [signedInUser, setSignedInUser] = useState(null)

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
    _setDemoMode(setToDemoMode)
    setShouldCheckBTStatus(!setToDemoMode)
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
      // _setDemoMode(isDemoMode)
      setShouldCheckBTStatus(false)
    }
    // setInitialLoading(false)
  }, []) // eslint-disable-line

  useEffect(() => {
    if (userId && !familiars.length) {
      getFamiliars(userId).then((data) => {
        console.log(data?.data)
        const familiarIds =
          data?.data?.length &&
          data?.data.map((value) => {
            return value.start === userId ? value.end : value.start
          })
        if (familiarIds?.length) {
          Promise.all(familiarIds?.map((val) => getNameFromId(val))).then((res) => {
            console.log('namae tati')
            console.log(res)
            setFamiliars(res)
          })
        }
      })
    }
  }, [userId]) // eslint-disable-line

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
        setCh,
        showSplash,
        setShowSplash,
        signedInUser,
        setSignedInUser
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
