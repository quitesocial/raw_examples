import React from 'react'
import { observer } from 'mobx-react-lite'

import map from 'lodash/map'
import size from 'lodash/size'

import { PlayerSkillsUI } from 'layout/PlayerSkillsUI'

import { ISkill } from 'stores/playerSkills/models/Skills'

import { Button } from '../Button'

import { useButtonsList } from './hooks'

const {
  ButtonsBlock,
  ButtonsBlockWrapper,
  ButtonsColumn
} = PlayerSkillsUI

const ButtonsListFC = () => {
  const { buttons } = useButtonsList()

  const buttonsCount = size(buttons)

  return (
    <ButtonsBlockWrapper buttonsCount={buttonsCount}>
      <ButtonsBlock>
        <ButtonsColumn>
          {
            map(
              buttons,
              ({
                c_skill_id,
                lexical_formula,
                percent,
              }: ISkill) => (
                <Button
                  key={c_skill_id}
                  title={lexical_formula}
                  skillId={c_skill_id}
                  percent={percent}
                />
              )
            )
          }
        </ButtonsColumn>
      </ButtonsBlock>
    </ButtonsBlockWrapper>
  )
}

export const ButtonsList = observer(ButtonsListFC)
