import React from 'react'
import config from '../../config';
import ProductOverlay from './ProductOverlay';
import PropTypes from 'prop-types'

const ProductTile = ({
    prodItem
}) => {
    const {id, title, price, brand, image} = prodItem;
    const prodImage = `${config.imageURL}/${image}`;
    return (
        <li className="list-item col-4">
            <img className="img-responsive" src={prodImage} alt={id}/>
            <p className="t-brand">{brand}</p>
            <p className="t-desc">{title.toUpperCase()}</p>
            <p className="t-price">{`$${parseFloat(price).toFixed(2)}`}</p>
            <ProductOverlay prodItem={prodItem}/>
        </li>
    )
}

ProductTile.propTypes = {
    prodItem: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        brand: PropTypes.string,
        image: PropTypes.string
    })
}

export default ProductTile
