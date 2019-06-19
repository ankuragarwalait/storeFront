import React, { Component } from 'react';
import './Product.css';
import BreadCrumb from '../shared/components/BreadCrumb';
import config from '../config';
import QtyWidget from '../shared/containers/QtyWidget';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart, updateCartQuantity } from '../store/actions/cartActions';


class Product extends Component {
    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number
        }),
        addToCart: PropTypes.func,
        updateQuantity: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.addProdToCart = this.addProdToCart.bind(this);
        this.ref = React.createRef();
    }

    addProdToCart() {
        this.props.addToCart(Number(this.ref.current.value), this.props.product);
    }

    render() {
        const prodDetails = this.props.product;
        
        return (
            <div className="container">
                <BreadCrumb category="HOME" subCategory="PLATES" prodName={prodDetails.title} />
                <div className="row prod-wrapper">
                    <img className="img-responsive prod-img" src={`${config.imageURL}/${prodDetails.image}`} alt={prodDetails.id}/>
                    <div className="prod-details-wrap">
                        <p className="t-brand">{prodDetails.brand}</p>
                        <h1 className="t-name">{prodDetails.title}</h1>
                        <p className="t-price">{`$${parseFloat(prodDetails.price).toFixed(2)}`}</p>
                        <p className="t-prod-details">{prodDetails.description}</p>
                        <hr />
                        <div className="row justify-center align-center">
                            <QtyWidget qtyRef={this.ref} updateQuantity={this.props.updateQuantity} shouldAutoUpdate={false} prodId={prodDetails.id}/>
                            <button className="btn btn-primary add-cart" onClick={this.addProdToCart}>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ products }, ownProps) => {
    return {
        product: products.find(product => product.id === ownProps.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (qty, prodDetails) => dispatch(addToCart(qty, prodDetails)),
        updateQuantity: (qty, prodId) => dispatch(updateCartQuantity(qty, prodId)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
