import { useEffect, useState } from 'react'

export const ShowTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <div>
      <h1>Time is: {time}</h1>
    </div>
  )
}
