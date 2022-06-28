import type { Dayjs } from 'dayjs'

export type DateLike = string | number | Date | Dayjs

export interface DateRandom {
  between: (start: DateLike, end: DateLike) => Dayjs
}
