import React from "react";
import styled from "styled-components";
import { IconType } from "react-icons";

interface ButtonProps {
  icon: IconType;
  text: string;
  isActive: boolean;
  converter: () => number;
}

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 1px solid #008b57;
  border-radius: 8px;
  padding: 10px 12px;
  margin: 0 1.5rem;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

const Button = ({ icon: Icon, text, isActive, converter }: ButtonProps) => {
  return (
    <ButtonStyled
      style={{ background: isActive ? "#00AB63": "#8C9CAD" }}
      onClick={converter}
      disabled={isActive ? false : true}
    >
      <Icon size={24} />
      <p>{text}</p>
    </ButtonStyled>
  );
};

export default Button;
