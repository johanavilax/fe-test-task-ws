import { renderHook } from '@testing-library/react'
import { useSocket } from './useSocket'

describe('useSocket hook', () => {
  it('should not throw errors in the hook', () => {
    try {
      renderHook(() => useSocket())
    } catch (error) {
      expect(error).toBeUndefined()
    }
  })
})
