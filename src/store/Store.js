
import {createStore,combineReducers} from 'redux';
import AppReducer from '../reducers/AppReducer';


export default createStore(
    combineReducers({app:AppReducer}),{}
);


