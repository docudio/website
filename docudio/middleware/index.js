import { AUTHORIZE_USER, ACCESS_TOKEN_REQUEST } from '../actions/auth'

export const exchangeAuthCodeForAccessToken = store => next => action => {
  if (action.type === AUTHORIZE_USER) {
    store.dispatch({ type: ACCESS_TOKEN_REQUEST, payload: action.payload.code })
  } else {
    next(action)
  }
}
