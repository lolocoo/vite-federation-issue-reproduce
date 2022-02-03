import { useState } from 'react'
import './App.css'
import Button from './Button'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      remote
      <Button />
    </div>
  )
}

export default App
