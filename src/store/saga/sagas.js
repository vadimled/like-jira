import {call, put} from 'redux-saga/effects';
import * as actions from "../actions/dbActions";
import * as actionTypes from "../actionTypes";
import {editEntryApi, fetchDatabaseApi, setNewEntryApi} from "../../Api";

export function* fetchDatabaseSaga() {
    try {
        yield put(actions.setLoading(true));
        const db = yield call(fetchDatabaseApi);
        yield put(actions.setDatabaseToStore(db.data));
    } catch (error) {
        yield put({type: actionTypes.DB_FETCH_FAILED, payload: error.message});
    }
}


export function* setNewEntrySaga(action) {
    try {
        const result = yield call(setNewEntryApi, action.payload);
        const id = result.data.name;
        yield put(actions.addNewEntryToStore({id, data: action.payload}))
    } catch (error) {
        yield put({type: actionTypes.DB_ADD_NEW_ENTRY_FAILED, payload: error.message});
    }
}

export function* editEntrySaga(action) {
    try {
        yield call(editEntryApi, action.payload);
        yield put(actions.editEntryInStore((action.payload)));
    } catch (error) {
        yield put({type: actionTypes.DB_EDIT_ITEM_FAILED, payload: error.message});
    }
}

