import { Switch, FormControl, FormLabel, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const SwitchMode = () => {
  const { demoMode, setDemoMode } = useContext(AppContext)
  const toast = useToast()

  const changeMode = () => {
    toast({
      title: demoMode ? 'DEMO モードを終了します 👋' : 'DEMO モードに切り替えます。',
      description: `3秒後にリロードされます。`,
      // TODO: ここの3秒後、動的に変えたい
      status: 'info',
      variant: 'subtle',
      duration: 3000,
      isClosable: true
    })
    setDemoMode(!demoMode)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }

  return (
    <div style={{ border: '1px solid blue' }}>
      {/* debug用にborderつけといた */}
      <FormControl display="flex" alignItems="center">
        <FormLabel mb="1">DEMOモード{window.counter}</FormLabel>
        <Switch
          colorScheme="orange"
          isDisabled={demoMode === undefined}
          isChecked={demoMode}
          onChange={changeMode}
        />
      </FormControl>
    </div>
  )
}

export default SwitchMode
