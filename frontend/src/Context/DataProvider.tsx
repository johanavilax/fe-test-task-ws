import React from 'react'
import { Dispatch, SetStateAction, createContext, useContext, useMemo, useState } from 'react'
import { IUser } from '../types'
import constants from '../constants'

// Define the shape of the context data
interface IDataContext {
  users: IUser[]
  setUsers: Dispatch<SetStateAction<IUser[]>>
  highLightRows: Record<string, boolean>
  userLimit: number
  setUserLimit: Dispatch<SetStateAction<number>>
  setHighLightRows: Dispatch<SetStateAction<Record<string, boolean>>>
  deleteUser: (userId: string) => void
}

// Define props for the DataProvider component
interface IDataProps {
  children: React.JSX.Element
}

// Create the context
export const DataContext = createContext<IDataContext>({} as IDataContext)

// Create a custom hook for using the context
export const useDataContext = () => useContext(DataContext)

// DataProvider component
const DataProvider: React.FC<IDataProps> = ({ children }) => {
  // State for managing users
  const [users, setUsers] = useState<IUser[]>([])

  // State for managing highlighted rows
  const [highLightRows, setHighLightRows] = useState<Record<string, boolean>>({})

  // State for managing user limit
  const [userLimit, setUserLimit] = useState(constants.defaultUserLimit)

  // Function to delete a user
  const deleteUser = (userId: string) => {
    setUsers(prev => prev.filter(user => user.userId !== userId))
  }

  // Memoized context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      userLimit,
      setUserLimit,
      users,
      highLightRows,
      setUsers,
      setHighLightRows,
      deleteUser
    }),
    [users, highLightRows, userLimit]
  )

  // Provide the context value to the children components
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
}

export default DataProvider
