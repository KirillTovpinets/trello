import { ARCHIVE_POST } from './actionTypes';

export default function archiveCard(cardId, listId){
	return dispatch => {
		dispatch({ type: ARCHIVE_POST, payload: { cardId, listId }})
	}
}