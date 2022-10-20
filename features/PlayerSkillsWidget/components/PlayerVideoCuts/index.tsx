import React from 'react'
import { observer } from 'mobx-react-lite'

import map from 'lodash/map'
import sortBy from 'lodash/sortBy'

import { T9n } from 'features/T9n'
import {
  ButtonsBlockUl,
  ButtonsRowContainer,
} from 'features/TeamVideoCuts/components/ButtonsColumn/styled'

import { PlayerSkillsUI } from 'layout/PlayerSkillsUI'
import { TeamVideoCutsUI } from 'layout/TeamVideoCutsUI'

import { useVideoCutsList } from './hooks'
import { VideoCutsButton } from './VideoCutsButton'

const {
  ButtonsBlock,
  ButtonsBlockWrapper,
} = PlayerSkillsUI

const {
  ButtonsColumnWrapper,
  ButtonsListTitle,
} = TeamVideoCutsUI

const PlayerVideoCutsFC = () => {
  const { buttonsCount, playerButtons } = useVideoCutsList()

  return (
    <ButtonsBlockWrapper buttonsCount={buttonsCount}>
      <ButtonsBlock>
        <ButtonsColumnWrapper>
          {
            map(
              playerButtons,
              ({
                blockId,
                blockTitle,
                buttons,
              }) => {
                const sortedButtons = sortBy(buttons, ['order'])

                return (
                  <ButtonsRowContainer key={blockId}>
                    <ButtonsListTitle>
                      <T9n t={blockTitle || ''} />
                    </ButtonsListTitle>
                    <ButtonsBlockUl>
                      {
                        map(
                          sortedButtons,
                          (button) => (
                            <VideoCutsButton
                              key={`${button.order}`}
                              buttonParams={button}
                            />
                          )
                        )
                      }
                    </ButtonsBlockUl>
                  </ButtonsRowContainer>
                )
              }
            )
          }
        </ButtonsColumnWrapper>
      </ButtonsBlock>
    </ButtonsBlockWrapper>
  )
}

export const PlayerVideoCuts = observer(PlayerVideoCutsFC)
