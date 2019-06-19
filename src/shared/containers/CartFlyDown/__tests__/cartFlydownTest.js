import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartFlyDown from '..';
import { mockStore } from '../../../../App.test';


let tree = null;
let store = null;

describe('test connected cart flydown component', () => {
    beforeEach(()=> {
        store = mockStore;
    });

    it('cart flydown component rendered snapshot', ()=> {
        tree = renderer.create(<BrowserRouter>
            <Provider store={store}>
                <CartFlyDown />
            </Provider>
            </BrowserRouter>);
        const prodJson = tree.toJSON();
        expect(prodJson).toMatchSnapshot();
    });  
});
