import { useCallback, useEffect, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'theme'
const systemQuery = '(prefers-color-scheme: dark)'

function readStored() {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'dark' || value === 'light' ? value : null
  } catch {
    return null
  }
}

function applyTheme(theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

function subscribe(onChange) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

const getSnapshot = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light')

const getServerSnapshot = () => 'light'

// Theme follows the system until the visitor picks one; the pick is persisted.
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  useEffect(() => {
    const media = window.matchMedia(systemQuery)
    const onChange = (event) => {
      if (!readStored()) applyTheme(event.matches ? 'dark' : 'light')
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggle = useCallback(() => {
    const next = getSnapshot() === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Storage unavailable (private mode) - the choice lasts for this visit only.
    }
    applyTheme(next)
  }, [])

  return { theme, toggle }
}
