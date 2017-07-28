import ReactDOM from 'react-dom';
import React, { Component, PropTypes } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default class App extends Component {

	render() {
		return (
			<div>
				<h2>Space Search</h2>
				<SearchBar />
				<SearchResults />
			</div>);
	}
}