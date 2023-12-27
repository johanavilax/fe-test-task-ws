// mocks.js

import React from 'react'
import { DataContext } from '../Context/DataProvider'
import constants from '../constants'

export const mockUsers = [
  {
    userId: '1',
    username: 'Yolo',
    email: 'Yolo@example.com',
    score: 1000,
    avatar: 'avatar1.jpg'
  },
  {
    userId: '2',
    username: 'Yolo2',
    email: 'Yolo2@example.com',
    score: 800,
    avatar: 'avatar2.jpg'
  }
]

export const mockHighlightRows: Record<string, boolean> = {
  '1': true,
  '2': false
}

export const deleteUser = jest.fn()
export const setUserLimit = jest.fn()
export const defaultProviderMock = {
  users: mockUsers,
  setUsers: () => {},
  highLightRows: mockHighlightRows,
  userLimit: constants.defaultUserLimit,
  setUserLimit,
  setHighLightRows: () => {},
  deleteUser
}
export const mockProvider = (ui: React.JSX.Element) => {
  return <DataContext.Provider value={defaultProviderMock}>{ui}</DataContext.Provider>
}
