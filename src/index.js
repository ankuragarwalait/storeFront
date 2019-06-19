import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import axios from 'axios';
import { loadAllProducts } from "./store/actions/productActions";

const loadProducts = async (store) =>{
    let response = await axios.get('../products.json');
    let prodList = response.data.map(prodItem => {
        prodItem.id = prodItem.image.split(".")[0]
        return prodItem;
    });
    store.dispatch(loadAllProducts(prodList));

    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter> 
                <App />
            </BrowserRouter>
        </Provider>,
    document.getElementById('root'));
}

loadProducts(store);