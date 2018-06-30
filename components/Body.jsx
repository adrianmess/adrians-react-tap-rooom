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
            margin-top: 5vh;
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

          .thirdBody{
            margin-top: 10vh;
            height: 30vh;
            color: black;
            background: url(https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg);
            background-attachment: fixed !important;
            background-repeat: no-repeat;
            background-size: cover !important;
            overflow: hidden;
            // padding: 170px 0 184px 0;
          }

          .thirdBody > p {
            margin: 15vh 40vw auto 40vw;
            color: white;
            text-align: center;
            border-width: 2px;
            border-style: solid;
            border-color: white;
            font-size: 2em;
          }

          a:visited{color:white !important}


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

        <div className="thirdBody parallax-section">
            <p className="link"><a href='#' style={{textDecoration: 'none'}}>About Us</a></p>
        </div>
      </div>

    )
  }

  export default Body
