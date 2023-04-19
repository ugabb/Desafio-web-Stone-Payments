import React,{FC} from "react";
import { FormContainer,InputField,Input } from "../CurrencyCard/CurrencyCardStyle";
import { Calculo } from "../../App";

type Props = {
  handleFields: (newData: Calculo) => void
  calculo: Calculo
};

const CurrencyCard = ({handleFields,calculo}: Props) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const newData = {...calculo, [name]: Number(value)};
    handleFields(newData)
  }

  return (
    <FormContainer>
      <InputField>
        <label>Dólar</label>
        <Input type="number" name="qtdDolar" placeholder="$" onInput={handleInputChange} />
      </InputField>
      <InputField> 
        <label>Taxa do Estado</label> 
        <Input type="number" name="taxaEstado" placeholder="$"  onInput={handleInputChange}/>
      </InputField>
    </FormContainer>
  );
};

export default CurrencyCard;
