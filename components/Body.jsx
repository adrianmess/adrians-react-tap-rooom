import React from 'react'

function Body() {
  return (
    <div className="bodyContainer">
      <style jsx>{`

        div {
          min-width:320px;
        }
        .bodyContainer{
          background: url(https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center top;
            height: 100vh;
            margin: 0;
        }
      `}</style>
    </div>
  )
}

export default Body
