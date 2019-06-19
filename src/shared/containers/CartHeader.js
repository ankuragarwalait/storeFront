import React, {Component} from 'react'
import CartFlyDown from './CartFlyDown';
import { connect } from 'react-redux';

class CartHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCartFlyDown: false
    };
    this.cartRef = React.createRef();
    this.flydownRef = React.createRef();
    this.onCartHeaderClick = this.onCartHeaderClick.bind(this);
    this.displayCartFlydown = this.displayCartFlydown.bind(this);
  }

  onCartHeaderClick() {
    this.setState({
      showCartFlyDown: true
    });
  }

  displayCartFlydown(e) {
    if(e.target !== this.cartRef.current && !this.flydownRef.current.contains(e.target)) {
      this.setState({
        showCartFlyDown: false
      })
    } else {
      this.setState({
        showCartFlyDown: true
      })
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.displayCartFlydown, false);
  }

  componentWillMount() {
    document.removeEventListener('click', this.displayCartFlydown, false);
  }

  render(){
    return (
      <div ref={this.flydownRef}>
        <span className="Nav-link caret-link" onClick={this.onCartHeaderClick} ref={this.cartRef}>MY CART ({this.props.prodCount})</span>
        {this.state.showCartFlyDown ? <CartFlyDown /> : null}
      </div>
    )
  }
}

const mapStateToProps = ({ cart }) => {
  return {
    prodCount: cart.itemCount
  }
}

export default connect(mapStateToProps)(CartHeader);
