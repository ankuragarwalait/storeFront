import React from 'react';
import ProductTile from '../../components/ProductTile';
import './productList.css';
import PropTypes from 'prop-types';  

const ProductList = ({
  productList
}) => {
    return (
        <div className="container product-list">
            <ul className="row">
                {
                    productList.map(productItem => <ProductTile prodItem={productItem} key={productItem.id} />)
                }
            </ul>
        </div>
    )
}

ProductList.propTypes = {
    productList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        image: PropTypes.string,
        brand: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number
    }))
}

export default ProductList;
