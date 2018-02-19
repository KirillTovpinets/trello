import { CREATE_NEW_BOARD } from './actionTypes';

export default function createNewBoard(){
	return {
		type: CREATE_NEW_BOARD,
		payload: true
	}
}