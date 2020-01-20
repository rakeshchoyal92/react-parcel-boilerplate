import produce from 'immer'

const initialState = { object: 'value' }

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SAMPLE':
      state.object = action.data
      return
    default:
      return state
  }
}

export default produce(reducer, initialState)
