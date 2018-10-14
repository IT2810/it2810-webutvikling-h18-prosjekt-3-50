import moment from 'moment'

export function getSessionDates(sessions) {
  let markedDates = {}
  var dates = sessions.map(session => {
    let date = moment(session["date"]).format('YYYY-MM-DD')
    markedDates[date] = {marked: true} 
  })
  return markedDates
}

// Need dateOne to be a string and dateTwo to be a dateObject
export function isSameDay(dateOne, dateTwo) {
  dateOne = moment(dateOne).format('YYYY-MM-DD')
  return moment(dateOne).isSame(dateTwo.dateString)
}

export function isToday(date) {
  date = moment(date).format('YYYY-MM-DD')
  return moment(date).isSame(moment().format('YYYY-MM-DD'))
}

export function timeString(date) {
  return moment(date, 'HH:MM')
}