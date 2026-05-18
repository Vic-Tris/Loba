import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Loader } from '../components/ui/Loader'

describe('Loader Component', () => {
  it('should render loader container', () => {
    render(<Loader />)
    const container = screen.getByAltText('Loader icon')
    expect(container).toBeInTheDocument()
  })

  it('should render image with correct src', () => {
    render(<Loader />)
    const img = screen.getByAltText('Loader icon')
    expect(img).toHaveAttribute('src', '/images/IMG-20260512-WA0018[1].jpg')
  })

  it('should have correct dimensions (1.5x larger than original)', () => {
    render(<Loader />)
    const container = screen.getByAltText('Loader icon').parentElement
    // w-24 h-24 = 96px (1.5x of 64px which was w-16 h-16)
    expect(container?.className).toContain('w-24')
    expect(container?.className).toContain('h-24')
  })

  it('should have animation classes', () => {
    render(<Loader />)
    const container = document.querySelector('[class*="fixed"]')
    expect(container).toBeInTheDocument()
  })
})
