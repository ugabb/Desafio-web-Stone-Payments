import styled from "styled-components";

const WaveImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(../public/bg-dolar.png);
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  z-index: -1;
  overflow: hidden;

  @media screen and (max-width:425px){
    background-image: none;
  }
`;

export { WaveImage };