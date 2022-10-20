import { types, Instance } from 'mobx-state-tree'

/**
 * Общая модель season профилей
*/
const getYearValue = (date: string | undefined) => (
  date
    ? new Date(date).getFullYear()
    : ''
)

export const Season = types.model({
  date_from: types.maybe(types.string),
  date_to: types.maybe(types.string),
  id: types.number,
}).views((self) => ({
  get seasonName() {
    return `${getYearValue(self.date_from)}-${getYearValue(self.date_to)}`
  },
}))

export interface ISeason extends Instance<typeof Season> {}
