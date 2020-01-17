import { DEFAULT } from '../action-types'

export const setName = name => dispatch => {
  dispatch({ type: DEFAULT.SET_NAME, data: name })
}
