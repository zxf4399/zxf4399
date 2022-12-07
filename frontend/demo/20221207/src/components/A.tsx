import { useEffect, useRef } from "react"

function useInterval(callback: any, delay = 500) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // @ts-ignore
  useEffect(() => {
    if (!Number.isInteger(delay)) {
      return ""
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

function A({ count }: { count: number }) {
  const mark = useRef(false)

  useInterval(() => {
    if (!mark.current) {
      mark.current = true
      console.log("A")
    }
  }, 500)

  return <div>{count}</div>
}

export default A
