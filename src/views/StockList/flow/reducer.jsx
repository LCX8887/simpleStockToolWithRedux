import {
    SET_VISIBLE_FILTER,
    SELECT_ITEM,
    POST_REQUEST,
    POST_SUCCESS,
} from './actionTypes';

const initialState = {
    isFetching:false,
    lastUpdated:'',
    selectedFilter: 'mostactive',
    stockListData:[],
    filterOptions:['mostactive', 'iexvolume', 'iexpercent'],
    selectedItem:'',
 };

 const stockListReducer = (state=initialState, action) =>{
     switch(action.type){
         case SET_VISIBLE_FILTER:
            return {
                ...state,
                selectedFilter:action.payload.text,
            };
        case SELECT_ITEM:
            return {
                ...state,
                selectedItem:action.payload.text,
            };
        case POST_REQUEST:
            return {
                ...state,
                isFetching:true,
            };
        case POST_SUCCESS:
            return {
                ...state,
                lastUpdated:action.lastUpdated,
                selectedFilter:action.selectedFilter,
                stockListData:action.stockListData,
                isFetching:false,
            };
        default:
            return state;
     }
 };

 export default stockListReducer;