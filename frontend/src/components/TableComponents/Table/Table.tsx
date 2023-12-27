import { TableBody, TableCell, TableHead, Table as TableMui, TableRow } from '@mui/material'
import React from 'react'
import { useDataContext } from '../../../Context/DataProvider'
import TableRowItem from '../TableRow/TableRow'

interface ITableProps {}

const Table: React.FC<ITableProps> = () => {
  // Access the users data from the context
  const { users } = useDataContext()

  return (
    <TableMui>
      {/* Table header */}
      <TableHead>
        <TableRow>
          <TableCell>Avatar</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Score</TableCell>
          <TableCell /> {/* Empty cell for delete action */}
        </TableRow>
      </TableHead>

      {/* Table body containing user data */}
      <TableBody>
        {users.map(user => (
          // Render TableRowItem for each user
          <TableRowItem key={user.userId} user={user} />
        ))}
      </TableBody>
    </TableMui>
  )
}

export default Table
