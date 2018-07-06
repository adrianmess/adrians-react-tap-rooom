import React from 'react'
import ruby_zozzle from '../assets/images/drinks/ruby_zozzle.jpg'

function Information(){
  return (
    <div className="infoContainer" >
      <style> {`
          .infoContainer {
            background: url(https://images.pexels.com/photos/1022692/pexels-photo-1022692.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            justify-content: space-around;
            height: 300px;
            margin-top: -200px;
            margin-bottom: 50px;

          }
          .infotext {
            backdrop-filter: blur(10px);
          }
          .infoContainer h3 {
            color: orange;
            margin-top: 100px;
          }
          p {
            color: white;
            margin: 0;
            font-weight: lighter;
          }
          `}

      </style>
      <div className="Location infotext">
        <h3>Location</h3>
      </div>

      <div className="Social infotext">
        <h3>Social</h3>
      </div>

      <div className="Hours infotext">
        <h3>Hours</h3>
        <p>Saturday & Sunday Brunch 10am - 3 pm</p>
        <p>Sunday 10AM–12:00AM</p>
        <p>Monday 11AM–12:00AM</p>
        <p>Tuesday 11AM–12:00AM</p>
        <p>Wednesday 11AM–12:00AM</p>
        <p>Thursday 11AM–12:00AM</p>
        <p>Friday 11AM–2AM</p>
        <p>Saturday 10AM–2AM</p>
      </div>
    </div>
  )
}

export default Information
