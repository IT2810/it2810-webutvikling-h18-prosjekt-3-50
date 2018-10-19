import { isSameDay } from './utils'

export const emptySession = {
  date: null,
  time: null,
  name: null,
  exercises: [],
  contacts: [],
  done: false
}

const sessions = [
  {
    id: 0,
    date: new Date(2018, 9, 2, 13, 40),
    time: new Date(2018, 9, 2, 13, 40),
    name: 'Session one',
    exercises: [
        { name: 'Squat', sets: '4', reps: '12' },
        { name: 'Benchpress', sets: '4', reps: '12' },
        { name: 'Pullup', sets: '4', reps: '12' },
        { name: 'Row', sets: '4', reps: '12' }
    ],
    contacts: [
        {name: 'Ola Nordmann'},
        {name: 'Kari Hansen'}
    ],
    done: true
  },
  {
    id: 1,
    date: new Date(2018, 9, 17, 18, 30),
    time: new Date(2018, 9, 17, 18, 30),
    name: 'Session two',
    exercises: [
        { name: 'Squat', sets: '5', reps: '6' },
        { name: 'Deadlift', sets: '5', reps: '6' },
        { name: 'Pushup', sets: '5', reps: '6' },
        { name: 'Bicepscurl', sets: '5', reps: '6' }
    ],
    contacts: [
        {name: 'Fredrik Hansen'},
        {name: 'Katrine Olavsen'}
    ],
    done: true
  },
  {
    id: 2,
    date: new Date(2018, 9, 17, 16, 30),
    time: new Date(2018, 9, 17, 16, 30),
    name: 'Session three',
    exercises: [
        { name: 'Squat', sets: '5', reps: '6' },
        { name: 'Deadlift', sets: '5', reps: '6' },
        { name: 'Pushup', sets: '5', reps: '6' },
        { name: 'Bicepscurl', sets: '5', reps: '6' }
    ],
    contacts: [
        {name: 'Ola Nordmann'},
        {name: 'Katrine Olavsen'}
    ],
    done: false
  },
  {
    id: 3,
    date: new Date(2018, 9, 29, 8, 30),
    time: new Date(2018, 9, 29, 8, 30),
    name: 'Session three',
    exercises: [
        { name: 'Squat', sets: '5', reps: '6' },
        { name: 'Deadlift', sets: '5', reps: '6' },
        { name: 'Pushup', sets: '5', reps: '6' },
        { name: 'Bicepscurl', sets: '5', reps: '6' }
    ],
    contacts: [
        {name: 'Ola Nordmann'},
        {name: 'Katrine Olavsen'}
    ],
    done: false
  },
  {
    id: 4,
    date: new Date(2018, 9, 29, 8, 30),
    time: new Date(2018, 9, 29, 8, 30),
    name: 'Session three',
    exercises: [
        { name: 'Squat', sets: '5', reps: '6' },
        { name: 'Deadlift', sets: '5', reps: '6' },
        { name: 'Pushup', sets: '5', reps: '6' },
        { name: 'Bicepscurl', sets: '5', reps: '6' }
    ],
    contacts: [
        {name: 'Ola Nordmann'},
        {name: 'Katrine Olavsen'}
    ],
    done: false
  }
]

const selectedDate = new Date()
const currentSessionId = -1
const temporarySession = emptySession

export default initial_state = {
  sessions,
  selectedDate,
  currentSessionId,
  temporarySession
}
