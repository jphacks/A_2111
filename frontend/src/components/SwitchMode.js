import { Switch, FormControl, FormLabel } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import styles from "../styles/Home.module.scss"

const SwitchMode = () => {
  const { demoMode, setDemoMode } = useContext(AppContext)

  const changeMode = () => {
    setDemoMode(!demoMode)
  }

  return (
    <div className={styles.demoMode}>
      <FormControl display="flex" alignItems="center">
        <FormLabel mt="2" ml="90">DEMOモード{window.counter}</FormLabel>
        <Switch
          colorScheme="blue"
          isDisabled={demoMode === undefined}
          isChecked={demoMode}
          onChange={changeMode}
        />
      </FormControl>
    </div>
  )
}

export default SwitchMode
