import { SET_CHARACTERS, SET_LOADING, SET_PAGE } from '../Actions/types'

const initialState = {
  info: {},
  characters: [],
  loading: false,
  page: 1
}

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTERS:
      return { ...state, info: action.payload.info, characters: action.payload.results }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
