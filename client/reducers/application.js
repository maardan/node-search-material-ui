import { 
	GETTING_IMG_DATA,
	IMG_DATA_ERROR,
	UPDATE_IMG_DATA
} from '../actions';

const initialState = {
	imgResults: [],
	error: false,
	loading: false
};

export default function application(state=initialState, action) {

	switch(action.type) {

		case GETTING_IMG_DATA:
			return Object.assign({}, state, {
				loading: true,
				error: false
			});

		case UPDATE_IMG_DATA:
			return Object.assign({}, state, {
				imgResults: action.imgResults,
				loading: false,
				error: false
			});

		case IMG_DATA_ERROR:
			return Object.assign({}, state, {
				error: action.error,
				loading: false
			});

		default:
			return state;
	}
}