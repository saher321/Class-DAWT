import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthLogin from './components/AuthLogin'

import MainStack from './routes/MainStack'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainStack/>
    </>
  )
}

export default App
