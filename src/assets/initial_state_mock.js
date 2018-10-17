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
    date: new Date(2018, 9, 17, 16, 30),
    time: new Date(2018, 9, 17, 16, 30),
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
    done: false
  },
  {
    id: 2,
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

let activeSession = {
  name: null,
  date: null,
  time: null,
  contacts: [],
  exercises: [],
  done: false
}

sessions.forEach(session => {
  if (
    selectedDate.getDate() == session.date.getDate()
    && selectedDate.getMonth() == session.date.getMonth()
    && selectedDate.getYear() == session.date.getYear()
  ) {
    activeSession = session
  }
})

export default initial_state = {
  sessions,
  selectedDate,
  activeSession
}
