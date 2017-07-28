import api from '../api';
export const GETTING_IMG_DATA = 'GETTING_IMG_DATA';
export const IMG_DATA_ERROR = 'IMG_DATA_ERROR';
export const UPDATE_IMG_DATA = 'UPDATE_IMG_DATA';

function gettingImageData() {
	return {
		type: GETTING_IMG_DATA
	};
}

function imgDataError(error) {
	return {
		type: IMG_DATA_ERROR,
		error
	};
}

function updateImgData(data) {
	return {
		type: UPDATE_IMG_DATA,
		imgResults: data
	};
}

export function getImgData(query) {

	return function (dispatch) {

		dispatch(gettingImageData());

		api.fetchImgData(query)
		.then(response => {
			if (response.length === 0) {
				dispatch(updateImgData([])); // remove previous results
				dispatch(imgDataError('No Results, try another phrase.'));
			}
			else {
				dispatch(updateImgData(response));
			}
		})
		.catch(error => dispatch(imgDataError(error)));
	};
}