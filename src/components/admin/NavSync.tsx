'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useCallback, type ReactNode } from 'react'

export default function NavSync({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  // Send navigation events to portal parent
  useEffect(() => {
    const collMatch = pathname.match(/\/admin\/collections\/([^/]+)/)
    const globalMatch = pathname.match(/\/admin\/globals\/([^/]+)/)
    const slug = collMatch?.[1] || globalMatch?.[1]

    if (slug && window.parent !== window) {
      window.parent.postMessage(
        { type: 'payload-nav', slug },
        '*'
      )
    }
  }, [pathname])

  // Watch for save events (Payload updates the "Last Modified" text after save)
  // and notify the portal to refresh the preview
  useEffect(() => {
    if (window.parent === window) return

    const observer = new MutationObserver(() => {
      // Look for the toast notification that appears after save
      const toasts = document.querySelectorAll('[class*="toast"]')
      toasts.forEach((toast) => {
        if (toast.textContent?.includes('successfully')) {
          window.parent.postMessage({ type: 'payload-saved' }, '*')
        }
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}
