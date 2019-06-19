import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from '../../store/actions/cartActions'

export class ProductOverlay extends Component {
    static propTypes = {
        addToCart: PropTypes.func,
        prodItem: PropTypes.shape({
            id: PropTypes.string.isRequired
        })
    }
    constructor(props){
        super(props);
        this.addProductToCart = this.addProductToCart.bind(this);
    }

    addProductToCart() {
        this.props.addToCart(1,this.props.prodItem)
    }

    render(){
        const {id} = this.props.prodItem;
        return (
            <div className="product-overlay">
                <div className="product-mask"></div>
                <div className="btn-container">
                    <Link to={`/product/${id}`} className="btn btn-primary add-cart">VIEW DETAILS</Link>
                    <button className="btn btn-secondary add-cart view-details" onClick={this.addProductToCart}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (qty, prodItem) => dispatch(addToCart(qty, prodItem))
    }
}

export default connect(undefined, mapDispatchToProps)(ProductOverlay);
