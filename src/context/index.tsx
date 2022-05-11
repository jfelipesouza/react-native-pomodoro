import React, { createContext, useState } from 'react'

type ContextProps = {
  isDark: boolean
  setDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const Context = createContext<ContextProps>({} as ContextProps)

export const ContextProvider: React.FC = ({ children }) => {
  const [isDark, setDark] = useState(false)

  return (
    <Context.Provider value={{ isDark, setDark }}>
      {/* Contexto para alteração do tema*/}
      {children}
    </Context.Provider>
  )
}
