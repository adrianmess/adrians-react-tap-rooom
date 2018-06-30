import React from 'react'

function Footer(){
  return (
    <div className="footer">
      <style>{`
          .footer {
            background-color: black;
            height: 100px;
            bottom:0;
            width: 99%;
            margin: auto;
          }
          .copyright {
            color: white;
            text-align: center;
            // margin-top: 25%;
            padding-top: 4%;
          }

          `}
        </style>

          <p className="copyright">Copyright @ Adrians Tap Room 2018</p>


      </div>
    )
  }

  export default Footer
