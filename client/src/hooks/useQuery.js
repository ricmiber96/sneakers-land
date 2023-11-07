import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

function useQuery () {
  const location = useLocation()

  return useMemo(() => {
    const searchParams = new URLSearchParams(location.search)
    return Object.fromEntries(searchParams.entries())
  }, [location.search])
}

export default useQuery
