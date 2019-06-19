import React from 'react'
import config from '../../config';
import PropTypes from 'prop-types';

const CartFlyDownTile = ({
    id,
    title,
    image,
    brand,
    qty,
    price,
    removeFromCart
}) => {
    return (
        <div className="row cart-prod-tile">
            <div className="col-4 ">
                <img className="img-responsive" src={`${config.imageURL}/${image}`} alt={title}/>
            </div>
            <div className="col-8 text-left t-font-m">
                <span className="t-cancel" onClick={removeFromCart.bind(null, id)}>&#10005;</span>
                <p>{title}</p>
                <p className="t-font-m">x{qty}</p>
                <p className="t-brand">{brand}</p>
                <p>${parseFloat(price * qty).toFixed(2)}</p>
            </div>
        </div>
    )
}

CartFlyDownTile.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    brand: PropTypes.string,
    qty: PropTypes.number,
    price: PropTypes.number,
    removeFromCart: PropTypes.func
}

export default CartFlyDownTile
