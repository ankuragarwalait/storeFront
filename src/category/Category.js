import React, { Component } from 'react';
import './Category.css';
import HeroImage from '../shared/components/HeroImage';
import ProductList from '../shared/containers/ProductList';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Category extends Component {
    static propTypes = {
        productList: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            image: PropTypes.string,
            brand: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number
        }))
    }
    render() {
        const categoryHeader = 'Plates';
        const categoryDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
        return (
            <div className="Category">
                <HeroImage imageName="plates-header" header={categoryHeader} description={categoryDescription}  />
                <ProductList productList={this.props.productList}/>
            </div>
        );
    }
}

const mapStateToProps = ({
    products
}) => ({
    productList:  products
})

export default connect(mapStateToProps)(Category)
