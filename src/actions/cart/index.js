import {
	ADD_BAR_TO_BASKET,
	REMOVE_BAR_FROM_BASKET,
	CLEAN_BASKET
} from './types';

export const addProductToBasket = id => dispatch => {
	dispatch({
		type: ADD_BAR_TO_BASKET,
		payload: id
	});
};

export const removePhoneFromBasket = id => async dispatch => {
	dispatch({
		type: REMOVE_BAR_FROM_BASKET,
		payload: id
	});
};

export const cleanBasket = () => dispatch => {
	dispatch({
		type: CLEAN_BASKET
	});
};
