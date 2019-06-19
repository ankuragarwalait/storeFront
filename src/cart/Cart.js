import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Cart.css';
import CartTile from '../shared/containers/CartTile';
import PropTypes from 'prop-types';

export class Cart extends Component { 
    static propTypes = {
        total: PropTypes.number,
        productList: PropTypes.objectOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            qty: PropTypes.number,
            price: PropTypes.number
        }))
    }   
    render() {
        const productList = this.props.productList;
        const cartSize = Object.keys(productList).length;
        const totalPrice = `$${parseFloat(this.props.total).toFixed(2)}`;
        return (
            <div className="Cart">
                <h1 className="cart-heading">Shopping Cart</h1>
                <div className="container cart-container">
                    <div className="row items-header t-color-lightgrey">
                        <div className="col-6 text-left">PRODUCT</div>
                        <div className="col-2">QUANTITY</div>
                        <div className="col-1">TOTAL</div>
                        <div className="col-1 text-right">ACTION</div>
                    </div>
                    <hr/>
                    <div className="products-list-container">
                        { 
                            cartSize === 0 ? <h2>No Products In Cart Yet.</h2> 
                            :
                            Object.keys(productList).map(prodId => <CartTile key={prodId} {...productList[prodId]} prodItem={productList[prodId]}/>)
                        }
                    </div>
                    {cartSize > 0 ? 
                        (<div className="row cart-overview">
                            <div className="col-6">&nbsp;</div>
                            <div className="col-4 text-left">
                                <p>CART OVERVIEW</p>
                                <p>SUBTOTAL</p>
                                <p>TOTAL</p>
                            </div>
                            <div className="col-2 text-right">
                                <p>&nbsp;</p>
                                <p>{totalPrice}</p>
                                <p>{totalPrice}</p>
                            </div>
                        </div>) : null 
                    }
                    <hr/>
                    <div className="row">
                        <Link to="/">Continue Shopping</Link>
                        <button className="btn btn-primary">
                            CHECKOUT {this.props.total ? <span>({totalPrice})</span> : null}
                            </button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ cart }) => {
    return {
        productList: cart.items,
        total: cart.total
    }
}

export default connect(mapStateToProps)(Cart);
