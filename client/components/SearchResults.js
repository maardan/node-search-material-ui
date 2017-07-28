import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CircularProgress from 'material-ui/CircularProgress';

class SearchResults extends React.Component {

	resStatus() {
		if (this.props.loading) {
			return <CircularProgress size={80} thickness={5} />;
		}
		else if (this.props.imgResults.length > 0) {
			return (this.props.imgResults.length + ' result(s) found');
		}
		else if (this.props.error) {
			return this.props.error;
		}
	}

	render() {

		const styles = {
			root: {
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'space-around'
			},
			gridList: {
				width: 500,
				height: 450,
				overflowY: 'auto'
			}
		};

		const imageResults = this.props.imgResults.map((tile) => (
			<GridTile
				key={tile.img}
				title={tile.title}
				subtitle={<span>description: <b>{tile.description}</b></span>}
			>
				<img src={tile.img} />
			</GridTile>));

		return (
			<div style={styles.root}>
				<GridList cellHeight={180} style={styles.gridList}>
					<Subheader>{this.resStatus()}</Subheader>
					{imageResults}
				</GridList>
			</div>);
	}
}

//Redux Setup
function mapStateToProps(state) {
	return {
		imgResults: state.application.imgResults,
		loading: state.application.loading,
		error: state.application.error
	}
}

export default connect(mapStateToProps, null)(SearchResults);