import { SUBMIT_LIST } from './actionType';

export default function submitList(name) {
	return dispatch => {
		dispatch({ type: SUBMIT_LIST, payload: name })
	}
}