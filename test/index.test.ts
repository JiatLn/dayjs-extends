import dayjs from 'dayjs'
import { describe, expect, it } from 'vitest'
import dayjsExt from '../src'

const de = dayjsExt()

describe('utils', () => {
  it('say hi', () => {
    expect(de.sayHi()).toBe('hello, dayjs extends!')
  })

  it('get month range start and end date with a date', () => {
    const oneDate = '2022-06-12'
    const monthRange = de.getMonthRange(oneDate)
    expect(monthRange).toStrictEqual(['2022-06-01', '2022-06-30'])
  })

  it('get today with default format YYYY-MM-DD', () => {
    const today = de.getToday()
    expect(today).toEqual(dayjs().format('YYYY-MM-DD'))
  })

  it('get a date after 7 day', () => {
    const date = '2022-06-12'
    expect(de.getDateWithDelta(date, -7)).toEqual('2022-06-05')
    expect(de.getDateWithDelta(date, 7)).toEqual('2022-06-19')
  })

  it('get delta days between date1 and date2', () => {
    const date1 = '2022/06/12'
    const date2 = '2022/06/19'
    const date3 = '2022/06/16'
    expect(de.getTwoDateDeltaDay(date1, date2)).toEqual(7)
    expect(de.getTwoDateDeltaDay(date2, date3)).toEqual(3)
  })
})

