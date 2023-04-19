import React from "react";

import { Calculo } from "../../App";

import {
  RadioContainer,
  RadioGroup,
  Label,
  RadioInput,
} from "./RadioBlockStyle";

type Props = {
  handleFields: (newData: Calculo) => void;
  calculo: Calculo;
};

interface RadioOption {
  label: string;
  value: string;
}

const options: RadioOption[] = [
  { label: "Dinheiro", value: 'Dinheiro' },
  { label: "Cartão", value: 'Cartao' },
];

const RadioBlock = ({handleFields,calculo}: Props) => {

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const newData = {...calculo, [name]:value}
    handleFields(newData);
  }

  return (
    <RadioContainer>
      <h3>Tipo de compra</h3>
      <RadioGroup>
        {options.map((option) => (
          <Label key={option.label}>
            <RadioInput type="radio" name="type" value={option.value} onChange={handleRadio} />
            {option.label}
          </Label>
        ))}
      </RadioGroup>
    </RadioContainer>
  );
};

export default RadioBlock;
