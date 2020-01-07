import React, { Component } from 'react';

export default class ProductQuantity extends Component {
	state = {
		currentQuantity: 1
	};

	incrementItem = () => {
		const { handleQuantityChange } = this.props;
		this.setState(
			({ currentQuantity }) => {
				return {
					currentQuantity: currentQuantity + 1
				};
			},
			() => {
				handleQuantityChange(this.state.currentQuantity);
			}
		);
	};

	decrementItem = () => {
		const { handleQuantityChange } = this.props;
		if (this.state.currentQuantity === 1) {
			return;
		}
		this.setState(
			({ currentQuantity }) => {
				return {
					currentQuantity: currentQuantity - 1
				};
			},
			() => {
				handleQuantityChange(this.state.currentQuantity);
			}
		);
	};

	render() {
		const { currentQuantity } = this.state;
		return (
			<div className="product-amount">
				<p>Количество:</p>
				<button onClick={this.decrementItem}>&#8722;</button>
				<span>{currentQuantity}</span>
				<button onClick={this.incrementItem}>&#43;</button>
			</div>
		);
	}
}
