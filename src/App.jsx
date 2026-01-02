import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import UseFetchHookTest from './test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseFetchHookTest/>
    </>
  )
}

export default App
