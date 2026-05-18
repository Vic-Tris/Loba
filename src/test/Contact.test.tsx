import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Contact from '../pages/Contact'
import { useFormStore } from '../store/forms'

// Mock the form store
vi.mock('../store/forms', () => ({
  useFormStore: vi.fn()
}))

describe('Contact Form', () => {
  beforeEach(() => {
    const mockStore = {
      isSubmittingContact: false,
      submitContact: vi.fn().mockResolvedValue(true)
    }
    ;(useFormStore as any).mockReturnValue(mockStore)
  })

  it('should render contact form', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </HelmetProvider>
    )
    
    // Check for form heading
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    const content = heading.textContent || ''
    expect(content).toContain('Discuss Your')
  })

  it('should validate required fields', async () => {
    const user = userEvent.setup()
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </HelmetProvider>
    )
    
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    await user.click(submitButton)
    
    // Form validation should prevent submission
    await waitFor(() => {
      expect(screen.queryByText(/Name is required/)).toBeInTheDocument()
    })
  })

  it('should have phone number field', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </HelmetProvider>
    )
    
    const phoneInput = screen.getByPlaceholderText(/\+234/)
    expect(phoneInput).toBeInTheDocument()
  })

  it('should have service selection dropdown', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <Contact />
        </BrowserRouter>
      </HelmetProvider>
    )
    
    const serviceSelect = screen.getByDisplayValue('Select a service')
    expect(serviceSelect).toBeInTheDocument()
  })
})
