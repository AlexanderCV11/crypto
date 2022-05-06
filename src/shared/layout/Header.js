import React from 'react';
import PropTypes from 'prop-types';
import bitcoin from '../images/bitcoin.jpg';

const Header = () => {


    return ( 
        <img src={bitcoin} className="logo"  />
    );
    
}

export default Header;