import React, { useState, lazy, Suspense } from 'react'
import './App.css'

const Button = lazy(() => import('components/Button'))
// const Code = lazy(() => import('components/Code'))

const RemoteButton = React.lazy(() => import('webpack/Button'));
// const RemoteCode = React.lazy(() => import('webpack/Code'));

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>remote component demo</div>
      <Suspense fallback={'loading component'}>
        <Button />
        <br />
        <RemoteButton />
        {/* <RemoteCode /> */}
        {/* <Code /> */}
      </Suspense>
    </div>
  )
}

export default App
