import find from 'lodash/find'
import get from 'lodash/get'
import includes from 'lodash/includes'

import { footballPosAbbrs } from 'config/footballPosAbbrs'

export const findLexicByPosition = (
  value: number | null,
  lexicField: 'lexic' | 'full_lexic' | undefined = 'lexic',
) => get(
  find(footballPosAbbrs, ({ positions }) => includes(positions, value)),
  lexicField,
  '-',
)
