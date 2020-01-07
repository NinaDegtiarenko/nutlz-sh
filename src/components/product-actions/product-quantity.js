import React from 'react';

const ProductQuantity = ({
	handleQuantityChangeDec,
	handleQuantityChangeInc,
	itemQuantinty
}) => {
	return (
		<div className="product-amount">
			<p>Количество:</p>
			<button onClick={handleQuantityChangeDec}>&#8722;</button>
			<span>{itemQuantinty}</span>
			<button onClick={handleQuantityChangeInc}>&#43;</button>
		</div>
	);
};

export default ProductQuantity;
