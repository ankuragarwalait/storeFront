import { createStore, combineReducers } from "redux";
import { products } from './reducers/productReducer';
import { cart } from './reducers/cartReducer';

export const appReducer = combineReducers({
    products,
    cart
});

const store = createStore(appReducer);


export default store;
