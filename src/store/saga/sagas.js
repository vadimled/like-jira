import {call, put, race} from 'redux-saga/effects';
import * as actions from "../actions/dbActions";
import * as actionTypes from "../actionTypes";
import {deleteEntryApi, editEntryApi, fetchDatabaseApi, setNewEntryApi} from "../../Api";

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
/*
export function* deleteEntrySaga(action) {
    yield put(actions.setToolBarActive);
    try {
        yield call(deleteEntryApi, action.payload);
        yield put(actions.deleteDataFromStore(action.payload))
    } catch (error) {
        yield put({type: actionTypes.DB_DELETE_ITEM_FAILED, payload: error.message});
    }
}

export function* deleteCategorySaga(action) {
    try {
        for (const i in action.payload) {
            if (action.payload.hasOwnProperty(i)) {
                yield race({
                    key1: call(deleteEntryApi, action.payload[i]),
                    key2: put(actions.deleteDataFromStore(action.payload[i]))}
                )
            }
        }
        yield put(actions.setToolBarActive);
    } catch (error) {
        put({type: actionTypes.DB_DELETE_CATEGORY_FAILED, payload: error.message});
    }
}

export function* editEntrySaga(action) {
    yield put(actions.setToolBarActive);
    try {
        yield call(editEntryApi, action.payload);
        yield put(actions.editEntryInStore((action.payload)));
    } catch (error) {
        yield put({type: actionTypes.DB_EDIT_ITEM_FAILED, payload: error.message});
    }
}

*/
