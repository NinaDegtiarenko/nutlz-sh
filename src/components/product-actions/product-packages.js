import React from 'react';
import { RadioInput } from '../inputs';

const ProductPackages = ({ packages, onPackageChange, currentPackage }) => {
	const packagesList = packages.map(({ value }) => {
		return (
			<RadioInput
				key={value}
				value={value}
				checked={value === currentPackage ? true : false}
				handleRadioChange={onPackageChange}
			/>
		);
	});
	return (
		<div className="product-package">
			<p>В упаковке(шт)</p>
			<div className="product-package-inner">{packagesList}</div>
		</div>
	);
};

export default ProductPackages;
