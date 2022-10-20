import { cast } from 'mobx-state-tree'

import {
  Main,
  ISeason,
  ICatalogItemOut,
} from './Main'

export const Setters = Main.actions((self) => ({
  setPlayer(player: ICatalogItemOut) {
    self.player = cast(player)
  },

  setSeasons(seasons: Array<ISeason>) {
    self.seasons = cast(seasons)
  },

  setTeams(teams: Array<ICatalogItemOut>) {
    self.teams = cast(teams)
  },

  setTournaments(tournaments: Array<ICatalogItemOut>) {
    self.tournaments = cast(tournaments)
  },
}))
