import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import ConnectedCart, {Cart} from '../Cart';
import { BrowserRouter } from 'react-router-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
import { mockStore } from '../../App.test';


let tree = null;
let store = null;

describe('test connected cart component', () => {
    beforeEach(()=> {
        configure({ adapter: new Adapter() });
        store = mockStore;
    });

    it('cart component rendered snapshot', ()=> {
        tree = renderer.create(<BrowserRouter>
            <Provider store={store}>
                <ConnectedCart />
            </Provider>
            </BrowserRouter>);
        const prodJson = tree.toJSON();
        expect(prodJson).toMatchSnapshot();
    });  

    it('test empty cart', ()=> {
        const props = {
            productList: {},
            total: 0
        }
        tree = mount(<BrowserRouter>
                        <Cart {...props} />
                    </BrowserRouter>);

        expect(tree.find("h2").props().children).toBe('No Products In Cart Yet.');
    })
});
