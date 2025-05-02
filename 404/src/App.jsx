import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Error from './component/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Error/>
    </>
  )
}

export default App
