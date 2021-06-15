import {
    LOAD_ALBUMS_SUCCESS,
    LOAD_ALBUMS_FAILED,
    LOAD_THUMBNAILS_SUCCESS,
    LOAD_THUMBNAILS_FAILED,
} from '../actions/types';

// initial state when application starts
const initialState = {
    albums: [],
    thumbnails: [],
}

// reduducer is used to determine the action and chnage the state accordingly.
export default function auth(state = initialState, action) {
    const {type, payload} = action;

    switch (type) {
        case LOAD_ALBUMS_FAILED:
            return {
                ...state,
                albums: [],
            }

        case LOAD_THUMBNAILS_FAILED:
            return {
                ...state,
                thumbnails: [],
            }


        case LOAD_ALBUMS_SUCCESS:
            return{
                ...state,
                albums: payload
            };

        case LOAD_THUMBNAILS_SUCCESS:
            return{
                ...state,
                thumbnails: payload
            };


        default:
            return state;
    }
}