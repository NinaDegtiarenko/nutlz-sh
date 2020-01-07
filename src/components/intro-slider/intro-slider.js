import React from 'react';
import Slider from 'react-slick';
import SliderControll from './slider-controlls';
import Slide from './slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { products } from '../../api';

const IntroSlider = () => {
	const sliderParams = {
		dots: true,
		dotsClass: 'slider-pagination',
		customPaging: function(i) {
			return <span>{i < 10 ? `0${i + 1}` : i}</span>;
		},
		nextArrow: (
			<SliderControll
				styleClass={'slider-controlls intro-slider-controlls--next'}
			/>
		),
		prevArrow: (
			<SliderControll
				styleClass={'slider-controlls intro-slider-controlls--prev'}
			/>
		),
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	const slidesList = products.map(product => {
		return <Slide {...product} key={product.id}></Slide>;
	});
	return (
		<Slider {...sliderParams} className="slider">
			{slidesList}
		</Slider>
	);
};

export default IntroSlider;
