import { diffObjects } from '..'

describe('diffObjects helper', () => {
  it('should return correct value', () => {
    expect(diffObjects({}, {})).toEqual({})
    expect(diffObjects({ a: 1, b: 1 }, { a: 1, b: 1 })).toEqual({})
    expect(diffObjects({ a: 1, b: 1 }, { a: 1, b: 2 })).toEqual({ b: 1 })
    expect(diffObjects({ a: { b: 1, c: 1 } }, { a: { b: 1, c: 1 } })).toEqual({})
    expect(diffObjects({ a: { b: 1, c: 1 } }, { a: { b: 1, c: 2 } })).toEqual({ a: { b: 1, c: 1 } })
  })
})
