import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { mockProvider } from '../../mocks/mocks'
import Board from './Board'
import constants from '../../constants'

describe('Board Component', () => {
  it('Should render Tabs', () => {
    const { getByText } = render(mockProvider(<Board />))
    const TopUsersTab = getByText('TopUsers')
    const settingsTab = getByText('Settings')
    expect(TopUsersTab).toBeInTheDocument()
    expect(settingsTab).toBeInTheDocument()
  })
  it('should switch between tabs', () => {
    const { getByText } = render(mockProvider(<Board />))
    const settingsTab = getByText('Settings')
    fireEvent.click(settingsTab)

    const displayCountText = getByText(`Current value: ${constants.defaultUserLimit}`)
    expect(displayCountText).toBeInTheDocument()

    const TopUsersTab = getByText('TopUsers')
    fireEvent.click(TopUsersTab)

    const usernameText = getByText('Username')
    expect(usernameText).toBeInTheDocument()
  })
})
