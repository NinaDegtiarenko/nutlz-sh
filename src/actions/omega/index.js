import {
	FETCH_OMEGAINFO_START,
	FETCH_OMEGAINFO_SUCCESS,
	FETCH_OMEGAINFO_FAILURE
} from './types';
import { fetchOmegaApi } from '../../api';

export const fetchOmegaInfo = () => async dispatch => {
	dispatch({ type: FETCH_OMEGAINFO_START });
	try {
		const omegaInfo = await fetchOmegaApi();
		dispatch({
			type: FETCH_OMEGAINFO_SUCCESS,
			payload: omegaInfo
		});
	} catch (err) {
		dispatch({
			type: FETCH_OMEGAINFO_FAILURE,
			payload: err,
			error: true
		});
	}
};
