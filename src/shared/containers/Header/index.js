import React from 'react'
import config from "../../../config";
import './header.css';
import {Link} from 'react-router-dom';
import CartHeader from '../CartHeader';

const Header = () => {
    const imgSrc = `${config.imageURL}/logo.png`;
    return (
        <header className="App-header">
          <img src={imgSrc} className="App-logo" alt="logo" />
          <div>
              <Link to="/" className="Nav-link caret-link">SHOP</Link>
              <Link to="/" className="Nav-link">HOME</Link>
              <Link to="/" className="Nav-link">JOURNAL</Link>
              <Link to="/" className="Nav-link caret-link">MORE</Link>
          </div>
          <CartHeader />
        </header>
    )
}

export default Header
