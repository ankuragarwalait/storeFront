import renderer from 'react-test-renderer';
import React from 'react';
import CartTile from '..';
import { Provider } from 'react-redux';
import { mockStore } from '../../../../App.test';

let tree = null;
let store = null;

describe('test connected cart tile component snapshot', () => {
    beforeEach(()=> {
        store = mockStore;
        const props = {
            prodItem: store.getState().cart.items["mashiko-yaki-indigo-small-plate"]
        }
        tree = renderer.create(<Provider store={store}>
                                    <CartTile {...props}/>
                                </Provider>);
    });

    it('cart tile rendered snapshot', ()=> {
        const prodJson = tree.toJSON();
        expect(prodJson).toMatchSnapshot();
    });  

    it('cart tile update quantity on decrement click', ()=> {
        tree.root.findByProps({className: 'btn-dec'}).props.onClick();
        expect(store.getState().cart.itemCount).toBe(2);
        expect(store.getState().cart.total).toBe(20);
    }); 
    
    it('cart tile remove product click', ()=> {
        tree.root.findByProps({className: 't-cancel'}).props.onClick();
        expect(Object.keys(store.getState().cart.items).length).toBe(1);
    }); 
});