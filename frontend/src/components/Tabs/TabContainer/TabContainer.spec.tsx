import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

import TabContainer from './TabContainer'
const onChangeTab = jest.fn()
const mocksElements = ['test-1', 'test-2']
describe('Tab Component', () => {
  it('Should render Tab', () => {
    const { getByText } = render(
      <TabContainer onChangeTab={onChangeTab} activeTab={0} elements={mocksElements} />
    )
    const TestTab1 = getByText(mocksElements[0])
    const TestTab2 = getByText(mocksElements[0])
    expect(TestTab1).toBeInTheDocument()
    expect(TestTab2).toBeInTheDocument()
  })
  it('Should change Tab', () => {
    const { getByText } = render(
      <TabContainer onChangeTab={onChangeTab} activeTab={0} elements={mocksElements} />
    )
    const settingsTab = getByText(mocksElements[1])
    fireEvent.click(settingsTab)
    expect(onChangeTab).toHaveBeenCalledWith(1)
  })
})
