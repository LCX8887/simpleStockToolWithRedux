import { combineReducers } from 'redux';
import globalsReducer from './global/reducer';
import pageReducers from './pageReducers';
import StockListReducer from '../views/StockList/flow/reducer';

const makeRootReducer = () => combineReducers({
  global: globalsReducer, // 注入全局reducer
  ...pageReducers, // 注入页面级reducer
  StockListReducer,
});

export default makeRootReducer;