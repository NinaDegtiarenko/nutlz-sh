import React from 'react';

const ProductPrice = ({ totalPrice }) => {
	return (
		<div className="product-price">
			<p>Цена:</p>
			<div>
				<span className="current-price">{totalPrice}</span>
				&#8381;
			</div>
		</div>
	);
};

export default ProductPrice;
