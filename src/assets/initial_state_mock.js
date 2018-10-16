export default initial_state = {
  sessions: [
    {
      id: 0,
      date: new Date(2018, 9, 2, 13, 40),
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
      ]
    },
    {
      id: 1,
      date: new Date(2018, 9, 15, 16, 30),
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
      ]
    },
    {
      id: 1,
      date: new Date(2018, 12, 15, 16, 30),
      name: 'Session three',
      exercises: [
          { name: 'Squat', sets: '5', reps: '6' },
          { name: 'Deadlift', sets: '5', reps: '6' },
          { name: 'Pushup', sets: '5', reps: '6' },
          { name: 'Bicepscurl', sets: '5', reps: '6' }
      ],
      contacts: [
          {name: 'Fredrik Hansen'},
          {name: 'Katrine Olavsen'}
      ]
    }
  ],
  selectedDate: new Date(),
  activeSession: {
    contacts: [],
    exercises: []
  }
}