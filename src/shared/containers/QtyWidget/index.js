import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './qtyWidget.css';

export default class QtyWidget extends Component {
    static propTypes = {
        shouldAutoUpdate: PropTypes.bool.isRequired,
        updateQuantity: PropTypes.func,
        prodQty: PropTypes.number,
        qtyRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    }
    
    constructor(props) {
        super(props);
        this.state = {
            count : this.props.prodQty || 1
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement() {
        this.setState({
            count: (this.state.count - 1) || 1
        })
    }

    componentDidUpdate() {
        if(this.props.shouldAutoUpdate) {
            this.props.updateQuantity(this.state.count, this.props.prodId);
        }
    }

    render() {
        return (
            <div>
                <input className="counter-field" value={this.state.count} readOnly ref={this.props.qtyRef}/>
                <div className="counter-control">
                    <button onClick={this.increment}>+</button>
                    <button className="btn-dec" onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}