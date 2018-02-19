import { CANCEL_NEW_BOARD } from './actionTypes';

export default function cancelCreatingBoard(){
	return {
		type: CANCEL_NEW_BOARD,
		payload: false
	}
}