import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { appReducer } from './store';
import App from './App';

export const mockInitialState = {
  products: [
    {
      "id": "mashiko-yaki-indigo-small-plate",
      "title": "Mashiko-Yaki Indigo Small Plate",
      "brand": "Kiriko",
      "price": 10,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      "image": "mashiko-yaki-indigo-small-plate.jpg"
    },
    {
      "id": "mashiko-yaki-saucer",
      "title": "Mashiko-Yaki Saucer",
      "brand": "Kiriko",
      "price": 10,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
      "image": "mashiko-yaki-saucer.jpg"
    }
  ],
  cart: {
    items: {
      "mashiko-yaki-indigo-small-plate": {
        "id": "mashiko-yaki-indigo-small-plate",
        "title": "Mashiko-Yaki Indigo Small Plate",
        "brand": "Kiriko",
        "price": 10,
        "qty": 2,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "mashiko-yaki-indigo-small-plate.jpg"
      },
      "mashiko-yaki-saucer": {
        "id": "mashiko-yaki-saucer",
        "title": "Mashiko-Yaki Saucer",
        "brand": "Kiriko",
        "price": 10,
        "qty": 1,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
        "image": "mashiko-yaki-saucer.jpg"
      }
    },
    itemCount: 3,
    total: 30
  }
}

export const mockStore = createStore(appReducer, mockInitialState)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={mockStore}>
                    <BrowserRouter> 
                      <App />
                    </BrowserRouter>
                  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
