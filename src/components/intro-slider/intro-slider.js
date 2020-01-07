import React, { useEffect } from 'react';
import Slider from 'react-slick';
import SliderControll from './slider-controlls';
import Slide from './slide';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBars } from '../../actions/';

const IntroSlider = ({ fetchBars, bars: { bars, loading } }) => {
	useEffect(() => {
		fetchBars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
	return (
		<>
			{!loading && bars !== null && (
				<Slider {...sliderParams} className="slider">
					{bars.map(bar => (
						<Slide {...bar} key={bar.id}></Slide>
					))}
				</Slider>
			)}
		</>
	);
};

IntroSlider.protoTypes = {
	bars: PropTypes.array.isRequired,
	fetchBars: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	bars: state.bars
});

export default connect(mapStateToProps, { fetchBars })(IntroSlider);
