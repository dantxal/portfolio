import { useCallback, useEffect, useState } from 'react'

const getWidthFromRef = (myRef: React.RefObject<HTMLElement>) => {
  const getWidth = useCallback(() => myRef?.current?.offsetWidth, [myRef])

  const [width, setWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    const handleResize = () => {
      setWidth(getWidth())
    }

    if (myRef.current) {
      setWidth(getWidth())
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [myRef, getWidth])

  return width
}

export default getWidthFromRef
