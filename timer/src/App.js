import React from "react";
import { Body, Buttons, Step, TimerBox } from "./AppStyle";
import { GlobalStyles } from "./AppStyle";
import start from "./images/button/start-default.png";
import reset from "./images/button/reset-default.png";

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
              <div className='minute'>
                <p>00</p>
              </div>
            </div>
            <div className='time sec'>
              <div className='dot'>
                <p>SEC</p>
                <img src={box} alt='' className='box' />
              </div>
              <div className='second'>
                <p>00</p>
              </div>
            </div>
          </div>
          <Buttons>
            <button>
              <img src={start} alt='' />
            </button>
            <button>
              <img src={reset} alt='' />
            </button>
          </Buttons>
          <Step>
            <p>STEP 1</p>
          </Step>
        </TimerBox>
      </Body>
    </>
  );
}
export default App;
