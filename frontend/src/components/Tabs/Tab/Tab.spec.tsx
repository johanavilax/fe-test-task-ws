import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Tab from './Tab'

describe('Tab Component', () => {
  it('Should render Tab', () => {
    const { getByText } = render(
      <Tab activeTab>
        <p>test tab</p>
      </Tab>
    )
    const TestTab = getByText('test tab')
  })
})
