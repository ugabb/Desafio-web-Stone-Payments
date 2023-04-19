import { useState, useEffect } from "react";
import { RiArrowLeftRightLine } from "react-icons/ri";

import converter from "./Converter";

// Components
import Navbar from "./components/Navbar/Navbar";
import CurrencyCard from "./components/CurrencyCard/CurrencyCard";
import RadioBlock from "./components/RadioBlock/RadioBlock";
import Button from "./components/Button";

export interface Calculo {
  qtdDolar: number | undefined;
  taxaEstado: number | undefined;
  type: boolean | undefined;
}

function App() {
  const [calculo, setCalculo] = useState<Calculo>({
    qtdDolar: undefined,
    taxaEstado: undefined,
    type: undefined,
  });

  const handleFields = (newData: Calculo) => {
    setCalculo(newData);
  };

  useEffect(() => {
    console.log(calculo);
  }, [calculo]);

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
