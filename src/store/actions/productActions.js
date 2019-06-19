export const loadAllProducts = (prodList) => {
    return {
        type: 'LOAD_PRODUCTS',
        payload: {
            prodList
        }
    }
}