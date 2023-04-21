import React from "react";

import { Nav, ApiInfo, Divider } from "../Navbar/NavbarStyle";
import StoneLogo from "../StoneLogo";

type Props = {};

interface MyDateTimeFormatOptions extends Intl.DateTimeFormatOptions {

  // * Formata o ano como "numeric" ou "2-digit".
  year?: 'numeric' | '2-digit';
  
  // * Formata o mês como "numeric", "2-digit", "narrow", "short" ou "long".
  month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long';
  
  // * Formata o dia como "numeric" ou "2-digit".
  day?: 'numeric' | '2-digit';

  // * Formata a hora como "numeric" ou "2-digit".
  hour?: 'numeric' | '2-digit';
  
  // * Formata os minutos como "numeric" ou "2-digit".
  minute?: 'numeric' | '2-digit';
  
  // * Formata os segundos como "numeric" ou "2-digit".
  second?: 'numeric' | '2-digit';
  
  // * Formata o nome do fuso horário como "short" ou "long".
  timeZoneName?: 'short' | 'long';
}


const Navbar = (props: Props) => {
  // Pegando dados atuais de data e horario
  const today = new Date();
  const options: MyDateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const formatDate = today.toLocaleDateString("pt-BR", options).replace(' de ', ' ');
  const hour = today.getHours() 
  const minutes = today.getMinutes() 

  return (
    <Nav>
      <StoneLogo />
      <div>
        <ApiInfo>
          <p>{formatDate}</p>
          <Divider></Divider>
          <p>{hour}:{minutes} UTC</p>
        </ApiInfo>
        <p style={{ color: "#8C9CAD" }}>
          Dados de câmbio disponibilizados pela Morningstar
        </p>
      </div>
    </Nav>
  );
};

export default Navbar;
