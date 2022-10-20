import { lexics } from 'stores/lexics'
import { playerInfo } from 'stores/playerInfo'
import { getSkillsVideoLink } from 'requests/getSkillsVideoLink'
import { usePageId } from 'hooks/usePageId'

type TClickHandler = {
  skillId: number,
  title: number | string,
}

export const useButton = () => {
  const pageId = usePageId()
  const { getLexics, lang } = lexics
  const { player } = playerInfo

  const clickHandler = async ({
    skillId,
    title,
  }: TClickHandler) => {
    const skillTitle = getLexics(title)

    await getSkillsVideoLink({
      lang,
      playerId: pageId,
      playerName: player?.name || '',
      skillId,
      title: skillTitle,
    })
  }

  return {
    clickHandler,
  }
}
