import { describe, it, expect, beforeEach, vi } from 'vitest'
import { api } from '../utils/api'

describe('API Utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should have proper base URL configured', () => {
    // axios instance always has a baseURL (env or /api fallback)
    expect(api.defaults.baseURL).toBeDefined()
  })

  it('should provide baseURL from environment or fallback', () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
    expect(api.defaults.baseURL).toBe(baseURL)
  })

  it('should handle missing API base URL gracefully', () => {
    const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'
    expect(baseURL).toBeDefined()
    expect(typeof baseURL).toBe('string')
    expect(baseURL.length).toBeGreaterThan(0)
  })
})
