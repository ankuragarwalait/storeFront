import { loadAllProducts } from "../productActions";
import { removeFromCart, updateCartQuantity, addToCart } from "../cartActions";

describe('test product action creators', () => {
    it('test load product action creator', ()=> {
        const mockProdList = [
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
        ]
        const expected = {
            type: 'LOAD_PRODUCTS',
            payload: {
                prodList: mockProdList
            }
        }
        const allProductsAction = loadAllProducts(mockProdList)
        expect(allProductsAction).toEqual(expected);
    });
});

describe('test cart action Creators', ()=> {
    it('test add to cart action creator', ()=> {
        const productObj = {
            "id": "mashiko-yaki-indigo-small-plate",
            "title": "Mashiko-Yaki Indigo Small Plate",
            "brand": "Kiriko",
            "price": 10,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
            "image": "mashiko-yaki-indigo-small-plate.jpg"
        }
        const expected = {
            type: 'ADD_TO_CART',
            payload: {
                qty: 2,
                prodItem: productObj
            }
        }

        expect(expected).toEqual(addToCart(2,productObj));
    });
    
    it('test remove from cart action creator', ()=> {
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload: {
                id: 4
            }
        }
        expect(expected).toEqual(removeFromCart(4));
    });

    it('test update cart Quantity action creator', ()=> {
        const expected = {
            type: 'UPDATE_CART_QTY',
            payload: {
                qty: 3,
                id: 'mashiko-yaki-saucer'
            }
        }
        expect(expected).toEqual(updateCartQuantity(3, 'mashiko-yaki-saucer'));
    });
})
