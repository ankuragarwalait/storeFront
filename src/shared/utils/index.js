export const updateQuantityAndPrice = (cartObj) => {
    return Object.keys(cartObj.items).reduce((accObj, itemId) => {
        const tempObj = cartObj.items[itemId];
        accObj.items[itemId] = tempObj;
        accObj.itemCount += tempObj.qty;
        accObj.total += tempObj.qty * tempObj.price;
        return accObj;
    },{
        items: {},
        itemCount: 0,
        total: 0
    })
}