import moment from 'moment'

export function getSessionDates(sessions) {
  let markedDates = {}
  var dates = sessions.map(session => {
    let date = moment(session["date"]).format('YYYY-MM-DD')
    markedDates[date] = {marked: true} 
  })
  return markedDates
}

export function isSameDay(dateOne, dateTwo) {
  console.log("Is same day")
  console.log(dateOne)
  console.log(dateTwo)
/*  const format = 'YYYY-MM-DD'
  dateOne = moment(dateOne, format)
  dateTwo = moment(dateTwo, format)*/
  console.log(dateOne)
  console.log(dateTwo)
  //console.log(dateOne.dateString == dateTwo.dateString  )
  console.log(moment(dateOne).isSame(dateTwo.dateString))
  return moment(dateOne).isSame(dateTwo.dateString)
}
