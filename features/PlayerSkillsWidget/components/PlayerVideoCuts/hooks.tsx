import { useEffect } from 'react'

import size from 'lodash/size'

import { videoCutButtons } from 'stores/videoCutButtons'

import { useFetchingHandler } from 'hooks/useFetching'
import { usePageId } from 'hooks/usePageId'

export const useVideoCutsList = () => {
  const pageId = usePageId()

  const {
    buttons,
    buttonsLeftColumn,
    fetchPlayerSkillsVideoCuts
  } = videoCutButtons

  const {
    handleEvent,
    isFetching,
  } = useFetchingHandler(fetchPlayerSkillsVideoCuts)

  const buttonsCount = size(buttons)

  useEffect(() => {
    handleEvent(pageId)
  }, [handleEvent, pageId])

  return {
    buttonsCount,
    isFetching,
    playerButtons: buttonsLeftColumn,
  }
}
