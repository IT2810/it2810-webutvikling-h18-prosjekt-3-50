import { ADD_SESSION } from './types'

export const addSession = (session) => {
  return {
    type: ADD_SESSION,
    payload: session
  }
}
