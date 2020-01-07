import React, { Component } from 'react';
import ProductPackages from './product-packages';
import ProductPrice from './product-price';
import ProductQuantity from './product-quantity';
import AddButton from './add-button';
import PropTypes from 'prop-types';

class ProductAdd extends Component {
	state = {
		totalPrice: null,
		currentPackage: 15,
		itemQuantinty: 1
	};
	componentDidMount() {
		this.updatePrice();
	}

	addToCart = () => {};

	updatePackage = value => {
		this.setState({ currentPackage: value }, () => {
			this.updatePrice();
		});
	};

	updatePrice = () => {
		const { packages } = this.props;
		const { currentPackage, itemQuantinty } = this.state;
		const packagePrice = packages.find(({ value }) => value === currentPackage);
		this.setState(({ totalPrice }) => {
			return {
				totalPrice: packagePrice.price * itemQuantinty
			};
		});
	};

	incrementItem = () => {
		this.setState(
			({ itemQuantinty }) => {
				return {
					itemQuantinty: itemQuantinty + 1
				};
			},
			() => {
				this.updatePrice();
			}
		);
	};

	decrementItem = () => {
		if (this.state.itemQuantinty === 1) {
			return;
		}
		this.setState(
			({ itemQuantinty }) => {
				return {
					itemQuantinty: itemQuantinty - 1
				};
			},
			() => {
				this.updatePrice();
			}
		);
	};

	render() {
		const { packages } = this.props;
		const { totalPrice, currentPackage, itemQuantinty } = this.state;

		return (
			<div className="product-add">
				<ProductPackages
					currentPackage={currentPackage}
					packages={packages}
					onPackageChange={this.updatePackage}
				/>

				<ProductQuantity
					itemQuantinty={itemQuantinty}
					handleQuantityChangeInc={this.incrementItem}
					handleQuantityChangeDec={this.decrementItem}
				/>

				<ProductPrice totalPrice={totalPrice} />

				<AddButton handleAddToCart={this.addToCart} />
			</div>
		);
	}
}
ProductAdd.protoTypes = {
	packages: PropTypes.array.isRequired
};

export default ProductAdd;
