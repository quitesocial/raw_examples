import { MDASH } from 'config/emptyValue'

import { fullValue } from '..'

describe('Helpers - fullValue', () => {
  const id = 0
  it('returns true if date is correct', () => {
    const result = fullValue({
      data_type: 'pct',
      id,
      roundedVal: 3,
    })
    expect(result).toBe('3%')
  })
  it('returns true if date is correct', () => {
    const result = fullValue({
      id,
      roundedVal: 3,
    })
    expect(result).toBe('3')
  })
  it('returns true if date is correct', () => {
    const result = fullValue({
      id,
      roundedVal: 0,
    })
    expect(result).toBe(MDASH)
  })
  it('returns true if date is correct', () => {
    const result = fullValue({
      id,
      roundedVal: 0,
    })
    expect(result).toBe(MDASH)
  })
})
