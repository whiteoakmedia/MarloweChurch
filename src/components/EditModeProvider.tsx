'use client'

import { useEffect, useState } from 'react'

/**
 * When the site is loaded inside the portal iframe, this component
 * adds visual edit overlays to any element with data-payload-edit attributes.
 *
 * Usage on elements:
 *   data-payload-edit="collections/staff/3"     → opens /admin/collections/staff/3
 *   data-payload-edit="globals/site-settings"    → opens /admin/globals/site-settings
 *   data-payload-label="Hero Section"            → tooltip label
 */
export function EditModeProvider() {
  const [isInPortal, setIsInPortal] = useState(false)

  useEffect(() => {
    // Only activate when loaded inside an iframe (portal)
    if (window.parent === window) return
    setIsInPortal(true)

    // Inject edit mode styles
    const style = document.createElement('style')
    style.textContent = `
      [data-payload-edit] {
        position: relative;
        transition: outline 0.15s ease, outline-offset 0.15s ease;
        cursor: pointer;
      }
      [data-payload-edit]:hover {
        outline: 2px solid #047857;
        outline-offset: 2px;
        z-index: 40;
      }
      [data-payload-edit]::after {
        content: attr(data-payload-label);
        position: absolute;
        top: 4px;
        right: 4px;
        background: #047857;
        color: white;
        font-size: 11px;
        font-weight: 600;
        padding: 2px 8px;
        border-radius: 4px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.15s ease;
        z-index: 41;
        font-family: system-ui, sans-serif;
        white-space: nowrap;
      }
      [data-payload-edit]:hover::after {
        opacity: 1;
      }
      /* Edit icon */
      [data-payload-edit]::before {
        content: '';
        position: absolute;
        top: 4px;
        left: 4px;
        width: 24px;
        height: 24px;
        background: #047857;
        border-radius: 4px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.15s ease;
        z-index: 41;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2'%3E%3Cpath d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: center;
      }
      [data-payload-edit]:hover::before {
        opacity: 1;
      }
    `
    document.head.appendChild(style)

    // Click handler — send edit path to portal parent
    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest('[data-payload-edit]') as HTMLElement | null
      if (!target) return

      const editPath = target.getAttribute('data-payload-edit')
      if (!editPath) return

      e.preventDefault()
      e.stopPropagation()

      window.parent.postMessage(
        { type: 'payload-edit', path: '/admin/' + editPath },
        '*'
      )
    }

    document.addEventListener('click', handleClick, true)

    return () => {
      document.removeEventListener('click', handleClick, true)
      document.head.removeChild(style)
    }
  }, [])

  if (!isInPortal) return null
  return null
}
