import moment from 'moment'

export function getSessionDates(sessions) {
  var dates = sessions.map(session => {
    return moment(session["date"]).format('YYYY-MM-DD')
  })

  return markDates(dates)
}
function markDates(dates) {
  let markedDates = {}
  dates.forEach(date => {
    markedDates[date] = {marked: true}
  })
  return markedDates
}
