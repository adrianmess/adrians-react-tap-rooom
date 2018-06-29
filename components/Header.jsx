import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <div className="navigation">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .navigation{
          display: flex;
          justify-content: space-between;
          padding: 0 50px 0 50px;
          font-family: 'Montserrat', sans-serif;
          background: rgba(0,0,0,.25);
          height: 72px;
          align-items: center;
        }
        .link{
          text-decoration: none;
          color: white;
          font-size: 1.5em;
        }
      `}</style>
    <Link to="/" style={{ textDecoration: 'none'}}><p className="link">Home</p></Link>
    <Link to="/about" style={{textDecoration: 'none'}}><p className="link">About Us</p></Link>
    </div>
  );
}

export default Header;
