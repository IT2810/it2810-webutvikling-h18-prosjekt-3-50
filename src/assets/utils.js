import moment from 'moment'

export function getSessionDates (sessions) {
  let markedDates = {}
  var dates = sessions.map(session => {
    let date = moment(session.date).format('YYYY-MM-DD')
    if (session.done) {
      markedDates[date] = {marked: true, dotColor: 'green'}
    } else {
      markedDates[date] = {marked: true}
    }
  })
  return markedDates
}

// Need dateOne to be a string and dateTwo to be a dateObject
export function isSameDay (dateOne, dateTwo) {
  dateOne = moment(dateOne).format('YYYY-MM-DD')
  dateTwo = moment(dateTwo).format('YYYY-MM-DD')
  return moment(dateOne).isSame(dateTwo)
}

export function isToday (date) {
  if (date) {
    return moment().diff(date, 'days') == 0
  } else {
    return false
  }
}

export function toISOString (date) {
  date = moment(date).subtract(1, 'months')
  return moment(date).toISOString()
}
