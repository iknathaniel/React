import * as ActionTypes from './ActionTypes';
import { CAMPSITES } from '../shared/campsites';
import { Campsites } from './campsites';
import { actionTypes } from 'react-redux-form';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

export const fetchCampsites = () => dispatch => {

    dispatch(campsitesLoading());

    setTimeout(() => {
        dispatch(addCampsites(CAMPSITES));
    }, 2000);
};

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
});

export const campsiteFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
})

export const addCampsites = Campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: Campsites
});