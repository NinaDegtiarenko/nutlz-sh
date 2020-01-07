import React, { Component } from 'react';
import { RadioInput } from '../inputs';
// import { ProductQuantity } from '../product';
import Quantity from '../quantity';

export default class ProductAdd extends Component {
	state = {
		totalPrice: null,
		currentPackage: 15,
		itemQuntinty: 1
	};
	componentDidMount() {
		this.updatePrice();
	}

	addToCart = () => {};

	toggleRadio = value => {
		this.setState({ currentPackage: value }, () => {
			this.updatePrice();
		});
	};

	updatePrice = () => {
		// console.log('asdsad');
		const { packages } = this.props;
		const { currentPackage, itemQuntinty } = this.state;
		const packagePrice = packages.find(({ value }) => value === currentPackage);
		this.setState(({ totalPrice }) => {
			return {
				totalPrice: packagePrice.price * itemQuntinty
			};
		});
	};

	updateQuantity = quantity => {
		// console.log(quantity);
		this.setState(
			({ itemQuntinty }) => {
				return {
					itemQuntinty: quantity
				};
			},
			() => {
				this.updatePrice();
				// console.log(this.state.totalPrice);
				// console.log(this.state.itemQuntinty);
				// console.log(this.state.currentPackage);
			}
		);
	};

	render() {
		const { packages } = this.props;
		const { totalPrice, currentPackage } = this.state;
		const packagesList = packages.map(({ value }) => {
			return (
				<RadioInput
					key={value}
					value={value}
					checked={value === currentPackage ? true : false}
					handleRadioChange={this.toggleRadio}
				/>
			);
		});
		return (
			<div className="product-add">
				<div className="product-package">
					<p>В упаковке(шт)</p>
					<div className="product-package-inner">{packagesList}</div>
				</div>

				<Quantity handleQuantityChange={this.updateQuantity} />

				<div className="product-price">
					<p>Цена:</p>
					<div>
						<span className="current-price">{totalPrice}</span>
						&#8381;
					</div>
				</div>

				<button className="btn-skew btn-add" onClick={this.addToCart}>
					<span>Добавить в корзину</span>
				</button>
			</div>
		);
	}
}
