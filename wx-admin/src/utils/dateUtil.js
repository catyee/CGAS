import filters from './filter'
const formatDate = filters.formatDate
// 获取本周的第一天
export function weekFirstDay () {
  var nowdate = new Date()
  var day = new Date(nowdate - (nowdate.getDay() === 0 ? 6 : nowdate.getDay() - 1) * 86400000)
  return formatDate(day, 'YYYY-mm-dd')
}
// 获取下周的第一天
export function weekLastDay () {
  var nowdate = new Date()
  var day = new Date(nowdate - (nowdate.getDay() === 0 ? -1 : nowdate.getDay() - 8) * 86400000)
  return formatDate(day, 'YYYY-mm-dd')
}
// 获取本月的第一天
export function monthFirstDay () {
  var Nowdate = new Date()
  var day = new Date(Nowdate.getFullYear(), Nowdate.getMonth(), 1)
  console.log(day)
  return formatDate(day, 'YYYY-mm-dd')
}
// 获取下月的第一天
export function monthLastDay () {
  var Nowdate = new Date()
  var day = new Date(Nowdate.getFullYear(), Nowdate.getMonth() + 1, 1)
  return formatDate(day, 'YYYY-mm-dd')
}
// 获取本年的第一天
export function yearFirstDay () {
  var Nowdate = new Date()
  var day = new Date(Nowdate.getFullYear(), 0, 1)
  return formatDate(day, 'YYYY-mm-dd')
}
// 获取下年的第一天
export function yearLastDay () {
  var Nowdate = new Date()
  var day = new Date(Nowdate.getFullYear() + 1, 0, 1)
  return formatDate(day, 'YYYY-mm-dd')
}
