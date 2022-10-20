import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'

import { isGridiron } from 'config/routes'

import { T9n } from 'features/T9n'
import { Loader } from 'features/Loader'
import { LoaderWrapper } from 'features/PlayerPassportWidget/styled'
import { OverviewBlocksUI } from 'layout/OverviewBlocks'
import { PlayerSkillsUI } from 'layout/PlayerSkillsUI'

import { ButtonsList } from './components/ButtonsList'
import { PlayerVideoCuts } from './components/PlayerVideoCuts'
import { useButtonsList } from './components/ButtonsList/hooks'

const {
  BlockContainer,
  BlockHeader,
  BlockTitle,
} = OverviewBlocksUI
const { BlockTitleWrapper } = PlayerSkillsUI

const PlayerSkillsWidgetFC = () => {
  const { isFetching: isButtonsListFetching } = useButtonsList()

  return (
    <BlockContainer>
      {
        isButtonsListFetching
          ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          )
          : (
            <Fragment>
              <BlockTitleWrapper>
                <BlockHeader withBorder>
                  <BlockTitle>
                    <T9n t='header_skills' />
                  </BlockTitle>
                </BlockHeader>
              </BlockTitleWrapper>
              {
                isGridiron
                  ? <PlayerVideoCuts />
                  : <ButtonsList />
              }
            </Fragment>
          )
      }
    </BlockContainer>
  )
}

export const PlayerSkillsWidget = observer(PlayerSkillsWidgetFC)
