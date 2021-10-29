import { ErrorBoundary } from 'react-error-boundary'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppContextProvider from './contexts/AppContext'
import Home from './pages/Home'
import Signup from './pages/Signup'
import { ChakraProvider } from '@chakra-ui/react'
import ErrorFallback from './pages/ErrorBoundary'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
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
