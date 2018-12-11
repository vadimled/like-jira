import * as types from '../../store/actionTypes';
import createReducer from '../../store/reducers/createReducer';
import {getBucketsContent} from "../../utils/dbHandlers";

const initialState = {
  tickets: {},
  buckets: {
    open: [],
    progress: [],
    done: []
  },
  loading: false,
  dbError: {}
};

const dbReducer = createReducer(initialState, {
  [types.DB_FETCH_SUCCESS]: (state, {type, payload}) => {
    const newBuckets = getBucketsContent(payload);
    return {
      ...state,
      tickets: {...payload},
      buckets: {...newBuckets},
      loading: false
    }
  },
  [types.DB_ADD_NEW_ENTRY_SUCCESS]: (state, {type, payload}) => {
    const newItem = {...state.tickets, [payload.id]: payload.data};
    const newBuckets = getBucketsContent(newItem);
    return {
      ...state,
      tickets: newItem,
      buckets: {...newBuckets}
    }
  },
  [types.DB_SET_ERROR]: (state, {type, payload}) => {
    return {
      ...state,
      dbError: {...state.dbError, ...{[payload]: payload}}
    }
  },
  [types.SET_LOADING]: (state, {type, payload}) => {
    return {
      ...state,
      loading: payload
    }
  },
  [types.ON_FIND_TICKETS]: (state, {type, payload}) => {
    const newBuckets = getBucketsContent(state.tickets, payload);
     return {
      ...state,
      buckets: {...newBuckets},
    }
  },
  [types.DB_EDIT_ITEM_SUCCESS]: (state, {type, payload}) => {
    const newTickets = {...state.tickets, [payload.id]: payload.edited};
    const newBuckets = getBucketsContent(newTickets);
     return {
      ...state,
      tickets: newTickets,
      buckets: {...newBuckets},
    }
  }
});

export default dbReducer;
