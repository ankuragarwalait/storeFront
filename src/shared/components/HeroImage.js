import React from 'react'
import config from '../../config';
import PropTypes from 'prop-types';

const HeroImage = ({
    imageName,
    header,
    description
}) => {
    const imgSrc = `${config.imageURL}/${imageName}.jpg`;
    const style = {
        width: "100%",
        height: "22em",
        background: `url(${ imgSrc }) center`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
    return (
        <div className="hero-container">
            <div style={style}>
                <div className="hero-overlay">
                    <div className="overlay-content">
                        <h1 className="overlay-header">{header}</h1>
                        <div className="overlay-description">{description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

HeroImage.propTypes = {
    imageName: PropTypes.string.isRequired,
    header: PropTypes.string,
    description: PropTypes.string
}

export default HeroImage
