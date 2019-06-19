import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumb = ({
    category,
    subCategory,
    prodName
}) => {
    return(
        <div className="breadcrumb-container">
            <Link to="/">{category} / </Link>
            <Link to="/">{subCategory} / </Link>
            <span className="breadcrumb-prod-id">{prodName.toUpperCase()}</span>
        </div>
    )
}

BreadCrumb.propTypes = {
    category: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    prodName: PropTypes.string.isRequired
}

export default BreadCrumb
