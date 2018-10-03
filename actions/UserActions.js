import {
  USER_ADD_APPOINTMENT,
} from './types'

export const userAddAppointmentSynchronousAction = ( startTime, contacts, todos ) => {
  return { type: USER_ADD_APPOINTMENT, payload: { startTime, contacts, todos } }
}

/*export const userAddAppointmentAsynchronousAction = ( startTime, contact, todos ) => async dispatch => {
  dispatch( { type: USER_ADD_APPOINTMENT, payload: { startTime, contact, todos } } )
}*/
