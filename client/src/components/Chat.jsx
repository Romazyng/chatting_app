import React, { useEffect } from 'react'
import io from 'socket.io-client'
import { useLocation } from 'react-router-dom'

const socket = io.connect('http://localhost:5000')

const Chat = () => {
  const {search} = useLocation()
  const [params, setParams] = useState(null)

  return (
    useEffect(() => {
      const searchParams = Object.fromEntries(new URLSearchParams(searh))
      setParams(setParams)
      socket.emit('join', searchParams)
    }, [search])
  )
}

export default Chat