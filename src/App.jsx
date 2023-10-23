import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InputHalf from './input_half.jsx'
import PreviewHalf from './preview_half.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="app">
      <InputHalf></InputHalf>
      <PreviewHalf></PreviewHalf>
    </div>

  )
}

export default App
