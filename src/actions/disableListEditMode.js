import { STOP_EDITING_LIST } from './actionTypes';

export default function disableListEditMode(){
	return dispatch => dispatch({ type: STOP_EDITING_LIST, payload: false });
}