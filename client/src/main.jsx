import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/index.js'
import './index.css'
import { accordionTheme } from "./pages/mainPage//Questions/Accordion.jsx";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import './firebase.js'
const theme = extendTheme({
  components: {
    Accordion: accordionTheme,
  }
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ChakraProvider theme={theme}><App /></ChakraProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
