import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'

import Settings from './Settings'
import { mockProvider, setUserLimit } from '../../mocks/mocks'
import constants from '../../constants'

describe('Settings Component', () => {
  it('Should render slider with default limit', () => {
    const { getByText, getByTestId } = render(mockProvider(<Settings />))

    expect(getByText(`Current value: ${constants.defaultUserLimit}`)).toBeInTheDocument()
    expect(getByTestId('settingSlider')).toBeInTheDocument()
  })
  test('Should trigger setUserLimit when use slider ', () => {
    const { getByTestId } = render(mockProvider(<Settings />))
    const sliderInput = getByTestId('settingSlider').querySelector('input') as HTMLInputElement
    fireEvent.change(sliderInput, { target: { value: 15 } })
    expect(setUserLimit).toHaveBeenCalledTimes(1)
  })
})
