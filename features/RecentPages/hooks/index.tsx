import { useEffect } from 'react'

import { useFetchingHandler } from 'hooks/useFetching'

import { lexics } from 'stores/lexics'
import { recentPages } from 'stores/recentPages'

export const useRecentPages = () => {
  const { longSuffix } = lexics
  const { fetchRecent } = recentPages

  const nameIndex = `name_${longSuffix}`
  const noteIndex = `note_${longSuffix}`

  const {
    handleEvent: fetchRecentPages,
    isFetching,
  } = useFetchingHandler(fetchRecent)

  useEffect(() => {
    fetchRecentPages()
  }, [fetchRecentPages])

  return {
    isFetching,
    nameIndex,
    noteIndex,
  }
}
