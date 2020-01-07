import {
	FETCH_BARS_START,
	FETCH_BARS_SUCCESS,
	FETCH_BARS_FAILURE
} from '../actions/bars/types';

const initialState = {
	bars: null,
	loading: false,
	error: null
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_BARS_START:
			return {
				...state,
				loading: true
			};
		case FETCH_BARS_SUCCESS:
			return {
				...state,
				bars: payload,
				loading: false
			};
		case FETCH_BARS_FAILURE:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
};
