import { products } from "../productReducer";


let initialState = [];

describe('test cart reducer functions', ()=> {
    beforeEach(()=> {
        initialState = []
    });

    it('test reducer default action', ()=> {
        let actual = products(initialState,{});
        expect(actual).toEqual(initialState);
    });

    it('test load products reducer', ()=> {
        const action = {
            type: 'LOAD_PRODUCTS',
            payload: {
                prodList: [
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
            }
        }

        let actual = products(initialState, action);

        expect(actual.length).toBe(2);
    });
})