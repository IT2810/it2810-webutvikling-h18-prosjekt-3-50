import moment from 'moment'

export function getSessionDates(sessions) {
  let markedDates = {}
  var dates = sessions.map(session => {
    let date = moment(session["date"]).format('YYYY-MM-DD')
    markedDates[date] = {marked: true} 
  })
  return markedDates
}

// Need dateOne to be YYYY-MM-DD format and dateTwo to be a dateObject
export function isSameDay(dateOne, dateTwo) {
  return moment(dateOne).isSame(dateTwo.dateString)
}

export function isToday(date) {
  console.log("Date in isTOday")
  console.log(date)
  return moment(date).isSame(new Date().dateString)
}

export function TimeString(date) {
  return moment(date, 'HH:MM')
}