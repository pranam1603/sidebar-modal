import React from 'react'
import { AppContext } from './context'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { AppProvider } from './context'
import { FaGlassMartiniAlt } from 'react-icons/fa'
function App() {
  return (
    <AppProvider>
      <Home />
      <Sidebar />
      <Modal />
    </AppProvider>
  )
}

export default App
