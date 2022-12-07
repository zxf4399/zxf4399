import { useState } from "react"
import A from "./components/A"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <A count={count} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
