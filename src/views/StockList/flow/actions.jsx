import {
    SET_VISIBLE_FILTER,
    SELECT_ITEM,
    POST_REQUEST,
    POST_SUCCESS,
} from './actionTypes';

export const setVisibleFilter = (text) => {
    return {
        type: SET_VISIBLE_FILTER,
        payload: {text},
    }
};

export const selectItem = (text) => {
    return {
        type: SELECT_ITEM,
        payload: {text},
    }
};

export const postRequest = (text) => {
    return {
        type: POST_REQUEST,
        payload: {text},
    }
};

export const postSuccess = (filter, json) => {
    return {
        type:POST_SUCCESS,
        selectedFilter:filter,
        stockListData:json,
        lastUpdated:Date.now(),
    }
};

export const fetchPost = filter => (dispatch, getState) =>
    dispatch(getData(filter));

export const getData = filter => dispatch =>{
    dispatch(postRequest(filter));
    return fetch(`https://api.iextrading.com/1.0/stock/market/list/${filter}`)
        .then(response => response.json())
        .then(json => dispatch(postSuccess(filter,json)));
};