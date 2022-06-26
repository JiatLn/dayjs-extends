import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'

declare module 'dayjs' {
  function init(): string
  function between(start: string | Date, end: string | Date): dayjs.Dayjs

}

export default (day: typeof dayjs) => {
  dayjs.between = (from: string | Date, to: string | Date): Dayjs => {
    return day(from).isBefore(to) ? day(from) : day(to)
  }
  dayjs.init = () => 'Dayjs extends init.'
}
