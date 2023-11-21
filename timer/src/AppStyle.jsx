import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'GongGothicMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10@1.0/GongGothicMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(
    --gradient2,
    radial-gradient(293.21% 130.49% at 3.59% 5.28%, #f0f4ff 0%, #a5b6ee 100%)
  );
  height: 100vh;
  width: 100vw;
  .logo {
    color: #374b7c;
    font-family: "GongGothicMedium";
    margin-top: 130px;
    font-size: 50px;
  }
`;

export const TimerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 500px;
  flex-shrink: 0;
  background: var(
    --gradient,
    linear-gradient(144deg, #5572bb 2.13%, #374b7c 102.97%)
  );
  border-radius: 16px;
  margin-top: 60px;
  .timer {
    font-size: 30px;
    margin-top: 60px;
    font-family: "Pretendard-Regular";
    color: #fff;
  }
  hr {
    margin-top: 40px;
    width: 80%;
    background: #3d538a;
    border: 0;
    height: 1px;
  }
`;
