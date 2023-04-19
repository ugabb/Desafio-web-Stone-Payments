import { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";

import axios from "axios";

// Components
import Navbar from "./components/Navbar/Navbar";
import CurrencyCard from "./components/CurrencyCard/CurrencyCard";
import RadioBlock from "./components/RadioBlock/RadioBlock";
import Button from "./components/Button";
import { useCurrencyData } from "./hooks/useCurrencyData";

export interface Calculo {
  qtdDolar: number | undefined;
  taxaEstado: number | undefined;
  type: string | undefined;
}

function App() {
  const { data } = useCurrencyData();

  const [calculo, setCalculo] = useState<Calculo>({
    qtdDolar: undefined,
    taxaEstado: undefined,
    type: undefined,
  });

  const handleFields = (newData: Calculo) => {
    setCalculo(newData);
  };

  function converter(): number | string {
    console.log(calculo.taxaEstado,calculo.qtdDolar)
    let convertido;
    if (calculo.type == "dinheiro" && calculo.qtdDolar && calculo.taxaEstado) {
      convertido =
        (calculo.qtdDolar + (calculo.taxaEstado)) * (calculo.qtdDolar + 0.011);
    }

    if (calculo.type == "cartao" && calculo.qtdDolar && calculo.taxaEstado) {
      convertido =
        (calculo.qtdDolar + calculo.taxaEstado) * (calculo.qtdDolar + 0.064);
    }

    console.log(`Total: ${convertido}`)
    return `Total: ${convertido}`;
  }

  return (
    <div className="container">
      <Navbar />
      <CurrencyCard handleFields={handleFields} calculo={calculo} />
      <RadioBlock handleFields={handleFields} calculo={calculo} />
      <Button
        icon={RiArrowLeftRightLine}
        text="Converter"
        isActive={
          calculo.qtdDolar && calculo.taxaEstado && calculo.type != undefined
            ? true
            : false
        }
        converter={converter}
      />
    </div>
  );
}

export default App;
