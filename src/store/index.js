import { createStore } from 'redux'

const INITIAL_STATE = {
  updating: false
}

function reducer(state = INITIAL_STATE, action) {
  if (action.type ===  'TOGGLE_UPDATING') {
    return { updating: action.updating }
  }
  
  return state
}

const store = createStore(reducer)

export default store