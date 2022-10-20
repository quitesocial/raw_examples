import { useEffect } from 'react'

import { playerSkills } from 'stores/playerSkills'
import { lexics } from 'stores/lexics'

import { useFetchingHandler } from 'hooks/useFetching'
import { usePageId } from 'hooks/usePageId'

import { playerSkillsLexics } from 'config/lexics/playerSkillsLexics'

export const useButtonsList = () => {
  const pageId = usePageId()
  const { lexicFetch, mergePhrases } = lexics
  const { fetchSkills, list: buttons } = playerSkills

  const {
    handleEvent,
    isFetching,
  } = useFetchingHandler(fetchSkills)

  useEffect(() => {
    handleEvent(pageId)
  }, [handleEvent, pageId])

  useEffect(() => {
    mergePhrases(playerSkillsLexics)
    lexicFetch(playerSkillsLexics)
  }, [lexicFetch, mergePhrases])

  return {
    buttons,
    isFetching,
  }
}
