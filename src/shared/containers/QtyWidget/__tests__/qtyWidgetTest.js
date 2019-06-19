import renderer from 'react-test-renderer';
import React from 'react';
import QtyWidget from '..';

describe('test qty widget snapshots', () => {
    it('qty widget render snapshot', ()=> {
        const props = {
            prodId: 'mashiko-yaki-indigo-small-plate',
            qtyRef: React.createRef(),
            shouldAutoUpdate: true,
            updateQuantity: jest.fn()
        }
        const tree = renderer.create(<QtyWidget {...props}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });    
});

describe('test qty widget event handlers', ()=> {
    it('test increment and auto update quantity', ()=> {
        const props = {
            prodQty: 3,
            prodId: 'mashiko-yaki-indigo-small-plate',
            qtyRef: React.createRef(),
            shouldAutoUpdate: true,
            updateQuantity: jest.fn()
        }

        const tree = renderer.create(<QtyWidget {...props}/>);

        tree.root.findAllByType('button')[0].props.onClick();
        expect(tree.root.findByType('input').props.value).toBe(4);
        expect(tree.root.props.updateQuantity).toHaveBeenCalled();
    });

    it('test decrement without calling auto update', ()=> {
        const props = {
            prodQty: 1,
            prodId: 'mashiko-yaki-indigo-small-plate',
            qtyRef: React.createRef(),
            shouldAutoUpdate: false,
            updateQuantity: jest.fn()
        }

        const tree = renderer.create(<QtyWidget {...props}/>);

        tree.root.findAllByType('button')[1].props.onClick();
        expect(tree.root.findByType('input').props.value).toBe(1);
        expect(tree.root.props.updateQuantity).not.toHaveBeenCalled();
    });

});