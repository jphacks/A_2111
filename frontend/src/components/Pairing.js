import { Button } from '@chakra-ui/button'
import { Center, Container } from '@chakra-ui/layout'
import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'

const Pairing = () => {
  const {
    wasCoconoThere,
    maskName,
    setCh,
    setNotPairedYet,
    demoMode,
    setWasCoconoThere,
    initialLoading
  } = useContext(AppContext)
  const [onGoing, setOnGoing] = useState(false)

  useEffect(() => {
    if (!initialLoading && demoMode) {
      setWasCoconoThere(true)
    }
  }, [initialLoading]) //eslint-disable-line

  const startParing = () => {
    setOnGoing(true)
    if (wasCoconoThere && !demoMode && !onGoing) {
      navigator.bluetooth
        .requestDevice({
          acceptAllDevices: false,
          filters: [{ name: maskName }],
          optionalServices: [wasCoconoThere]
        })
        .then((device) => {
          console.log('device')
          console.log(device)
          return device.gatt.connect()
        })
        .then((server) => {
          console.log('server')
          console.log(server)
          return server.getPrimaryService(wasCoconoThere)
        })
        .then((service) => {
          console.log('service')
          console.log(service)
          return service.getCharacteristic(0xec0f)
        })
        .then((characteristic) => {
          if (characteristic) {
            setCh(characteristic)
            setNotPairedYet(false)
          }
        })
        .catch((error) => {
          console.error(error)
          if (window.confirm('繋がらなかったよ！残念だね～')) {
            window.location.reload()
          }
        })
    } else {
      setInterval(() => {
        setNotPairedYet(false)
      }, 1600)
    }
  }
  return (
    <div>
      <Container bg="gray.100" color="gray.700" borderRadius="16px" pt="20px" pb="20px">
        {/* <Center>
              <Heading as="h4" size="md" color="gray.700">
                未ペアリング
              </Heading>
            </Center> */}
        <Center>マスクとペアリングしましょう！</Center>
        <Center>
          {wasCoconoThere ? (
            <Button
              onClick={startParing}
              disabled={onGoing}
              isLoading={onGoing}
              spinnerPlacement="end"
              loadingText="ペアリングする"
            >
              ペアリングする
            </Button>
          ) : (
            <div>
              <Center pt={10}>COCONO MASK が見当たらないよ！</Center>
              <br />
              <Center>hold on tight...</Center>
            </div>
          )}
        </Center>
      </Container>
    </div>
  )
}

export default Pairing
