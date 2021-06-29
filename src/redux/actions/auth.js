import {
    LOAD_ALBUMS_SUCCESS,LOAD_ALBUMS_FAILED,
    LOAD_THUMBNAILS_SUCCESS,LOAD_THUMBNAILS_FAILED,

} from '../actions/types';

import axios from 'axios';
import { ALBUM_ID } from '../../components/album/Album';

/*
 * if axios returns the response without any erros,
 * have to dispatch the relevent actions.
 */

// used to get albums list from api
export const load_albums = () => async dispatch => {

    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/albums`);

        dispatch ({
            type: LOAD_ALBUMS_SUCCESS,
            payload: response.data
        })
        
    }catch(err){
        dispatch ({
            type: LOAD_ALBUMS_FAILED,
        })
    }
};

// used to get thumbnails list from api
export const load_thumbnails = () => async dispatch => {
    let response = [];

    try {
        
        (ALBUM_ID === 0) ?
            // eslint-disable-next-line
            response = await axios.get(`${process.env.REACT_APP_API_URL}/photos`)
        :
            // eslint-disable-next-line
            response = await axios.get(`${process.env.REACT_APP_API_URL}/photos?albumId=${ALBUM_ID}`);
            
        dispatch ({
            type: LOAD_THUMBNAILS_SUCCESS,
            payload: response.data
        })
        
    }catch(err){
        dispatch ({
            type: LOAD_THUMBNAILS_FAILED,
        })
    }
};