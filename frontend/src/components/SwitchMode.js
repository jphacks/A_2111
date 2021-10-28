import { Switch, FormControl, FormLabel, useToast } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

const SwitchMode = () => {
  const { demoMode, setDemoMode } = useContext(AppContext)

  const changeMode = () => {
    setDemoMode(!demoMode)
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
