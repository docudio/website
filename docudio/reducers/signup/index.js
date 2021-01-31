import { SIGNUP_REQUESTED } from '../../actions/signup'

const defaultState = {
  preferred: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SIGNUP_REQUESTED:
      console.log("SIGNUP")
      return {
        ...state,
        isSigningUp: true
      }
    default:
      return state
  }
}
