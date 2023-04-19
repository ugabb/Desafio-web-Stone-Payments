import React from "react";

import { Nav, ApiInfo, Divider } from "../Navbar/NavbarStyle";
import StoneLogo from "../StoneLogo";

type Props = {};


const Navbar = (props: Props) => {
  // Pegando dados atuais de data e horario
  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
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
