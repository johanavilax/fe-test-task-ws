import { useState } from 'react'
import { useSocket } from '../../hooks/useSocket'
import Tab from '../Tabs/Tab/Tab'
import TabContainer from '../Tabs/TabContainer/TabContainer'
import Settings from '../Settings/Settings'
import Table from '../TableComponents/Table/Table'

const Board = () => {
  // Initialize the socket connection
  useSocket()

  // State to track the active tab
  const [activeTab, setActiveTab] = useState(0)

  // Define the elements for each tab
  const elements = [
    { name: 'TopUsers', component: <Table /> }, // Table component for Top Users
    { name: 'Settings', component: <Settings /> } // Settings component
  ]

  return (
    <>
      {/* TabContainer to manage tabs */}
      <TabContainer
        elements={elements.map(e => e.name)}
        activeTab={activeTab}
        onChangeTab={setActiveTab}
      />

      {/* Render each tab based on the activeTab */}
      {elements.map((element, index) => (
        <Tab key={element.name} activeTab={index === activeTab}>
          {element.component}
        </Tab>
      ))}
    </>
  )
}

export default Board
