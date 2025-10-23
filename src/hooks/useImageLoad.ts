import { useEffect, useRef } from 'react'

/**
 * Hook to add smooth fade-in effect when lazy-loaded images complete loading
 */
export const useImageLoad = () => {
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const img = imgRef.current
    if (!img) return

    const handleLoad = () => {
      img.classList.add('loaded')
    }

    if (img.complete) {
      handleLoad()
    } else {
      img.addEventListener('load', handleLoad)
    }

    return () => {
      img.removeEventListener('load', handleLoad)
    }
  }, [])

  return imgRef
}
