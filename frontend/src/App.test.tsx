import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  it('Should render tabs', () => {
    const { getByText } = render(<App />)
    const TopUsersTab = getByText('TopUsers')
    const settingsTab = getByText('Settings')
    expect(TopUsersTab).toBeInTheDocument()
    expect(settingsTab).toBeInTheDocument()
  })
})
