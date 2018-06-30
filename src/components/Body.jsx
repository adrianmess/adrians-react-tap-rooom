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
          .secondBodyButtons{
            display:flex;
          }
          .bodyButtonImg{
            height: 150px;
            border-radius: 25% 25%;
            align-self: center;
          }
          .bodyButtonText{
            text-align: center;
          }
          .bodyButtonsContainer{
            display: flex;
            flex-direction: column;
            width: 300px;
          }
          `}</style>
        <div className="bodyTopImage"></div>

        <div className="secondBodyButtons">
          <div className="events bodyButtonsContainer">
            <h3 className="bodyButtonText">Events</h3>
            <img src={require('../assets/images/bodyButtons/adult-asia-bar-small.jpg')} className="bodyButtonImg" />

          </div>

          <div className="whatOnTap bodyButtonsContainer">
            <h3 className="bodyButtonText">What's On tap</h3>
            <img src={require('../assets/images/bodyButtons/beer-tap-small2.jpg')} className="bodyButtonImg" />

          </div>
          <div className="location bodyButtonsContainer">
            <h3 className="bodyButtonText">Menu</h3>
            <img src={require('../assets/images/bodyButtons/menu-crop-small.jpg')} className="bodyButtonImg" />
          </div>
        </div>
      </div>

    )
  }

  export default Body
