import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

//import logger from 'redux-logger';

import {cartReducer} from './cart/cartReducer';
import {userReducer} from './user/userReducer';
import {favoritesReducer} from './favorites/favoritesReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer,
    favorites: favoritesReducer
})

const middlewares = [ReduxThunk, /*logger*/]

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;