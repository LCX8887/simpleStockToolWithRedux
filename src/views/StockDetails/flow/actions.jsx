import {
    POST_REQUEST_STOCK_DETAILS,
    POST_SUCCESS_STOCK_DETAILS,
} from './actionTypes';

// export const postRequest = (text) => {
//     return {
//         type: POST_REQUEST_STOCK_DETAILS,
//         payload: {text},
//     }
// };

export const postSuccess = (id, json) => {
    return {
        type:POST_SUCCESS_STOCK_DETAILS,
        selectedItem:id,
        stockDetailsData:json,
    }
};

export const fetchPost = id => (dispatch, getState) =>
    dispatch(getData(id));

export const getData = id => dispatch =>{
    //dispatch(postRequest(id));
    return fetch(`https://api.iextrading.com/1.0/stock/${id}/batch?types=quote,news,chart&range=1m&last=5`)
        .then(response => response.json())
        .then(json => dispatch(postSuccess(id,json)));
};