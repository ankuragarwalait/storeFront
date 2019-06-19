import { updateQuantityAndPrice } from "..";
import { mockInitialState } from "../../../App.test";
let mockCartProductData = {};

describe('test util functions', () => {
    beforeEach(() => {
        mockCartProductData = mockInitialState.cart;
    })
    it('test quantity price calculator', ()=> {
        const {items, itemCount, total} = updateQuantityAndPrice(mockCartProductData);
        expect(Object.keys(items).length).toBe(2);
        expect(itemCount).toBe(3);
        expect(total).toBe(30);
    })
});
