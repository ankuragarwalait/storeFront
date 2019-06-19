import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../../config';
import QtyWidget from '../QtyWidget';
import PropTypes from 'prop-types';
import { removeFromCart, updateCartQuantity } from '../../../store/actions/cartActions';

class CartTile extends Component {
    static propTypes = {
        prodItem: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            qty: PropTypes.number,
            price: PropTypes.number
        }),
        removeCartProduct: PropTypes.func,
        updateQuantity: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
    }

    handleRemoveClick() {
        this.props.removeCartProduct(this.props.prodItem.id);
    }

    render() {
        const prodItem = this.props.prodItem;
        return (
            <div className="row">
                <div className="col-6 text-left">
                    <img className="img-responsive" src={`${config.imageURL}/${prodItem.image}`} alt={prodItem.id}/>
                    <div className="cart-prod-details">
                        <p className="t-brand">{prodItem.brand}</p>
                        <p>{prodItem.title}</p>
                    </div>
                </div>
                <div className="col-2">
                    <QtyWidget prodQty={prodItem.qty} updateQuantity={this.props.updateQuantity} shouldAutoUpdate={true} prodId={prodItem.id}/>
                </div>
                <div className="col-1 t-price">
                    {`$${parseFloat(prodItem.qty*prodItem.price).toFixed(2)}`}
                </div>
                <div className="col-1 text-right"><span className="t-cancel" onClick={this.handleRemoveClick}>&#10005;</span></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCartProduct: (prodId) => dispatch(removeFromCart(prodId)),
        updateQuantity: (qty, prodId) => dispatch(updateCartQuantity(qty, prodId))
    }
}

export default connect(null, mapDispatchToProps)(CartTile)
