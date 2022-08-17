import { SET_CHARACTERS, SET_LOADING, SET_PAGE } from './types'

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
