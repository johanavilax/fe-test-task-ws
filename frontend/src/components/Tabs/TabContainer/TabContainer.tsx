import { Tab, Tabs } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'

interface TabProps {
  activeTab: number
  onChangeTab: Dispatch<SetStateAction<number>>
  elements: string[]
}

const TabContainer: React.FC<TabProps> = ({ activeTab, onChangeTab, elements }) => {
  return (
    // Render MUI Tabs component to manage tab navigation
    <Tabs value={activeTab} onChange={(_, newValue) => onChangeTab(newValue)}>
      {/* Render each Tab component based on the array */}
      {elements.map(element => (
        <Tab key={element} label={element} />
      ))}
    </Tabs>
  )
}

export default TabContainer
