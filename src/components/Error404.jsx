import React from 'react';
import { Link } from 'react-router-dom';

function Error404(){
  return (
    <div className="404container">
      <style>{`

          a:visited{color:blue !important}
            `}</style>
      <div>
        <img src={require('../assets/images/404image.png')}></img>
      </div>
      <div>
        <h2>The page you are looking for does not exist!</h2>
        <h3>Would you like to return <Link to="/" style={{textDecoration: 'none'}}><a>home</a></Link> instead?</h3>
      </div>

    </div>
  );
}

export default Error404;
