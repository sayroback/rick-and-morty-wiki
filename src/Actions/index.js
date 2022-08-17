import { SET_CHARACTERS, SET_LOADING, SET_PAGE, SET_FILTER, SET_FINDNAME } from './types'

export const setCharacters = (payload) => ({
  type: SET_CHARACTERS,
  payload
})
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})
export const setPage = (payload) => ({
  type: SET_PAGE,
  payload
})
export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload
})
export const setFindName = (payload) => ({
  type: SET_FINDNAME,
  payload
})
