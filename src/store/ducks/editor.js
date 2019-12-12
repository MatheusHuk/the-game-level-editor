import * as global from './global';

export const Types = {
	SELECT: 'editor/SELECT'
};

const initialState = {
	selectedBlock: ""
};

export default function reducer(state = initialState, action) {
	switch(action.type) {
		case Types.SELECT:
			return {
				...state,
				selectedBlock: action.payload.select
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