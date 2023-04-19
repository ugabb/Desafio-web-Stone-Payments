import { AiOutlineArrowLeft } from "react-icons/ai";

import { ResultContainer, ButtonVoltar, Value } from "./ResultStyle";

type Props = {
  result: number;
  toggleShowResult: () => void;
  taxa: number;
  cotacaoDolar: number;
};

const Result = ({ result, toggleShowResult, taxa, cotacaoDolar }: Props) => {
  return (
    <ResultContainer>
      <ButtonVoltar onClick={toggleShowResult}>
        <AiOutlineArrowLeft size={24} />
        <p>Voltar</p>
      </ButtonVoltar>
      <p style={{ fontSize: "20px", fontWeight: 500 }}>
        O resultado do cálculo é
      </p>
      <Value>R$ {result}</Value>

      <p>Compra no dinheiro e taxa de {taxa}%</p>
      <p>Cotação do dólar: 1,00 = R$ {cotacaoDolar.toFixed(2)}</p>
    </ResultContainer>
  );
};

export default Result;
