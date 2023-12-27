import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { deleteUser, mockProvider, mockUsers } from '../../../mocks/mocks'
import Table from './Table'

describe('Table Component', () => {
  it('Should render users', () => {
    const { getByText, getAllByTestId } = render(mockProvider(<Table />))

    //Test headers
    expect(getByText('Username')).toBeInTheDocument()
    expect(getByText('Email')).toBeInTheDocument()
    expect(getByText('Score')).toBeInTheDocument()
    //Test color
    const container = document.body
    const highlightedRows = container.getElementsByClassName('bg-highlight')
    expect(highlightedRows.length).toBe(1)
    const noHighlightedRows = container.getElementsByClassName('bg-transparent')
    expect(noHighlightedRows.length).toBe(1)
    // Test Mocks
    mockUsers.forEach(user => {
      expect(getByText(user.username)).toBeInTheDocument()
      expect(getByText(user.email)).toBeInTheDocument()
      expect(getByText(user.score.toLocaleString())).toBeInTheDocument()
    })
    const deleteButtons = getAllByTestId('deleteIcon')
    expect(deleteButtons).toHaveLength(mockUsers.length)
    deleteButtons.forEach((button, index) => {
      fireEvent.click(button)
      expect(deleteUser).toHaveBeenCalledWith(mockUsers[index].userId)
    })
  })
})
