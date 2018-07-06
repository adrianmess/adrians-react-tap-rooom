import React from 'react'
import { Link } from 'react-router-dom';

function AddBeer(){
  return (
    <div>
      <style>{`

            `}
      </style>
      <div className="beerTableHeader">
        <a>Click to add Beer to list:</a><Link to='/addbeer' style={{textDecoration: 'none'}}><span><a>Add</a></span></Link>
      </div>

    </div>
  )
}

export default AddBeer
