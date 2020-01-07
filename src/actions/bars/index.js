import {
	FETCH_BARS_START,
	FETCH_BARS_SUCCESS,
	FETCH_BARS_FAILURE
} from './types';

import { fetchBarsApi } from '../../api';

export const fetchBars = () => async dispatch => {
	dispatch({ type: FETCH_BARS_START });
	try {
		const bars = await fetchBarsApi();
		dispatch({
			type: FETCH_BARS_SUCCESS,
			payload: bars
		});
	} catch (err) {
		dispatch({
			type: FETCH_BARS_FAILURE,
			payload: err,
			error: true
		});
	}
};
