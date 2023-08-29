import React, { createContext } from 'react'


export const authContext = createContext()

export const AuthProvider = ({children}) => {
    const user = {user: "rafia"}
  return (
    <div>
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    </div>
  )
}
