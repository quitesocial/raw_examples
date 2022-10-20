import { Instance } from 'mobx-state-tree'

import { lexics } from '../lexics'
import { API as CountriesStore } from './models/API'

export const countriesStore = CountriesStore.create({}, { lexics })
export interface ICountriesStore extends Instance<typeof CountriesStore> {}
export * from './models/Main'
