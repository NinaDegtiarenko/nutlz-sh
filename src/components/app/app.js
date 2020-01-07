import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import '../../assets/styles/index.scss';
import Header from '../header';
import Footer from '../footer';
import { HomePage, CartPage } from '../pages';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Header />
			<main>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/cart" component={CartPage} />
					<Redirect to="/" />
				</Switch>
			</main>
			<Footer />
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
