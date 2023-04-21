import styled from "styled-components";

const RadioContainer = styled.div`
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    h3{
        color: #2E3742;
    }

    @media screen and (max-width:425px) {
      justify-content: center;
      align-items: center;
    }
`

const RadioGroup = styled.div`
    display: flex;
    gap: 1.5rem;
`

const Label = styled.label`
    display: flex;
    align-items: center;
    gap: .5rem;
    color: #2E3742;

    @font-face {
      font-family: 'Circular Std';
      src: url('./CircularStd-Medium.ttf');
    }
    font-family:'Circular Std';
`

const RadioInput = styled.input.attrs({ type: 'radio' })`
  appearance: none;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #8C9CAD;
  position: relative;

  // Add a dot to the center of the circle when the button is selected 
  &:checked::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #008B57;
  }

  /* Add a hover effect to the button */
  &:hover {
    cursor: pointer;
    border-color: #008B57;
  }
   &:checked {
    border-color: green;
  }
`;


export {RadioContainer,RadioGroup,Label,RadioInput}