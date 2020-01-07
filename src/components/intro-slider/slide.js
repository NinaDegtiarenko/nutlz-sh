import React from 'react';
import { ProductAdd } from '../product-actions';
import PropTypes from 'prop-types';

const Slide = props => {
	const { video } = props;
	return (
		<div className="slider-slide">
			<div className="slider-slide-inner">
				<div>
					<p className="slider-text slider-text--normal">Фисташки</p>
					<p className="slider-text slider-text--normal">Миндаль</p>
					<p className="slider-text slider-text--normal">Фундук</p>
					<p className="slider-text slider-text--normal">Патока</p>
				</div>
				<div>
					<p className="slider-text slider-text--reverse">Фисташки</p>
					<p className="slider-text slider-text--reverse">Миндаль</p>
					<p className="slider-text slider-text--reverse">Фундук</p>
					<p className="slider-text slider-text--reverse">Патока</p>
				</div>
				<video loop autoPlay style={{ display: 'none' }}>
					<source src={video[0]} type="video/mp4" />
					<source src={video[1]} type="video/ogg" />
					Ваш браузер не поддерживает видео
				</video>
			</div>
			<div className="slider-slide-buy">
				<ProductAdd {...props} />
			</div>
		</div>
	);
};

Slide.protoTypes = {
	props: PropTypes.object.isRequired
};

export default Slide;
