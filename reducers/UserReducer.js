import {
  USER_ADD_APPOINTMENT
} from '../actions/types'

const INITIAL_STATE = {
  appointmentIdCount: 0,
  user: {
    id: 0,
    firstName: 'My',
    lastName: 'Name',
    appointments: [
      { description: 'example' }
    ],
    currentTarget: {
      id: 0,
      iterationCount: 10000,
      deadline: {
        minutes: 0,
        hours: 20,
        day: 15,
        month: 10,
        year: 2018
      }
    },
    currentTargetIterationsMade: 0
  }
}

const createNewAppointment = (newState, startTime, contacts, todos) => {
  newState.appointmentIdCount++
  return {
    id: newState.appointmentIdCount,
    startTime,
    contacts,
    todos
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_ADD_APPOINTMENT:
      let newState = { ...{}, ...state }
      const { startTime, contacts, todos } = action.payload
      newState.user.appointments.push(createNewAppointment(newState, startTime, contacts, todos))
      return newState
    default:
      return state
  }
}
