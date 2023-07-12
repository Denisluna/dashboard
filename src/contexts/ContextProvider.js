import React, { createContext, useContext, useState } from "react";

const StateContext = createContext()

const initialState = {
    isChatOpen: false,
    isNotificationsOpen: false,
    isProfileOpen: false,
    isCartOpen: false
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true)

    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);