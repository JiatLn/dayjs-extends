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
}
/**
 * Return `DayjsExt` Instance
 */
export default function dayjsExt() {
  return new DayjsExt()
}
