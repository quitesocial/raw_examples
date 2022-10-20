import find from 'lodash/find'
import map from 'lodash/map'
import compact from 'lodash/compact'
import sortBy from 'lodash/sortBy'

import { Main } from './Main'

export const Views = Main.views((self) => {
  const getCountryById = (countryId: number) => (
    find(self.countries, { id: countryId })
  )

  const mapCountriesFromIds = (countryIds: Array<number>) => (
    compact(map(countryIds, getCountryById))
  )

  return {
    mapCountriesFromIds,
    get sortedCountries() {
      return sortBy(self.countries, 'name')
    },
  }
})
