import React from "react";
import { Body, TimerBox } from "./AppStyle";
import { GlobalStyles } from "./AppStyle";

import box from "./images/box.png";
function App() {
  return (
    <>
      <GlobalStyles />
      <Body>
        <p className='logo'>Pomodoro</p>
        <TimerBox>
          <p className='timer'>TIMER</p>
          <hr />
          <div className='time-text'>
            <div className='time hrs'>
              <span>HRS</span>
              <img src={box} alt='' />
            </div>
            <div className='time min'>
              <span>MIN</span>
              <img src={box} alt='' />
            </div>
            <div className='time sec'>
              <span>SEC</span>
              <img src={box} alt='' />
            </div>
          </div>
        </TimerBox>
      </Body>
    </>
  );
}
export default App;
