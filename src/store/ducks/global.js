import PropTypes from 'prop-types';

export const Types = {
    RESET: 'RESET'
};

export function reducer(state, initialState, action){
    switch(action.type){
        case Types.RESET:
            return initialState;
        default: 
            return state;
    }
}

// Global Action reset;

export function reset(){
    return {
        type: Types.RESET
    }
}

reducer.propTypes = {
	state: PropTypes.object.isRequired,
	initialState: PropTypes.object.isRequired,
	action: PropTypes.object.isRequired
}