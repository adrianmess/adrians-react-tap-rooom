import React from 'react'

function Body() {
  return (
    <div className="bodyContainer">
      <style jsx>{`

          div {
            min-width:320px;
          }
          .bodyTopImage{
            background: url(https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg);
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center top;
            height: 40vh;
            margin: 0;
          }
          .bodyContainer {
                        margin-bottom: 300px;
          }
          `}</style>
        <div className="bodyTopImage"></div>

        <div className="secondBodyButtons">
          <div className="events">
            <h3>Events</h3>
            <img src={require('../assets/images/drinks/hamms.jpg')} />
          </div>

          <div className="whatOnTap">
            <h3>What's On tap</h3>
          </div>
          <div className="location">
            <h3>location</h3>
          </div>
        </div>
      </div>

    )
  }

  export default Body
