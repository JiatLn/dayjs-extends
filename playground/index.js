import dayjsExt from '../lib/index.js'

const de = dayjsExt()

const date1 = de.random.between('2018-01-01', '2018-01-31').format('YYYY-MM-DD')
const date2 = de.getToday()
const date3 = de.sayHi()
console.table([date1, date2, date3])
