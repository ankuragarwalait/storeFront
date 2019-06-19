import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mockStore } from "../../App.test";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
import Product from '../Product';

let tree = null;
let store = null;

describe('Test the product page', () => {
    beforeEach(()=> {
        configure({ adapter: new Adapter() });
        store = mockStore
    });

    it('test component matches snapshot', ()=> {
        const props = {
            match: {params: {id: "mashiko-yaki-saucer"}}
        }
        tree = renderer.create(<BrowserRouter>
            <Provider store={store}>
                <Product {...props}/>
            </Provider>
            </BrowserRouter>);
        const prodJson = tree.toJSON();
        expect(prodJson).toMatchSnapshot();
    })

    it('test add to Cart', ()=> {
        const props = {
            match: {params: {id: "mashiko-yaki-saucer"}}
        }

        tree = mount(<BrowserRouter>
            <Provider store={store}>
                <Product {...props}/>
            </Provider>
            </BrowserRouter>);
        tree.find('.add-cart').simulate('click');
        expect(store.getState().cart.itemCount).toBe(4);
    })
})