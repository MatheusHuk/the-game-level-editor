import * as global from './global';

export const Types = {
	SELECT: 'editor/SELECT',
	SELECT_LIST: 'editor/SELECT_LIST',
	CHANGE_EXPORT_MODE: 'editor/CHANGE_EXPORT_MODE',
	CHANGE_LEVEL_DATA: 'editor/CHANGE_LEVEL_DATA'
};

const initialState = {
	selectedBlock: "",
	selectedList: 0,
	exportMode: false,
	levelData: []
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
				selectedBlock: "",
				exportMode: false
			};
		case Types.CHANGE_EXPORT_MODE:
			return {
				...state,
				selectedList: -1,
				selectedBlock: "",
				exportMode: true
			}
		case Types.CHANGE_LEVEL_DATA:
			return {
				...state,
				levelData: action.data
			}
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

export function changeExportMode(){
	return async (dispatch) => {
		dispatch({
			type: Types.CHANGE_EXPORT_MODE,
		});
	};
}

export function changeLevelData(data){
	return async (dispatch) => {
		dispatch({
			type: Types.CHANGE_LEVEL_DATA,
			data: data
		})
	}
}