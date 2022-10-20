import { cast } from 'mobx-state-tree'

import { ICountry } from './Main'
import { Views } from './Views'

export const Setters = Views.actions((self) => ({
  setCounties(countries: Array<ICountry>) {
    self.countries = cast(countries)
  },
}))
