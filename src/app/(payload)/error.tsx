'use client'

import { useEffect } from 'react'

export default function PayloadError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Auto-retry after 3 seconds — DB might still be initializing
    const timer = setTimeout(() => reset(), 3000)
    return () => clearTimeout(timer)
  }, [reset])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif',
      background: '#111',
      color: '#fff',
    }}>
      <div style={{ fontSize: '24px', fontWeight: 600, marginBottom: '12px' }}>
        Initializing...
      </div>
      <div style={{ color: '#888', marginBottom: '24px' }}>
        The database is waking up. This page will reload automatically.
      </div>
      <button
        onClick={() => reset()}
        style={{
          padding: '10px 24px',
          background: '#333',
          color: '#fff',
          border: '1px solid #555',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
        }}
      >
        Retry Now
      </button>
    </div>
  )
}
