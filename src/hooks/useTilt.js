import { useEffect } from 'react'

const MAX_TILT = 7 // degrees, for card-sized elements
const MAX_TILT_WIDE = 2.5 // full-width panels tilt less so text stays readable
const WIDE_PX = 700

// Gives every [data-tilt] element a 3D tilt towards the pointer, with a soft
// glare that follows it. One delegated listener for the whole page; the look
// lives in index.css. Skipped on touch devices and under reduced motion.
export function useTilt() {
  useEffect(() => {
    const canRun =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canRun) return

    let current = null
    let frame = 0
    let lastEvent = null

    const release = () => {
      if (!current) return
      delete current.dataset.tilting
      current = null
    }

    const apply = () => {
      frame = 0
      const target = lastEvent.target instanceof Element ? lastEvent.target.closest('[data-tilt]') : null
      if (target !== current) release()
      if (!target) return

      const rect = target.getBoundingClientRect()
      const x = (lastEvent.clientX - rect.left) / rect.width // 0…1
      const y = (lastEvent.clientY - rect.top) / rect.height
      const max = rect.width > WIDE_PX ? MAX_TILT_WIDE : MAX_TILT
      target.style.setProperty('--tilt-x', `${((0.5 - y) * 2 * max).toFixed(2)}deg`)
      target.style.setProperty('--tilt-y', `${((x - 0.5) * 2 * max).toFixed(2)}deg`)
      target.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`)
      target.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`)
      target.style.setProperty('--delay', '0ms') // drop the scroll-reveal stagger so it settles back promptly
      target.dataset.tilting = 'true'
      current = target
    }

    const onMove = (event) => {
      lastEvent = event
      if (!frame) frame = requestAnimationFrame(apply)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', release)
    window.addEventListener('blur', release)
    return () => {
      document.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', release)
      window.removeEventListener('blur', release)
      cancelAnimationFrame(frame)
      release()
    }
  }, [])
}
