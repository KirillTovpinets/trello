import { LIST_EDIT_MODE_ENABLED } from './actionTypes';

export default function enableListEditMode(){
	return dispatch => dispatch({ type: LIST_EDIT_MODE_ENABLED, payload: true });
}