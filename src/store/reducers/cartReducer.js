import { updateQuantityAndPrice } from "../../shared/utils";

const initialCart = {
    items: {},
    itemCount: 0,
    total: 0
}

export const cart = (state=initialCart, action) => {
    let newState = Object.assign({}, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            const { prodItem, qty } = action.payload;
            if(prodItem.id in newState.items) {
                newState.items[prodItem.id]['qty'] += qty
            } else {
                newState.items[prodItem.id] = prodItem;
                newState.items[prodItem.id]['qty'] = qty
            }
            return updateQuantityAndPrice(newState);
        
        case 'REMOVE_FROM_CART':
            const prodId = action.payload.id;
            delete newState.items[prodId];
            return updateQuantityAndPrice(newState);

        case 'UPDATE_CART_QTY': 
            const pId = action.payload.id;
            newState.items[pId].qty = action.payload.qty;
            return updateQuantityAndPrice(newState);
        default: 
            return state
    }
}