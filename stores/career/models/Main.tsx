import {
  getEnv,
  types,
  SnapshotOut,
  Instance,
} from 'mobx-state-tree'

import get from 'lodash/get'

import { TEnv } from '../types'

const {
  array,
  boolean,
  maybe,
  maybeNull,
  model,
  number,
  string,
} = types

const StatParam = model('StatParam', {
  clickable: maybeNull(boolean),
  o: number,
  p: number,
  pm: maybeNull(maybe(number)),
  pp: maybeNull(maybe(number)),
  v: maybeNull(number),
  v_avg: maybeNull(number),
})

const CatalogItem = model('CatalogItem', {
  id: number,
  name_eng: string,
  name_rus: string,
}).views((self) => ({
  get name() {
    const { lexics: { longSuffix } } = getEnv<TEnv>(self)
    return get(self, `name_${longSuffix}`)
  },
}))

const Tournament = model('Tournament', {
  id: number,
  params: array(StatParam),
})

const Team = model('Team', {
  id: number,
  params: array(StatParam),
  tournaments: array(Tournament),
})

const Season = model('Season', {
  id: number,
  name: string,
  params: array(StatParam),
  season_type: number,
  teams: array(Team),
  tournaments: array(Tournament),
})

export const Main = model('Main', {
  player: maybeNull(CatalogItem),
  seasons: array(Season),
  teams: array(CatalogItem),
  tournaments: array(CatalogItem),
})

export interface ICatalogItem extends Instance<typeof CatalogItem> {}
export interface ICatalogItemOut extends SnapshotOut<typeof CatalogItem> {}
export interface ITournament extends SnapshotOut<typeof Tournament> {}
export interface ITeam extends SnapshotOut<typeof Team> {}
export interface ISeason extends SnapshotOut<typeof Season> {}
export interface IStatParam extends SnapshotOut<typeof StatParam> {}
