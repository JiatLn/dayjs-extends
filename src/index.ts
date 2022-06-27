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
}
/**
 * Return `DayjsExt` Instance
 */
export default function dayjsExt() {
  return new DayjsExt()
}
