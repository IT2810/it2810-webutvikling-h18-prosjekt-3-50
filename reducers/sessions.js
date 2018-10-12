
const INITIAL_STATE = {
  sessions: [
    {
      id: 0,
      date: new Date(2018, 9, 5, 13, 4, 0),
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
      date: new Date(2018, 9, 10, 16, 30),
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
    }
  ]
}

const addSession = (state, session) => {
  return Object.assing({}, state, {
    sessions: [
      ...state,
      {
        id: session.id,
        date: session.date,
        name: session.name,
        exercises: session.exercises,
        contacts: session.contacs
      }
    ]
  })
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SESSION':
      console.log('Adding session in reducers')
      console.log(action)
      this.addSession(state, action)
    case 'GET_SESSION':
      // TODO
    case 'GET_ALL_SESSIONS':
      // TODO
    default:
      return state
  }
}

function todoApp (state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    default:
      return state
  }
}
