import React from 'react';

const RadioInput = ({ value, checked, handleRadioChange }) => {
	return (
		<label className="product-package-picker">
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={() => handleRadioChange(value)}
			/>
			<span className="checkmark">{value}</span>
		</label>
	);
};

export default RadioInput;
