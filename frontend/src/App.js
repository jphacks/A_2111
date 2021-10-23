import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContextProvider from "./contexts/AppContext";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const AppContainer = () => {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ChakraProvider>
  );
};

export default AppContainer;
