import React from 'react'
import { ContextProvider } from './context'
import Screens from './screens'

const App: React.FC = () => {
  return (
    <ContextProvider>
      <Screens />
    </ContextProvider>
  )
}

export default App
