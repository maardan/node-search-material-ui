import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class SearchBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			error: false
		};
		this.handleKeyPress = this.handleKeyPress.bind(this);
		this.handleSearch = this.handleSearch.bind(this);		
	}

	componentDidMount() {
		this.textInput.focus();
	}

	handleSearch() {
		if (this.textInput.input.value.length > 0) {
			this.props.actions.getImgData(this.textInput.input.value);
		}
		else {
			this.setState({ error: true }, () => setTimeout(() => this.setState({ error: false }), 500));
		}
	}

    handleKeyPress(target) {
        if (target.charCode === 13) 
        	this.handleSearch(); // allow user to submit form by pressing the enter key
    }

	render() {
		return (
			<div onKeyPress={this.handleKeyPress}>
				<TextField hintText="Try 'Earth' or 'Solar System'" errorText={this.state.error} ref={(input) => { this.textInput = input; }} />
				<FlatButton label="Search" onTouchTap={this.handleSearch} />
			</div>);
	}
}

//Redux Setup
function mapDispatchToProps(dispatch) {
	return { actions: bindActionCreators(Actions, dispatch) }
}

export default connect(null, mapDispatchToProps)(SearchBar);