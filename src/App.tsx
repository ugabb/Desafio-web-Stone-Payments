import { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";

// Components
import Navbar from "./components/Navbar/Navbar";
import CurrencyCard from "./components/CurrencyCard/CurrencyCard";
import RadioBlock from "./components/RadioBlock/RadioBlock";
import Button from "./components/ButtonConverter";
import { useCurrencyData } from "./hooks/useCurrencyData";
import Result from "./components/Result/Result";
import Wave from "./components/Wave/Wave";

export interface Calculo {
  qtdDolar: number;
  taxaEstado: number;
  type: string;
}

function App() {
  const { data } = useCurrencyData();

  const [calculo, setCalculo] = useState<Calculo>({
    qtdDolar: 0,
    taxaEstado: 0,
    type: "undefined",
  });
  const [showResult, setShowResult] = useState<boolean>(false);

  const [resultado, setResultado] = useState(0);

  const handleFields = (newData: Calculo) => {
    setCalculo(newData);
  };

  const atualDolar: number = Number(data?.bid);

  function converter(): number {
    let convertido: number = 0;

    // Se dinheiro está selecionado e foi recebido valores do usuario
    if (calculo.type == "dinheiro" && calculo.qtdDolar && calculo.taxaEstado) {
      convertido =
        (calculo.qtdDolar + calculo.taxaEstado) * (atualDolar + 0.011);
    }

    // Se cartão está selecionado e foi recebido valores do usuario
    if (calculo.type == "cartao" && calculo.qtdDolar && calculo.taxaEstado) {
      convertido =
        (calculo.qtdDolar + calculo.taxaEstado) * (atualDolar + 0.064);
    }

    // 2 casas depois da vírugula e converte para number
    const resultado = Number(convertido.toFixed(2));
    console.log(`Total: ${resultado}`);
    // mostrar o component de resultado
    toggleShowResult();

    // atualiza o resultado do calculo
    setResultado(resultado);
    return resultado;
  }

  const toggleShowResult = () => {
    return setShowResult(!showResult);
  };

  return (
    <div className="container">
      <Navbar />
      {showResult == false && (
        <>
          <CurrencyCard handleFields={handleFields} calculo={calculo} />
          <RadioBlock handleFields={handleFields} calculo={calculo} />
          <Button
            icon={RiArrowLeftRightLine}
            text="Converter"
            isActive={
              calculo.qtdDolar &&
              calculo.taxaEstado &&
              calculo.type != undefined
                ? true
                : false
            }
            converter={converter}
          />
        </>
      )}

      {showResult && (
        <Result
          cotacaoDolar={atualDolar}
          taxa={calculo.taxaEstado}
          toggleShowResult={toggleShowResult}
          result={resultado}
        />
      )}

      <Wave />
    </div>
  );
}

export default App;
