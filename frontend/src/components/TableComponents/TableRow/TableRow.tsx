import React from 'react'
import { TableRow as TableRowMui, TableCell, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { IUser } from '../../../types'
import { useDataContext } from '../../../Context/DataProvider'

interface ITableRowProps {
  user: IUser
}

const TableRow: React.FC<ITableRowProps> = ({ user }) => {
  // Access highLightRows and deleteUser function from the context
  const { highLightRows, deleteUser } = useDataContext()

  return (
    <TableRowMui
      // Set the row's class based on whether it's highlighted or not
      className={`${
        highLightRows[user.userId] ? 'bg-highlight' : 'bg-transparent'
      } transition duration-1000 ease-in-out`}
      key={user.userId}
    >
      {/* Avatar cell */}
      <TableCell>
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          className="w-50 h-50 rounded-full"
        />
      </TableCell>

      {/* Username cell */}
      <TableCell>{user.username}</TableCell>

      {/* Email cell */}
      <TableCell>{user.email}</TableCell>

      {/* Score cell */}
      <TableCell>{user.score.toLocaleString()}</TableCell>

      {/* Action cell with delete button */}
      <TableCell>
        <IconButton
          data-testid={'deleteIcon'}
          style={{ color: 'tomato' }}
          onClick={() => deleteUser(user.userId)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRowMui>
  )
}

export default TableRow
