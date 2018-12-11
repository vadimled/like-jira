import {takeEvery, takeLatest} from "redux-saga/effects";
import * as actionTypes from "../actionTypes";
import {
    fetchDatabaseSaga,
    setNewEntrySaga,
    editEntrySaga
} from "../saga/sagas";

export function* watchSaga() {
    yield takeEvery(actionTypes.DB_FETCH, fetchDatabaseSaga);
    yield takeLatest(actionTypes.DB_ADD_NEW_ENTRY, setNewEntrySaga);
    yield takeLatest(actionTypes.DB_EDIT_ITEM, editEntrySaga);
    // yield takeEvery(actionTypes.DB_DELETE_ITEM, deleteEntrySaga);
    // yield takeEvery(actionTypes.DB_DELETE_CATEGORY, deleteCategorySaga);
}
