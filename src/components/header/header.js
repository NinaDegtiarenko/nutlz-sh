import React, { Component } from 'react';
import {
	Link as AnchorLink,
	animateScroll as scroll,
	Events,
	scrollSpy,
	scroller
} from 'react-scroll';
import Logo from '../../assets/svg/logo.svg';
import { ReactComponent as Basket } from '../../assets/svg/basket.svg';

export default class Header extends Component {
	constructor(props) {
		super(props);

		this.burger = null;
		this.menu = null;
	}
	state = {
		links: [
			{
				title: 'Ассортимент',
				slug: 'products'
			},
			{
				title: 'Преимущества',
				slug: 'advantage'
			},
			{
				title: 'Стать партнером',
				slug: 'partner'
			},
			{
				title: 'Контакты',
				slug: 'contacts'
			}
		],
		burger: null
	};

	componentDidMount() {
		Events.scrollEvent.register('begin', function(to, element) {
			console.log('begin', arguments);
		});

		Events.scrollEvent.register('end', function(to, element) {
			console.log('end', arguments);
		});

		scrollSpy.update();
	}

	toggleMenu = () => {
		console.log(this.menu, this.burger);
	};
	render() {
		const { links } = this.state;
		return (
			<header className="header">
				<div className="header-container flex-container">
					<nav ref={this.menu}>
						<ul className="header-menu menu">
							<div>
								{links.slice(0, 2).map(link => {
									return (
										<li key={link.slug}>
											<AnchorLink
												activeClass="active"
												to={link.slug}
												spy={true}
												smooth={true}
												offset={-20}
												duration={1500}
											>
												{link.title}
											</AnchorLink>
										</li>
									);
								})}
							</div>
							<div>
								{links.slice(2).map(link => {
									return (
										<li key={link.slug}>
											<AnchorLink
												activeClass="active"
												to={link.slug}
												spy={true}
												smooth={true}
												offset={-20}
												duration={1500}
											>
												{link.title}
											</AnchorLink>
										</li>
									);
								})}
							</div>
						</ul>
					</nav>
					<a href="/" className="header-logo logo">
						<img src={Logo} alt="Logo" />
					</a>

					<button className="header-basket basket btn-skew">
						<div>
							<span className="basket-count">3</span>
							<Basket />
						</div>
					</button>

					<div
						className="header-burger"
						ref={this.burger}
						onClick={this.toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</header>
		);
	}
}
