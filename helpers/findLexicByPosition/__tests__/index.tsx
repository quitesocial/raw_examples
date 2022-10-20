import forEach from 'lodash/forEach'
import includes from 'lodash/includes'

import { footballPosAbbrs } from 'config/footballPosAbbrs'

import { findLexicByPosition } from '../index'

const LOWER_TEST_THRESHOLD = 0
const UPPER_TEST_THRESHOLD = 100

describe('findLexicByPosition - PlayersIFollow helper', () => {
  it('returns - if null passed', () => {
    expect(findLexicByPosition(null)).toEqual('-')
  })

  it('returns lexic if valid values passed', () => {
    forEach(footballPosAbbrs, ({ lexic, positions }) => (
      forEach(positions, (position) => (
        expect(findLexicByPosition(position)).toEqual(lexic)
      ))
    ))
  })

  it('returns - if invalid values passed', () => {
    const validValues: Array<number> = []

    forEach(footballPosAbbrs, ({ positions }) => (
      forEach(positions, (position) => validValues.push(position))))

    for (let i = LOWER_TEST_THRESHOLD; i < UPPER_TEST_THRESHOLD; i++) {
      if (!includes(validValues, i)) {
        expect(findLexicByPosition(i)).toEqual('-')
      }
    }
  })
})
