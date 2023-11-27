import React, { useEffect, useState } from "react";
import { Body, Buttons, Step, TimerBox } from "./AppStyle";
import { GlobalStyles } from "./AppStyle";
import start from "./images/button/start-default.png";
import reset from "./images/button/reset-default.png";
import pause from "./images/button/pause.png";

import box from "./images/box.png";

// 숫자를 두 자리 문자열로 변환하는 함수
const formatNumber = (number) => {
  return number < 10 ? `0${number}` : `${number}`;
};

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(24);
  const [startBtn, setStartBtn] = useState(true);
  const [step, setStep] = useState(1);
  const [timerRunning, setTimerRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);

  const startTimer = () => {
    setStartBtn((prevStartBtn) => !prevStartBtn);
    setTimerRunning((prevTimerRunning) => !prevTimerRunning);
  };

  useEffect(() => {
    if (timerRunning) {
      const interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [timerRunning]);

  useEffect(() => {
    if (seconds === 60) {
      setMinutes((prevMinutes) => prevMinutes + 1);
      setSeconds(0);
    }

    if (minutes === 25) {
      if (isBreakTime) {
        // 쉬는 시간이 끝났을 때 초기화 및 작업 단계 증가
        setMinutes(0);
        setSeconds(0);
        setStep((prevStep) => prevStep + 1);
        setIsBreakTime(false);
      } else {
        // 작업 시간이 끝났을 때 쉬는 시간 설정
        setMinutes(0);
        setSeconds(0);
        setIsBreakTime(true);
      }
    }

    if (minutes === 5 && isBreakTime) {
      // 쉬는 시간이 5분일 때 초기화
      setMinutes(0);
      setSeconds(0);
      setIsBreakTime(false);
    }
  }, [seconds, minutes, isBreakTime]);

  const resetTimer = () => {
    const shouldReset = window.confirm("타이머를 초기화하시겠습니까?");
    if (shouldReset) {
      setMinutes(0);
      setSeconds(0);
      setStep(1);
      setIsBreakTime(false);
      setTimerRunning(false);
      setStartBtn(true);
    }
  };

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
                <p>{formatNumber(minutes)}</p>
              </div>
            </div>
            <div className='time sec'>
              <div className='dot'>
                <p>SEC</p>
                <img src={box} alt='' className='box' />
              </div>
              <div className='second'>
                <p>{formatNumber(seconds)}</p>
              </div>
            </div>
          </div>
          <Buttons>
            <button onClick={startTimer}>
              <img src={startBtn ? start : pause} alt='' />
            </button>
            <button onClick={resetTimer}>
              <img src={reset} alt='' />
            </button>
          </Buttons>
          <Step>
            <p>STEP {step}</p>
          </Step>
        </TimerBox>
      </Body>
    </>
  );
}

export default App;
