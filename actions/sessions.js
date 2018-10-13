import { ADD_SESSION, SELECT_SESSION, SELECT_DATE } from './types'

export const addSession = (session) => {
  return {
    type: ADD_SESSION,
    payload: session
  }
}

export const selectSession = (id) => {
  return {
    type: SELECT_SESSION,
    payload: id
  }
}

export const selectDate = (date) => {
  return {
    type: SELECT_DATE,
    payload: date
  }
}
