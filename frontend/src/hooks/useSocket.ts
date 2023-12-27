import { useEffect } from 'react'
import io from 'socket.io-client'
import { useDataContext } from '../Context/DataProvider'
import { IUser } from '../types'
import constants from '../constants'

// Interface for the Socket object with specific methods
interface ISocket {
  on(event: string, callback: (data: IUser) => void): void
  disconnect(): void
}

// Custom hook for managing socket connection and handling incoming data
export const useSocket = () => {
  // Access context functions and state
  const { setUsers, setHighLightRows, userLimit } = useDataContext()

  useEffect(() => {
    // Create a socket connection to the specified port
    const socket: ISocket = io(constants.socketPort)

    // Listen for 'userData' event from the server
    socket.on('userData', (newUser: IUser) => {
      setUsers(prevUsers => {
        // Update users, sort by score, and limit to the specified user limit
        const updatedUsers = [...prevUsers, newUser]
          .sort((a, b) => b.score - a.score)
          .slice(0, userLimit)

        // Highlight the row for the new user in the UI
        setHighLightRows(prevState => ({
          ...prevState,
          [newUser.userId]: true
        }))

        // Remove the highlight after a specified time
        setTimeout(() => {
          setHighLightRows(prevState => ({
            ...prevState,
            [newUser.userId]: false
          }))
        }, constants.timeOutOfHighlight)

        // Return the updated users array
        return updatedUsers
      })
    })

    // Cleanup function to disconnect the socket when the component unmounts
    return () => {
      socket.disconnect()
    }
  }, [userLimit, setUsers, setHighLightRows])
}
