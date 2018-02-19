import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateBoardReducer from './CreateBoardReducer';
import BoardCollectionReducer from './BoardCollectionReducer';
import ActiveBoardReducer from './ActiveBoardReducer';
import ActiveBoardDataReducer from './ActiveBoardDataReducer';

const RootReducer = combineReducers({
	form: formReducer,
	newBoard: CreateBoardReducer,
	boardCollection: BoardCollectionReducer,
	activeBoard: ActiveBoardReducer,
	activeBoardData: ActiveBoardDataReducer
})

export default RootReducer;