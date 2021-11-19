import { ErrorBoundary } from 'react-error-boundary'
import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContextProvider, { AppContext } from './contexts/AppContext'
import Home from './pages/Home'
import RegisterUserName from './components/RegisterUserName'
import { ChakraProvider } from '@chakra-ui/react'
import ErrorFallback from './pages/ErrorBoundary'
import NotFound from './pages/NotFound'
import Splash from './components/Splash'

function App() {
  const { showSplash } = useContext(AppContext)

  if (showSplash) {
    return <Splash />
  }

  return (
    <div className="App" style={{ backgroundColor: 'rgba(220,220,220,0.4)' }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={RegisterUserName} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

const AppContainer = () => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload()
      }}
    >
      <ChakraProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </ChakraProvider>
    </ErrorBoundary>
  )
}

export default AppContainer
