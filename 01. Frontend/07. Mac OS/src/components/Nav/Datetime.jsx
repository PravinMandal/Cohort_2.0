import React, { useState, useEffect } from 'react'

const Datetime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      
      const dayName = daysOfWeek[now.getDay()]
      const monthName = months[now.getMonth()]
      const day = now.getDate()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      
      setDateTime(`${dayName} ${monthName} ${day}\u00A0\u00A0${hours}:${minutes}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>{dateTime}</div>
  )
}

export default Datetime