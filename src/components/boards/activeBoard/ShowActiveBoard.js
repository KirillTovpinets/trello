import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import selectActiveBoard from '~/actions/selectActiveBoard';
import enableListEditMode from '~/actions/ToggleListEditMode';
import submitList from '~/actions/submitLIst';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './lists/ListWrapper';
import CreateNewList from './lists/CreateNewList';
import ListEditingMode from './lists/ListEditingMode';
import ListItemsContainer from './lists/ListItemsContainer';

class ShowActiveBoard extends Component {
	static propTypes = {
		selectActiveBoard: PropTypes.func.isRequired
	}

	componentDidMount(){
		const {
			match, 
			selectActiveBoard
		} = this.props;
	}

	getTitle = () => {
		return this.props.activeBoard.title;
	}

	handleListSubmit = values => {
		this.props.submitList(values.listItem);
	}

	render(){
		const { activeBoard, enableListEditMode } = this.props;
		if (activeBoard.isFetching) {
			return (
				<div>Loading... </div>
			)
		}

		return (
			<div>
				<ActiveBoardTitle>
					{this.getTitle()}
				</ActiveBoardTitle>
				<ListWrapper>
					<ListItemsContainer />
					{
						activeBoard.isEditingList
						? <ListEditingMode onSubmit={this.handleListSubmit} />
						: <CreateNewList addList={enableListEditMode} />
					}
				</ListWrapper>
			</div>
		)
	}
}

function mapStateToProps({ activeBoard }){
	return {
		activeBoard
	}
}

export default connect(mapStateToProps, { selectActiveBoard, enableListEditMode, submitList })(ShowActiveBoard)