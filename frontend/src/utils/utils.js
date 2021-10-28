import { setDemoModeToStorage } from './storage'

export const setDemoMode = (toast, setToDemoMode) => {
  let message = null
  if (setToDemoMode) {
    message = 'DEMO モードに切り替えます。'
    setDemoModeToStorage(true)
  } else {
    message = 'DEMO モードを終了します 👋'
    setDemoModeToStorage(false)
  }

  toast({
    title: message,
    description: `3秒後にリロードされます。`,
    // TODO: ここの3秒後、動的に変えたい
    status: 'info',
    variant: 'subtle',
    duration: 3000,
    isClosable: true
  })

  setTimeout(() => {
    window.location.reload()
  }, 3000)
}
