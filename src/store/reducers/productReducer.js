export const products = (state = [], action) => {
    switch(action.type) {
        case 'LOAD_PRODUCTS': 
            return [
                ...action.payload.prodList
            ]
        default: 
            return state
    }
}