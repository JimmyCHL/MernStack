import { useEffect, useState } from 'react'

export const ShowTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div>
      <h1>Time is: {time}</h1>
    </div>
  )
}
