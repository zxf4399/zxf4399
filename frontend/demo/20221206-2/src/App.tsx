import { useEffect, useRef, useState } from "react"

function usePrevious<T>(value: T) {
  const ref = useRef<T>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function App() {
  const [count, setCount] = useState(0)
  const previousCount = usePrevious(count)

  return (
    <div className="App">
      count: {count} <br />
      previousCount: {previousCount} <br />
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
