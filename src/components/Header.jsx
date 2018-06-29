import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <div className="navigation">

    <Link to="/" style={{ textDecoration: 'none'}}><p className="link">Home</p></Link>
    <Link to="/about" style={{textDecoration: 'none'}}><p className="link">About Us</p></Link>
    </div>
  );
}

export default Header;
