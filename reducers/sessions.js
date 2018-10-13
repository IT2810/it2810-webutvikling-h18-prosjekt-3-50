const initial_state_mock = require('../src/assets/initial_state_mock.json')


const INITIAL_STATE = initial_state_mock.sessions

//initial_state_mock

/*{
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
}*/

const addSession = (state, session) => {
  // Returnes a new state, doesn't edit the existing one
  return { ...state, sessions: [...state.sessions, action.payload] }
}

// If no state is given, state is set to INITIAL_STATE
export default function (state = INITIAL_STATE, action) {
  console.log("In reducer")
  switch (action.type) {
    case 'ADD_SESSION':
      console.log('Adding session in reducers')
      console.log(action)
      return this.addSession(state, action)
    case 'GET_SESSION':
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
