import {
	ADD_SESSION
} from '.types'

export const addSession = (name, reps, sets, kg) => {
  return {
    type: ADD_SESSION,
    name,
    reps,
    sets,
    kg
  }
}
