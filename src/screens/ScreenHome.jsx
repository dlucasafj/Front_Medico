import React, { useEffect, useState } from "react";
import * as C from './screenHome'
import { api } from "../api/api";
import TableComponent from "../components/Tables";
import TableDanger from "../components/TableDanger";
const ScreenHome = () => {
  const [dados, setDados] = useState([]);

  // requisição dos dados da API
  const chamada = () => {
    api
      .get("/paciente")
      .then((response) => {
        setDados(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // console.log(dados)

  useEffect(()=>{
    setInterval(()=>{
      chamada();
    },15000)
  },[])

  return (
    <C.Container>
      <TableComponent dados={dados}/>
      <TableDanger />
    </C.Container>
  );
};

export default ScreenHome;
