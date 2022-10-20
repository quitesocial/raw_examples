import { getEnv, types } from 'mobx-state-tree'

import get from 'lodash/get'

import { ILexics } from 'stores/lexics'

export type TEnv = {
  lexics: ILexics,
}

export const Name = types.model({
  name_eng: types.maybeNull(types.string),
  name_rus: types.maybeNull(types.string),
}).views((self) => ({
  get name(): string {
    const { lexics: { longSuffix } } = getEnv<TEnv>(self)
    return get(
      self,
      `name_${longSuffix}`,
      '',
    )
  },
}))
