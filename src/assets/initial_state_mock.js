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
    date: new Date(2018, 9, 13, 18, 30),
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

const stepStats = [  // only one element per date, meaning date is the element key
  {
    target: 9500,
    result: 5143,
    date: new Date(2018, 9, 12)
  },
  {
    target: 5000,
    result: 8913,
    date: new Date(2018, 9, 13)
  },
  {
    target: 5000,
    result: 2421,
    date: new Date(2018, 9, 14)
  },
  {
    target: 10000,
    result: 7916,
    date: new Date(2018, 9, 15)
  },
  {
    target: 10000,
    result: 10015,
    date: new Date(2018, 9, 16)
  },
  {
    target: 15000,
    result: 10714,
    date: new Date(2018, 9, 17)
  },
  {
    target: 15000,
    result: 13104,
    date: new Date(2018, 9, 18)
  },
  {
    target: 15000,
    result: 14104,
    date: new Date(2018, 9, 19)
  }
]

const contacts = [
  {"name": "Ola Nordmann"},
  {"name": "Kari Nordmann"},
  {"name": "Kristine Hansen"},
  {"name": "Alfrled Bustad"},
  {"name": "Hege Nielsen"}
]

export default initial_state = {
  sessions,
  selectedDate,
  currentSessionId,
  temporarySession,
  stepStats,
  contacts
}
