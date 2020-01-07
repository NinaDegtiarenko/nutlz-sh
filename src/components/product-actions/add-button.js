import React from 'react';

const AddButton = ({ handleAddToCart }) => {
	return (
		<button className="btn-skew btn-add" onClick={handleAddToCart}>
			<span>Добавить в корзину</span>
		</button>
	);
};

export default AddButton;
