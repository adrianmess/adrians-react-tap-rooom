import React from 'react'

function Body() {
  return (
    <div className="bodyContainer">
      <style jsx global>{`
          @import url('https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,600,600i,700,700i,800,800i,900');
          @import url('https://fonts.googleapis.com/css?family=Crete+Round');
          @import url('https://fonts.googleapis.com/css?family=Anton');

          div {
            min-width:320px;
          }
          .bodyTopImage{
            background: url(https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center top;
            height: 40vh;

            margin: 0 3.5vw;

          }

          .secondBodyButtons{
            // display:flex;
            margin-top: 5vh;
            flex-wrap: wrap;
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

            justify-self: center;
            flex-direction: column;
            // width: 300px;
          }
          // .bodyButtonMenu img{
            //   width: 100%;
            //
            // }
            .thirdBody {
              height: 30vh;
              width: 95%;
              color: black;
              background: url(https://images.pexels.com/photos/128242/pexels-photo-128242.jpeg);
              background-attachment: fixed !important;
              background-repeat: no-repeat;
              background-size: cover !important;
              overflow: hidden;
              // padding: 170px 0 184px 0;
              margin: auto;
              margin-top: 10vh ;

            }

            .thirdBody > p {
              margin: 15vh 45vw auto 40vw;
              color: white;
              text-align: center;
              border-width: 2px;
              border-style: solid;
              border-color: white;
              font-size: 2em;
              width: 10rem;
            }

            .thirdBody > p:hover {
              background-color: rgba(255, 170, 0, 0.28);
            }

            a:visited{color:white !important}

            @media only screen and (max-width: 979px) {
              .bodyButtonsContainer{
                margin-top: 5vh;
              }
            }
            @media only screen and (min-width: 980px) {
              .secondBodyButtons{
                display:flex;
                margin-top: 5vh;
                flex-wrap: wrap;
                justify-content: center;
              }
            }


            // ======================================================

            .infoContainer {

              display: flex;
              flex-direction: row;
              justify-content: center;
              margin-top: 10vh;
              margin-bottom: 10vh;
            }
            .infoBackground {
              height: 300px;
              width: 70%;
              position: absolute;
              margin: auto;
            }
            .infotext {
              position: relative;
              background-color: rgb(255,255,255,0.5);

            }
            .infoContainer h3 {
              color: red;
              margin-top: 20px;
            }
            .infotext {

              font-size: 1.5rem;
              color: black;
              margin: .4em;
              // font-family: 'Raleway', sans-serif;
              font-family: 'Crete Round', serif;
              // font-family: 'Anton', sans-serif;
              font-weight: 500;
              min-width: 300px;
            }

            .locationIcons{
              float: left;
              margin-right: .5em;
            }


            `}</style>
          <div className="bodyTopImage"></div>

          <div className="secondBodyButtons">
            <div className="events bodyButtonsContainer">
              <h3 className="bodyButtonText">Events</h3>
              <img src={require('../assets/images/bodyButtons/adult-asia-bar-small.jpg')} className="bodyButtonImg" />
            </div>

            <div className="location bodyButtonsContainer bodyButtonMenu" >
              <h3 className="bodyButtonText">Menu</h3>
              <img src={require('../assets/images/bodyButtons/food.png')} className="bodyButtonImg" />
            </div>

            <div className="whatOnTap bodyButtonsContainer">
              <h3 className="bodyButtonText">What's On tap</h3>
              <img src={require('../assets/images/bodyButtons/beer-tap-small2.jpg')} className="bodyButtonImg" />

            </div>

          </div>

          <div className="thirdBody parallax-section">
            <p className="link"><a href='#' style={{textDecoration: 'none'}}>About Us</a></p>
          </div>

          <div className="infoContainer">
            <div className="infoBackground">
            </div>
            <div className="Location infotext">
              <h3>Location</h3>
              <img className="locationIcons" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxnIGZpbGw9IiMyMzFGMjAiPgogICAgICA8cGF0aCBkPSJtMzEzLjksMzc2LjdjNDEuMy02OC41IDkzLjUtMTY0LjggOTMuNS0yMTQuMyAwLTgzLjUtNjcuOS0xNTEuNC0xNTEuNC0xNTEuNC04My41LDAtMTUxLjQsNjcuOS0xNTEuNCwxNTEuNCAwLDQ5LjUgNTIuMiwxNDUuOCA5My41LDIxNC4zLTQ5LDMuNy0xNjAuNSwxNy0xNjAuNSw2MS4xIDAsNDMuNCAxMTMuMiw2My4yIDIxOC41LDYzLjIgMTA1LjIsMCAyMTguNS0xOS44IDIxOC41LTYzLjItMC4xLTQ0LjEtMTExLjctNTcuNC0xNjAuNy02MS4xem0tMTg4LjQtMjE0LjNjMC03MiA1OC42LTEzMC42IDEzMC41LTEzMC42IDcyLDAgMTMwLjYsNTguNiAxMzAuNiwxMzAuNiAwLDYyLjktMTAwLjIsMjIwLjctMTMwLjYsMjY3LjEtMzAuNC00Ni40LTEzMC41LTIwNC4yLTEzMC41LTI2Ny4xem0xMzAuNSwzMTcuN2MtMTI3LjksMC0xOTcuNi0yOC0xOTcuNi00Mi40IDAtMTEuMSA0Ni0zNSAxNTItNDEuMSAxOS45LDMyLjEgMzUsNTQuOCAzNyw1Ny41IDIuNywzLjYgMTAuNiw3LjkgMTcuMywwIDIuMS0yLjUgMTcuMS0yNS40IDM3LTU3LjUgMTA2LDYuMSAxNTIsMjkuOSAxNTIsNDEuMS0wLjEsMTQuNS02OS44LDQyLjQtMTk3LjcsNDIuNHoiIGZpbGw9IiMwMDAwMDAiLz4KICAgICAgPHBhdGggZD0ibTMyMS45LDE2Mi40YzAtMzYuNC0yOS41LTY1LjktNjUuOS02NS45LTM2LjQsMC02NS45LDI5LjUtNjUuOSw2NS45IDAsMzYuNCAyOS41LDY1LjkgNjUuOSw2NS45IDM2LjQsMCA2NS45LTI5LjUgNjUuOS02NS45em0tMTExLDBjMC0yNC45IDIwLjItNDUuMSA0NS4xLTQ1LjFzNDUuMSwyMC4yIDQ1LjEsNDUuMWMwLDI0LjktMjAuMiw0NS4xLTQ1LjEsNDUuMXMtNDUuMS0yMC4yLTQ1LjEtNDUuMXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=" />
              <p>111 Burnside St, Portland, OR 97201</p>
              <img className="locationIcons" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDc5MiA3OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc5MiA3OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNNjgwLjA1LDY4MC43MTNjLTIuNDcxLTMuOTMzLTEzLjYyLTIxLjE0Ni0zNy4yNzQtNTcuNTZjLTE5LjIwNC0yOS42NjMtMzQuMzcxLTUzLjA5My0zNy4zNDEtNTcuNTM4ICAgIGMtOC44NjUtMTMuNDkyLTE4LjA5OS0yNS41OTktMzMuNTM2LTI1LjU5OWMtNi45MjEsMC0xNC4yOSwyLjM5OC0yMi45OCw3LjQzM2MtMS43MDgsMC45MjQtNC40ODgsMi41NDctOC4xMzMsNC42ODNsLTMuNSwyLjA0NyAgICBjLTUuNzIxLDAuNzYzLTExLjg5OCwzLjA4OS0xOC43MzgsNy4wMjljLTEuOTU4LDEuMDk4LTUuMzQsMy4wODUtOS44ODcsNS43NTljLTMuMjIsMS44OTUtNy4wMzgsNC4xNDUtMTEuMzQ4LDYuNjU3ICAgIGMtNS41NzcsMy4yNTEtMTAuMjYsNS45ODgtMTMuOTEyLDguMTQ2Yy02OS4zMTQtNjcuNzcxLTE4NS45NTQtMjQ1LjMwMS0yMTUuODItMzQyLjEwMWwyMC43NDMtMTIuMTkxICAgIGM5LjIyNS01LjM5LDE1Ljk0Ni05LjMyNywxOC44Ny0xMS4xMTVjNC42MTktMi43NTgsOC4zMzUtNS41MzQsMTEuMzE4LTguNDU0YzYuOTcxLTQuMDg1LDEyLjE5Ni03LjE1MywxNC42NjctOC42NzQgICAgYzExLjUwNS02Ljg5MSwxNy43OTMtMTQuMDMxLDE5Ljc5LTIyLjQ2NGMyLjc5Mi0xMS43OTctMy43MDQtMjMuMzY2LTExLjIxNy0zNS4xOTNjLTIuODUyLTQuNDU0LTE3LjY0MS0yNy4zMDctMzcuNDg1LTU3Ljg3NyAgICBjLTE5LjQyOS0zMC4wNTctMzQuNTI4LTUzLjMzOC0zNy41NjItNTcuOTA3QzI1Ny43NTcsMTIuMiwyNDguNDQzLDAsMjMyLjkzNCwwYy02LjkyLDAtMTQuMjc2LDIuMzg2LTIzLjA5NSw3LjQ3OSAgICBjLTIuMDMsMS4xNDgtNS43MDgsMy4zMS0xMC41NzMsNi4xODdjLTUuNDc1LDAuODg2LTExLjM0LDMuMTY2LTE3Ljc2OCw2Ljg3OGMtMi40NzEsMS4zNjktNy4yNSw0LjE4My0xMy43NTEsOC4wMThsLTcuNTEzLDQuNDI4ICAgIGMtMTEuNzIxLDYuODQzLTE4LjI3MiwxMC43MTItMjEuMTIsMTIuNDc1Yy02LjMxNCwzLjc1OS0xMC45MDMsNy40OTctMTQuMTc5LDExLjU3M2MtMS4wMTMsMC4zODUtMS45ODcsMC44NjktMi45MTYsMS40NTMgICAgYy0xNS40MDgsOS44MTgtMzcuOTE0LDc1LjAwMS00LjQzNywyMDQuNzE4YzM1LjY3MiwxMzguMzcsMTM4LjAyMiwzMzUuNzEsMjc4LjQzOSw0NDEuOTkyICAgIGM3OC4xODQsNTkuMjEyLDE1MS4wMjcsODYuNzk1LDE3NS42NCw4Ni43OTljNC40NDQsMCw3Ljg5NS0wLjgxMywxMC4yMjktMi4yOTNjMC4zODUtMC4yMiwwLjc2My0wLjQ1MywxLjEyNy0wLjcwNyAgICBjNS43MTItMC43NTksMTEuOTM4LTMuMTEsMTguODctNy4xMTVjMy4zMzUtMS44ODIsMTAuODgyLTYuMzE4LDIxLjIxMy0xMi40MDNjNC4wMzgtMi4zODIsNy42NDktNC40OTIsMTAuNzQyLTYuMjk3ICAgIGM0Ljg5OC0yLjg2OSw4LjUzLTQuOTkyLDEwLjQ0Ni02LjE3OWM1Ljk5MS0zLjU4OSwxMC41MTgtNy4yMjksMTMuNzgtMTEuMDk0bDAuMDY3LTAuMDM4YzYuMjUxLTMuNjcsMTAuOTQ2LTYuNDI5LDEzLjE2Mi03LjgxICAgIGMxMS41My02Ljg5NSwxNy44MzItMTQuMDM1LDE5LjgzMi0yMi40NkM2OTMuOTExLDcwMy44NzUsNjg3LjQ2NSw2OTIuMzkyLDY4MC4wNSw2ODAuNzEzeiBNNjc0LjYzNCw3MTEuNjkzICAgIGMtMC44NDgsMy41ODEtNC44OTUsNy41NTYtMTIuMTYyLDExLjkwM2MtMi4yNzksMS40Mi02Ljg0NCw0LjA5OC0xMi45Miw3LjY2NmwtMS40MTEsMC44MjZjLTAuOTY2LDAuNTYzLTEuODA1LDEuMzE4LTIuNDc1LDIuMjA4ICAgIGMtMS45NDksMi41ODEtNS4zNDQsNS4zMzEtMTAuMTk1LDguMjM4Yy0xLjk1NCwxLjIxMi01LjQ1NCwzLjI1OC0xMC4xNzksNi4wMTdjLTMuMTA2LDEuODE4LTYuNzM4LDMuOTQxLTEwLjc5OCw2LjMzMSAgICBjLTEwLjE4OCw2LjAwNS0xNy42MjgsMTAuMzgyLTIxLjAwNiwxMi4yOGMtNS43NjMsMy4zMzEtMTAuNTM0LDUuMDY0LTE0LjE3NSw1LjE1M2MtMi4yNjMsMC4wNTEtNC40MDIsMS4wMDktNS45NDksMi42MzYgICAgYy0wLjMzLDAuMDQ3LTAuODc3LDAuMDk4LTEuNjk5LDAuMDk4Yy0xOS4yOTgtMC4wMDUtODcuNjI1LTI0LjQ1NS0xNjUuNDEtODMuMzY2ICAgIGMtMTM3LjE4My0xMDMuODMzLTIzNy4yOTYtMjk3LjA4OC0yNzIuMjYtNDMyLjcwOGMtMzAuOTI2LTExOS44MzQtMTEuMTU4LTE3OS45MTUtMy4wMzgtMTg2LjA4NSAgICBjMi41NjMtMC4yODQsNC44Ni0xLjcyLDYuMjQyLTMuOTExYzEuNzcxLTIuODE4LDUuMzMxLTUuODMxLDEwLjY5Ni05LjAyNmMyLjg0OC0xLjc1OCw5LjI4OS01LjU2LDIwLjkwOC0xMi4zNDhsNy41NTEtNC40NDUgICAgYzYuMzE4LTMuNzI1LDEwLjk1OC02LjQ2MiwxMy40OTMtNy44NjVjNS4xNDgtMi45NzUsOS41NjQtNC42NywxMy4xMjQtNS4wMzRjMS4yMTYtMC4xMjMsMi4zOTUtMC41MTMsMy40NS0xLjE0ICAgIGM1LjQ3NS0zLjIzNyw5LjYwMi01LjY2NiwxMS44MzktNi45MzNjNi4wMjItMy40NzUsMTAuOTU4LTUuMjM4LDE0LjY3NS01LjIzOGM1Ljc5MywwLDEwLjU1Niw0LjQxMiwxOS42MjUsMTguMTkyICAgIGMyLjk3LDQuNDc1LDE4LjM3OCwyOC4yMjcsMzcuNDc3LDU3Ljc3NWMxOS44MjgsMzAuNTQsMzQuNTkxLDUzLjM2NCwzNy40MjIsNTcuNzc5YzYuNDIsMTAuMDk4LDEwLjE2MiwxNy4zMjgsOS4wMTgsMjIuMTY3ICAgIGMtMC44NTIsMy41ODUtNC44OSw3LjU2NC0xMi4wODUsMTEuODc4Yy0yLjYxLDEuNjAyLTguMDk4LDQuODE4LTE1LjQwMyw5LjA5OGMtMC42NjYsMC4zOTQtMS4yOCwwLjg3My0xLjgxOCwxLjQzMiAgICBjLTIuMDM0LDIuMTE1LTQuOTU4LDQuMzE4LTguNzUxLDYuNTg1Yy0yLjk0OSwxLjgwNS05LjU3Myw1LjY3OC0xOC42NTQsMTAuOTg4bC0yMy4wOSwxMy41ODJsLTEuMjA0LDAuNjI3ICAgIGMtMC43MjksMC4zNzMtMS40MzcsMC43MzctMi4xNDQsMS4xNDVjLTMuMzY1LDEuOTI0LTQuOTkyLDUuODktMy45NTQsOS42MjRjMjguMjMxLDEwMS40MzksMTUzLjg2MiwyOTIuMjk1LDIyNy4wMjgsMzYwLjcxMSAgICBjMi43NTksMi41NzYsNi44OTUsMy4wMjUsMTAuMTMzLDEuMDg5YzMuNzc1LTIuMjUsMTAuMzczLTYuMTQsMTkuMzE4LTExLjM0OGM0LjM0LTIuNTM0LDguMTc5LTQuNzkzLDExLjQxMi02LjcgICAgYzQuMzk1LTIuNTgsNy42NjItNC41MDQsOS42NTMtNS42MjNjNS40Mi0zLjEyMywxMC4wMDUtNC44MzUsMTMuNjI0LTUuMDY4YzEuMzEtMC4wODksMi41NzYtMC40NzUsMy43MDgtMS4xNGw1LjExNC0yLjk5MiAgICBjMy40Mi0yLjAwNCw2LjAxOC0zLjUyOSw3LjgzNi00LjUxM2M2LjA0Ny0zLjUsMTAuOTkyLTUuMjcxLDE0LjcwNC01LjI3MWM1LjczMywwLDEwLjQzOCw0LjM2LDE5LjQwMywxOC4wMTQgICAgYzIuOTM4LDQuMzk1LDE4LjA3OCwyNy43ODIsMzcuMjUzLDU3LjM5OGMxNi42NTgsMjUuNjQyLDM0LjA5Niw1Mi41MTIsMzcuMTY0LDU3LjM5ICAgIEM2NzIuMDY2LDY5OS43NTYsNjc1Ljc3LDcwNi45MDksNjc0LjYzNCw3MTEuNjkzeiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik0xNjEuODMyLDg1LjAxOWMwLjQ4Ny00LjY1Ny0yLjg5LTguODIzLTcuNTQzLTkuMzE0Yy00LjYyNC0wLjQ0OS04LjgyMywyLjg4Ni05LjMxNCw3LjU0MiAgICBjLTAuNjM1LDYuMDczLTE0Ljk5MywxNDkuOTY4LDQyLjQ2OSwyNTguNjg4YzEuNTIxLDIuODc3LDQuNDYyLDQuNTEzLDcuNTA1LDQuNTEzYzEuMzMxLDAsMi42OTEtMC4zMTMsMy45NTQtMC45NzkgICAgYzQuMTQtMi4xOSw1LjcyMS03LjMxOCwzLjUzNC0xMS40NTRDMTQ3LjQxNSwyMjkuOTMxLDE2MS42NzksODYuNDU1LDE2MS44MzIsODUuMDE5eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik01NjkuMzEzLDcyOS43NDZjLTEyOS40OTItMzIuNzQ0LTI3My45ODEtMjEzLjY3Ny0yNzUuNDI2LTIxNS40OThjLTIuOTE2LTMuNjc5LTguMjQyLTQuMjg1LTExLjkwOC0xLjM4NiAgICBjLTMuNjcsMi45MTEtNC4yOTIsOC4yMzMtMS4zODYsMTEuOTA3YzAuMzY5LDAuNDY2LDM3LjUyOCw0Ny4yMTUsOTAuNjI5LDk3LjQzMWM3MS43NTksNjcuODczLDEzNy4wMDUsMTA5LjU4NCwxOTMuOTM3LDEyMy45ODMgICAgYzAuNjk1LDAuMTczLDEuMzk1LDAuMjU4LDIuMDg1LDAuMjU4YzMuNzg4LDAsNy4yMzctMi41Niw4LjIwOC02LjM5OEM1NzYuNjAyLDczNS41MDUsNTczLjg1Miw3MzAuODk1LDU2OS4zMTMsNzI5Ljc0NnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />
              <p>Phone: (955) 555-5555</p>
              <img className="locationIcons" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4My4zIDQ4My4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODMuMyA0ODMuMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MjQuMyw1Ny43NUg1OS4xYy0zMi42LDAtNTkuMSwyNi41LTU5LjEsNTkuMXYyNDkuNmMwLDMyLjYsMjYuNSw1OS4xLDU5LjEsNTkuMWgzNjUuMWMzMi42LDAsNTkuMS0yNi41LDU5LjEtNTkuMSAgICB2LTI0OS41QzQ4My40LDg0LjM1LDQ1Ni45LDU3Ljc1LDQyNC4zLDU3Ljc1eiBNNDU2LjQsMzY2LjQ1YzAsMTcuNy0xNC40LDMyLjEtMzIuMSwzMi4xSDU5LjFjLTE3LjcsMC0zMi4xLTE0LjQtMzIuMS0zMi4xdi0yNDkuNSAgICBjMC0xNy43LDE0LjQtMzIuMSwzMi4xLTMyLjFoMzY1LjFjMTcuNywwLDMyLjEsMTQuNCwzMi4xLDMyLjF2MjQ5LjVINDU2LjR6IiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTMwNC44LDIzOC41NWwxMTguMi0xMDZjNS41LTUsNi0xMy41LDEtMTkuMWMtNS01LjUtMTMuNS02LTE5LjEtMWwtMTYzLDE0Ni4zbC0zMS44LTI4LjRjLTAuMS0wLjEtMC4yLTAuMi0wLjItMC4zICAgIGMtMC43LTAuNy0xLjQtMS4zLTIuMi0xLjlMNzguMywxMTIuMzVjLTUuNi01LTE0LjEtNC41LTE5LjEsMS4xYy01LDUuNi00LjUsMTQuMSwxLjEsMTkuMWwxMTkuNiwxMDYuOUw2MC44LDM1MC45NSAgICBjLTUuNCw1LjEtNS43LDEzLjYtMC42LDE5LjFjMi43LDIuOCw2LjMsNC4zLDkuOSw0LjNjMy4zLDAsNi42LTEuMiw5LjItMy42bDEyMC45LTExMy4xbDMyLjgsMjkuM2MyLjYsMi4zLDUuOCwzLjQsOSwzLjQgICAgYzMuMiwwLDYuNS0xLjIsOS0zLjVsMzMuNy0zMC4ybDEyMC4yLDExNC4yYzIuNiwyLjUsNiwzLjcsOS4zLDMuN2MzLjYsMCw3LjEtMS40LDkuOC00LjJjNS4xLTUuNCw0LjktMTQtMC41LTE5LjFMMzA0LjgsMjM4LjU1eiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />
              <p>info@americantaproom.com</p>
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
        </div>
      )
    }

    export default Body
