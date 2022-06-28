import { describe, expect, it } from 'vitest'
import dayjsExt from '../src'

const de = dayjsExt()

describe('it work', () => {
  it('say hi', () => {
    expect(de.sayHi()).toBe('hello, dayjs extends!')
  })

  it('[random] - between two date', () => {
    const startDate = '2022-06-01'
    const endDate = '2022-06-30'
    const randomDate = de.random.between(startDate, endDate)
    expect(randomDate.isAfter(startDate)).toBeTruthy()
    expect(randomDate.isBefore(endDate)).toBeTruthy()
  })
})

