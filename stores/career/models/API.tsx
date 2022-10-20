import { flow } from 'mobx-state-tree'

import orderBy from 'lodash/orderBy'

import { getCareerStats } from 'requests/getCareerStats'

import { ISeason, ICatalogItemOut } from './Main'
import { Setters } from './Setters'

type TData = {
  player: ICatalogItemOut,
  seasons: Array<ISeason>,
  teams: Array<ICatalogItemOut>,
  tournaments: Array<ICatalogItemOut>,
}

export const API = Setters.actions((self) => ({
  fetchCareer: flow(function* fetchMatches(pageId: number) {
    const data: TData = yield getCareerStats(pageId)

    self.setPlayer(data.player)
    self.setSeasons(orderBy(
      data.seasons,
      'id',
      'desc',
    ))
    self.setTeams(data.teams)
    self.setTournaments(data.tournaments)
  }),
}))
