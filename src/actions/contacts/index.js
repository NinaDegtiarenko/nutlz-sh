import {
	FETCH_CONTACTS_START,
	FETCH_CONTACTS_SUCCESS,
	FETCH_CONTACTS_FAILURE
} from './types';

import { fetchContactsApi } from '../../api';

export const fetchContacts = () => async dispatch => {
	dispatch({ type: FETCH_CONTACTS_START });
	try {
		const contacts = await fetchContactsApi();
		dispatch({
			type: FETCH_CONTACTS_SUCCESS,
			payload: contacts
		});
	} catch (err) {
		dispatch({
			type: FETCH_CONTACTS_FAILURE,
			payload: err,
			error: true
		});
	}
};
