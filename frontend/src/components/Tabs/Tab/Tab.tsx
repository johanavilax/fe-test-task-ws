import React from 'react'
import { Box } from '@mui/material'

interface ITabProps {
  children: React.ReactNode
  activeTab: boolean
}

const Tab: React.FC<ITabProps> = ({ children, activeTab }) => {
  // Render the content inside a Box only if the tab is active
  return activeTab ? (
    <div>
      <Box p={3}>{children}</Box>
    </div>
  ) : (
    // If the tab is not active, render an empty fragment
    <></>
  )
}

export default Tab
