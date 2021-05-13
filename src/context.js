import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [isModalOpen, setModalOpen] = useState(false)

    const openSidebar = () => {
        return setSidebarOpen(true)
    }

    const closeModal = () => {
        return setModalOpen(false)
    }
    const openModal = () => {
        return setModalOpen(true)
    }

    const closeSidebar = () => {
        return setSidebarOpen(false)
    }


    return <AppContext.Provider value={{ openSidebar, closeSidebar, closeModal, openModal, isSidebarOpen, isModalOpen }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}



export { AppContext, AppProvider, useGlobalContext }
