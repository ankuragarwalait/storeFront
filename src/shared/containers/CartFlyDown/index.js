import React from 'react'
import './cartFlyDown.css';
import CartFlyDownTile from '../../components/CartFlyDownTile';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../store/actions/cartActions';
import PropTypes from 'prop-types';

const CartFlyDown = ({
  prodList,
  cartTotal,
  removeFromCart
}) => {
    return (
        <div className="cart-flydown">
            {Object.keys(prodList).map(prodItem => 
              <CartFlyDownTile {...prodList[prodItem]} key={prodItem} removeFromCart={removeFromCart}/>
            )}
            <hr className="t-border-light-grey"/>
            <div className="row">
                <p>Total</p>
                <p>${cartTotal}</p>
            </div>
            <div className="row">
                <Link to="/cart" className="btn btn-tertiary">VIEW CART</Link>
                <button className="btn btn-primary">CHECKOUT</button>
            </div>
        </div>
    )
}

const mapStateToProps = ({ cart }) => {
  return {
    prodList: cart.items,
    cartTotal: parseFloat(cart.total).toFixed(2)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id))
  }
}

CartFlyDown.propTypes = {
  prodList: PropTypes.objectOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      brand: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number
  })),
  cartTotal: PropTypes.string,
  removeFromCart: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(CartFlyDown);
