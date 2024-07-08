import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Pages/page'
import Theme from './Theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={Theme}>
      <Home/>
    </ChakraProvider>
  </React.StrictMode>,
)
