import { useState } from 'react'
import './App.css'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='min-h-screen  flex flex-col bg-gray-100 items-center justify-center'>
      <div className='container'>
      <CurrencyConverter/>
      </div>
    </div>
    </>
  )
}

export default App
