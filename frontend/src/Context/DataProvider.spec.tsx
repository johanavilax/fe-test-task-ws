import { render } from '@testing-library/react'
import { defaultProviderMock } from '../mocks/mocks'
import { DataContext } from './DataProvider'

describe('DataProvider Component', () => {
  it('should initialize context correctly', () => {
    const component = render(
      <DataContext.Provider value={defaultProviderMock}>
        <p>test</p>
      </DataContext.Provider>
    )

    expect(component).toBeDefined()
  })
})
