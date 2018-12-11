import * as types from '../../store/actionTypes'

export function fetchDB() {
  return{
    type: types.DB_FETCH
  }
}

export function setDatabaseToStore(dataArray) {
  return {
    type: types.DB_FETCH_SUCCESS,
    payload: dataArray
  }
}

export function addDBEntry(data) {
  return {
    type: types.DB_ADD_NEW_ENTRY,
    payload: data
  }
}

export function addNewEntryToStore(data) {
  return {
    type: types.DB_ADD_NEW_ENTRY_SUCCESS,
    payload: data
  }
}

export function setLoading(status) {
  return {
    type: types.SET_LOADING,
    payload: status
  }
}

export function onFindTickets(str) {
  return {
    type: types.ON_FIND_TICKETS,
    payload: str
  }
}

