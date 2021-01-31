import common from './common'
import auth from './auth'
import theme from './theme'
import signup from './signup'
import { combineReducers } from 'redux'

export interface State {
  app: string;
  page: string;
}

export default combineReducers({
  common,
  auth,
  theme,
  signup

})
