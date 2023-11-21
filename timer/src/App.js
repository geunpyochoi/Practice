import React from "react";
import { Body, TimerBox } from "./AppStyle";
import { GlobalStyles } from "./AppStyle";

import logo from "./images/weniv-logo.png";

function App() {
  return (
    <>
      <GlobalStyles />
      <Body>
        <p className='logo'>Pomodoro</p>
        <TimerBox>
          <p className='timer'>TIMER</p>
        </TimerBox>
      </Body>
    </>
  );
}
export default App;
