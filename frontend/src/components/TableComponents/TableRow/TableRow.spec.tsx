import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import { deleteUser, mockProvider, mockUsers } from '../../../mocks/mocks'
import TableRow from './TableRow'

describe('Table Component', () => {
  it('Should render users', () => {
    const { getByText, getAllByTestId } = render(
      mockProvider(<TableRow user={mockUsers[0]} />)
    )

    //Test color
    const container = document.body
    const highlightedRows = container.getElementsByClassName('bg-highlight')
    expect(highlightedRows.length).toBe(1)

    expect(getByText(mockUsers[0].username)).toBeInTheDocument()
    expect(getByText(mockUsers[0].email)).toBeInTheDocument()
    expect(getByText(mockUsers[0].score.toLocaleString())).toBeInTheDocument()
    const deleteButtons = getAllByTestId('deleteIcon')
    expect(deleteButtons).toHaveLength(1)

    fireEvent.click(deleteButtons[0])
    expect(deleteUser).toHaveBeenCalledWith(mockUsers[0].userId)
  })
})
