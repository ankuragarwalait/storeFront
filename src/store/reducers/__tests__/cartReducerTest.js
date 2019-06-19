import { cart } from "../cartReducer";

let initialState = {};

describe('test cart reducer functions', ()=> {
    beforeEach(()=> {
        initialState = {
            items: {},
            itemCount: 0,
            total: 0
        }
    });

    it('test reducer default action', ()=> {
        let actual = cart(initialState,{});
        expect(actual).toEqual(initialState);
    });

    it('test add to cart action for new product', ()=> {
        const action = {
            type: 'ADD_TO_CART',
            payload: {
                qty: 2,
                prodItem: {
                    "id": "mashiko-yaki-indigo-small-plate",
                    "title": "Mashiko-Yaki Indigo Small Plate",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 2,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-indigo-small-plate.jpg"
              }
            }
        }

        let actual = cart(initialState, action);

        expect(actual.itemCount).toBe(2);
        expect(Object.keys(actual.items)).toContain("mashiko-yaki-indigo-small-plate");
        expect(actual.total).toBe(20);
    })

    it('test add to cart action for existing product', ()=> {
        const action = {
            type: 'ADD_TO_CART',
            payload: {
                qty: 2,
                prodItem: {
                    "id": "mashiko-yaki-indigo-small-plate",
                    "title": "Mashiko-Yaki Indigo Small Plate",
                    "brand": "Kiriko",
                    "price": 10,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-indigo-small-plate.jpg"
                }
            }
        }

        const currentState = {
            items: {
                'mashiko-yaki-indigo-small-plate': {
                    "id": "mashiko-yaki-indigo-small-plate",
                    "title": "Mashiko-Yaki Indigo Small Plate",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 3,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-indigo-small-plate.jpg"
                }
            },
            total: 30,
            itemCount: 3
        }

        let actual = cart(currentState, action);

        expect(actual.itemCount).toBe(5);
        expect(Object.keys(actual.items).length).toBe(1);
        expect(actual.total).toBe(50);
    });

    it('test aremove product from cart', ()=> {
        const action = {
            type: 'REMOVE_FROM_CART',
            payload: {
                id: "mashiko-yaki-indigo-small-plate"
            }
        }

        const currentState = {
            items: {
                'mashiko-yaki-indigo-small-plate': {
                    "id": "mashiko-yaki-indigo-small-plate",
                    "title": "Mashiko-Yaki Indigo Small Plate",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 3,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-indigo-small-plate.jpg"
                },
                'mashiko-yaki-saucer': {
                    "id": "mashiko-yaki-saucer",
                    "title": "Mashiko-Yaki Saucer",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 1,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-saucer.jpg"
                  }
            },
            total: 40,
            itemCount: 4
        }

        let actual = cart(currentState, action);

        expect(actual.itemCount).toBe(1);
        expect(Object.keys(actual.items).length).toBe(1);
        expect(actual.total).toBe(10);
    });

    it('update quantity in cart', ()=> {
        const action = {
            type: 'UPDATE_CART_QTY',
            payload: {
                id: "mashiko-yaki-saucer",
                qty: 6
            }
        }

        const currentState = {
            items: {
                'mashiko-yaki-indigo-small-plate': {
                    "id": "mashiko-yaki-indigo-small-plate",
                    "title": "Mashiko-Yaki Indigo Small Plate",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 3,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-indigo-small-plate.jpg"
                },
                'mashiko-yaki-saucer': {
                    "id": "mashiko-yaki-saucer",
                    "title": "Mashiko-Yaki Saucer",
                    "brand": "Kiriko",
                    "price": 10,
                    "qty": 1,
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at purus pulvinar, placerat turpis ac, interdum metus. In eget massa sed enim hendrerit auctor a eget.",
                    "image": "mashiko-yaki-saucer.jpg"
                  }
            },
            total: 40,
            itemCount: 4
        }

        let actual = cart(currentState, action);

        expect(actual.itemCount).toBe(9);
        expect(Object.keys(actual.items).length).toBe(2);
        expect(actual.total).toBe(90);
    });
})