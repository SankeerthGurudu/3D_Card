import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full bg-[#b1a29d] h-screen flex items-center justify-center'>
      <Card />
    </div>
  )
}

export default App
