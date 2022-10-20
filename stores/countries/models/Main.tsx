import { types, Instance } from 'mobx-state-tree'

import { Name } from 'stores/common/Name'

const {
  array,
  model,
  number,
} = types

const Country = Name.props({
  id: number,
})

export const Main = model({
  countries: array(Country),
})

export interface ICountry extends Instance<typeof Country> {}
