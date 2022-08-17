import { SET_CHARACTERS } from '../Actions/types'

const initialState = {
  info: {},
  characters: []
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, info: action.payload.info, characters: action.payload.results }
    default:
      return state
  }
}
