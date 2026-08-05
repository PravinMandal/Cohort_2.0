import { useState } from 'react'
import FaceExpressionTracker from "./features/Expressions/expression"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FaceExpressionTracker />
    </>
  )
}

export default App
