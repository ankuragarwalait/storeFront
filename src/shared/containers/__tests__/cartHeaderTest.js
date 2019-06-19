import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CartHeader from '../CartHeader';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockStore } from '../../../App.test';
import {mount} from 'enzyme';
import CartFlyDown from '../CartFlyDown';


let tree = null;
let store = null;

describe('test connected cart flydown component', () => {
    beforeEach(()=> {
        configure({ adapter: new Adapter() });
        store = mockStore;
    });

    it('cart flydown component rendered snapshot', ()=> {
        tree = mount(<BrowserRouter>
            <Provider store={store}>
                <CartHeader />
            </Provider>
            </BrowserRouter>);
        tree.find('.caret-link').simulate('click');
        expect(tree.find(CartFlyDown).length).toBe(1);
    });  
});
