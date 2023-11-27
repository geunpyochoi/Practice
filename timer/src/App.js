import React from "react";
import { Body, TimerBox } from "./AppStyle";
import { GlobalStyles } from "./AppStyle";
import dot from "./images/dot.png";

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
            <div className='time min'>
              <div className='dot'>
                <p>MIN</p>
                <img src={box} alt='' className='box' />
              </div>
            </div>
            <div className='time sec'>
              <div className='dot'>
                <p>SEC</p>
                <img src={box} alt='' className='box' />
              </div>
            </div>
          </div>
        </TimerBox>
      </Body>
    </>
  );
}
export default App;
