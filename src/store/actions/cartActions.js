export const addToCart = (qty, prodItem) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            qty,
            prodItem
        }
    }
}

export const removeFromCart = (id) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id
        }
    }
}

export const updateCartQuantity = (qty, id) => {
    return {
        type: 'UPDATE_CART_QTY',
        payload: {
            qty,
            id
        }
    }
}