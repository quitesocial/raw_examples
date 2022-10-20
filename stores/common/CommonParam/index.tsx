import { types } from 'mobx-state-tree'

import isNull from 'lodash/isNull'
import round from 'lodash/round'

import { smartRound } from 'helpers/smartRound'

import { fullValue } from './helpers/fullValue'

const {
  boolean,
  maybe,
  maybeNull,
  model,
  number,
  string,
  union,
} = types

export const CommonParam = model({
  bold: maybeNull(boolean),
  clickable: maybeNull(union(boolean, number)),
  clickable_avg: maybeNull(boolean),
  data_type: string,
  decimal: maybe(maybeNull(number)),
  id: number,
  lexica: maybeNull(union(number, string)),
  o: maybeNull(number),
  offset_end: maybeNull(number),
  offset_start: maybeNull(number),
  opp_val: maybeNull(number),
  rank: maybe(maybeNull(number)),
  val: maybeNull(number),
  val_avg: maybeNull(number),
}).views((self) => ({
  get isAvgClickable() {
    return Boolean(self.clickable_avg) && !isNull(self.val_avg)
  },

  get isClickable() {
    return Boolean(self.clickable) && !isNull(self.val)
  },

  get isPercent() {
    return self.data_type === 'pct'
  },

  get option() {
    if (isNull(self.o)) return 0
    return self.o
  },

  get roundedOppVal() {
    return self.opp_val
      ? smartRound(Number(self.opp_val), this.isPercent)
      : null
  },

  get roundedRanking() {
    return self.rank && self.decimal
      ? round(self.rank, self.decimal)
      : null
  },

  get roundedVal() {
    return self.val
      ? smartRound(Number(self.val), this.isPercent)
      : null
  },

  get roundedValAvg() {
    return self.val_avg
      ? smartRound(Number(self.val_avg))
      : null
  },

  get seasonAvgValue() {
    return fullValue({
      data_type: self.data_type,
      id: self.id,
      roundedVal: smartRound(Number(self.val_avg)),
    })
  },

  get value() {
    return fullValue({
      data_type: self.data_type,
      id: self.id,
      roundedVal: smartRound(Number(self.val)),
    })
  },
}))
