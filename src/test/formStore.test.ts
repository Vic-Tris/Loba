import { describe, it, expect } from 'vitest'
import { useFormStore } from '../store/forms'

describe('Form Store (Zustand)', () => {
  it('should have initial state', () => {
    const store = useFormStore.getState()
    expect(store.isSubmittingContact).toBe(false)
    expect(store.isSubmittingQuote).toBe(false)
  })

  it('should have submitContact method', () => {
    const store = useFormStore.getState()
    expect(typeof store.submitContact).toBe('function')
  })

  it('should have submitQuote method', () => {
    const store = useFormStore.getState()
    expect(typeof store.submitQuote).toBe('function')
  })

  it('should handle form submission state', () => {
    const store = useFormStore.getState()
    expect(store.isSubmittingContact).toBe(false)
    expect(store.isSubmittingQuote).toBe(false)
  })
})
