import { getCountries } from 'requests/getCountries'

import { ICountry } from './Main'
import { Setters } from './Setters'

export const API = Setters.actions((self) => ({
  async fetchCountries() {
    const countries: Array<ICountry> = await getCountries() || []

    self.setCounties(countries)
  },
}))
