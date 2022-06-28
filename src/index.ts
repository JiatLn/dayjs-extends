import dayjs from 'dayjs'
import type { DateLike, DateRandom } from './types'

function between(start: DateLike, end: DateLike) {
  const startDate = dayjs(end).valueOf()
  const endDate = dayjs(start).valueOf()
  const dateDelta = endDate - startDate
  const randomDate = Math.floor(Math.random() * dateDelta + 1)
  return dayjs(startDate + randomDate)
}

class DayjsExt {
  random: DateRandom
  constructor() {
    this.random = {
      between,
    }
  }

  sayHi(): string {
    return 'hello, dayjs extends!'
  }

  /**
   * get now date
   */
  getToday(template?: string) {
    template = template || 'YYYY-MM-DD'
    return dayjs().format(template)
  }

  /**
   * get month start and end date with a date (default is now)
   */
  getMonthRange(date?: DateLike, template = 'YYYY-MM-DD'): [DateLike, DateLike] {
    date = dayjs(date)
    const year = date.year()
    const month = date.month()
    const endDay = date.daysInMonth()
    const d1 = new Date(year, month, 1)
    const d2 = new Date(year, month, endDay)
    return [dayjs(d1).format(template), dayjs(d2).format(template)]
  }

  /**
   * get a date that is one date before or after delta days
   */
  getDateWithDelta(date: DateLike, delta: number, template = 'YYYY-MM-DD'): DateLike {
    return dayjs(date).add(delta, 'day').format(template)
  }

  /**
   * The number of days between two dates
   * @param date1 date like `2022/06/12`
   * @param date2  date like `2022/06/18`
   * @returns number of days
   */
  getTwoDateDeltaDay(date1: DateLike, date2: DateLike): number {
    const dateOne = dayjs(date1).unix()
    const dateTwo = dayjs(date2).unix()
    return Math.ceil(Math.abs(dateOne - dateTwo) / (86400))
  }
}
/**
 * Return `DayjsExt` Instance
 */
export default function dayjsExt() {
  return new DayjsExt()
}
