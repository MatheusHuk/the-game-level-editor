import * as global from './global';

export const Types = {
	SELECT: 'editor/SELECT',
	SELECT_LIST: 'editor/SELECT_LIST'
};

const initialState = {
	selectedBlock: "",
	selectedList: 0
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case Types.SELECT:
			return {
				...state,
				selectedBlock: action.payload.select
			};
		case Types.SELECT_LIST:
			return {
				...state,
				selectedList: action.payload.list,
				selectedBlock: ""
			};
		default:
			return global.reducer(state, initialState, action);
	}
}

export function select(block) {
	return async (dispatch) => {
		dispatch({
			type: Types.SELECT,
			payload: {
				select: block
			}
		});
	};
}

export function selectList(index){
	return async (dispatch) => {
		dispatch({
			type: Types.SELECT_LIST,
			payload: {
				list: index
			}
		});
	};
}