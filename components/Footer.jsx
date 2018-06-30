import React from 'react'

function Footer(){
  return (
    <div className="footer">
      <style>{`
          .footer {
            background-color: gray;
            height: 100px;
            position: absolute;
            width: 100%;
            bottom: 0;
          }
            `}
      </style>
      <p>Footer</p>
    </div>
  )
}

export default Footer
