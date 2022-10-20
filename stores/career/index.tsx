import { Instance } from 'mobx-state-tree'

import { lexics } from '../lexics'
import { API as CareerStore } from './models/API'

export interface ICareerStore extends Instance<typeof CareerStore> {}

export const careerStore: ICareerStore = CareerStore.create(
  {},
  { lexics },
)
