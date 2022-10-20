import React, { Fragment } from 'react'
import { observer } from 'mobx-react-lite'

import get from 'lodash/get'
import map from 'lodash/map'

import { T9n } from 'features/T9n'

import { RecentPagesUI } from 'layout/RecentPagesUI'

import { recentPages } from 'stores/recentPages'

import { useRecentPages } from './hooks'

const {
  RecentContainer,
  RecentIcon,
  RecentIconContainer,
  RecentInfo,
  RecentInfoItem,
  RecentItem,
  RecentList,
  RecentTitle,
} = RecentPagesUI

export const RecentPages = observer(() => {
  const { recentList } = recentPages

  const {
    isFetching,
    nameIndex,
    noteIndex,
  } = useRecentPages()

  return (
    <Fragment>
      {
        !isFetching && (
          <RecentContainer>
            <RecentTitle>
              <T9n t='header_recently_visited' />
            </RecentTitle>
            <RecentList>
              {
                map(
                  recentList,
                  ({
                    isPlayer,
                    isReferee,
                    isTeam,
                    isTournament,
                    url,
                    ...item
                  }) => (
                    <RecentItem
                      target='_blank'
                      rel='noopener noreferrer'
                      key={url}
                      href={url}
                    >
                      <RecentIconContainer>
                        <RecentIcon
                          isPlayer={isPlayer}
                          isReferee={isReferee}
                          isTeam={isTeam}
                          isTournament={isTournament}
                        />
                      </RecentIconContainer>
                      <RecentInfo>
                        <RecentInfoItem isName>
                          {get(item, nameIndex)}
                        </RecentInfoItem>
                        <RecentInfoItem>
                          {get(item, noteIndex)}
                        </RecentInfoItem>
                      </RecentInfo>
                    </RecentItem>
                  ),
                )
              }
            </RecentList>
          </RecentContainer>
        )
      }
    </Fragment>
  )
})
