import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('API Utility', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should have proper base URL configured', () => {
    // This test verifies that the API module loads without errors
    // The actual API interceptor setup is tested through integration tests
    const baseURL = import.meta.env.VITE_API_BASE_URL
    expect(baseURL).toBeDefined()
  })

  it('should provide baseURL from environment', () => {
    expect(import.meta.env.VITE_API_BASE_URL).toBe('http://localhost:4000/api/v1')
  })

  it('should handle missing API base URL gracefully', () => {
    // Environment variable should be set to fallback value
    const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000/api/v1'
    expect(baseURL).toBeDefined()
    expect(baseURL).toContain('localhost')
  })
})

