import {
    POST_REQUEST_STOCK_DETAILS,
    POST_SUCCESS_STOCK_DETAILS,
} from './actionTypes';

const initialState = {
    isFetching:false,
    stockDetailsData:{},
    selectedItem:'',
 };

const stockDetailsReducer = (state=initialState, action) =>{
    switch(action.type){
        // case POST_REQUEST_STOCK_DETAILS:
        //     return {
        //         ...state,
        //         isFetching:true,
        //     };
        case POST_SUCCESS_STOCK_DETAILS:
            return {
                ...state,
                stockDetailsData:action.stockDetailsData,
                selectedItem:action.selectedItem,
                isFetching:false,
            };
        default:
            return state;
    }
};

export default stockDetailsReducer;