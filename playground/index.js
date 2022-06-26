import dayjs from 'dayjs'
import DayjsExtends from '../lib/index.js'

dayjs.extend(DayjsExtends)

const text = dayjs.init()
console.log('==============')
console.log(text)
console.log('==============')
