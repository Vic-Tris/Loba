import { describe, it, expect } from 'vitest'
import { cn } from '../utils/cn'

describe('cn Utility (clsx/tailwind-merge)', () => {
  it('should merge classnames correctly', () => {
    const result = cn('px-2', 'py-1', 'px-4')
    expect(result).toContain('py-1')
    // Tailwind-merge removes conflicting classes
    expect(result).not.toContain('px-2')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toContain('base-class')
    expect(result).toContain('active-class')
  })

  it('should handle false conditions', () => {
    const isActive = false
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toContain('base-class')
    expect(result).not.toContain('active-class')
  })

  it('should return empty string for empty input', () => {
    const result = cn('')
    expect(result).toBe('')
  })
})
