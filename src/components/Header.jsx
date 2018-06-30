import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
      <div className="navigation">
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');
          .navigation{
            display: flex;
            justify-content: space-between;
            padding: 0 50px 0 50px;
            font-family: 'Montserrat', sans-serif;
            background: rgba(255,255,255,.25);
            height: 72px;
            align-items: center;
            max-width: 60vw;
            margin-left:20%;

          }
          .link{
            text-decoration: none;
            color: black;
            font-size: 1.5em;
          }
        `}</style>
        <Link to="/" style={{ textDecoration: 'none'}}><p className="link">Home</p></Link>
        <Link to="/beer" style={{textDecoration: 'none'}}><p className="link">Beer</p></Link>
    </div>
  );
}

export default Header;
