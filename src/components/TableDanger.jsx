import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { api } from "../api/api";
import ModalComponent from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { removeAcompanha } from "../store/action/acompanhaAction";
const TableDanger = () => {
  const [modalShow, setModalShow] = useState(false);
  const [paci, setPaci] = useState({});
  const dispatch = useDispatch();
  let d = [];
  const [ac, setAc] = useState([]);

  const paciente_acompanhado = useSelector((state) => state.arr);

  const remove = (row) => {
    const indice = paciente_acompanhado.indexOf(row);
    paciente_acompanhado.splice(indice, 1);
    let index_novo = [...paciente_acompanhado];
    setAc(paciente_acompanhado);

    dispatch(removeAcompanha(index_novo));
  };
  const handle = (row) => {
    let valor;
    api
      .get(`/paciente?id=${row.id}`)
      .then((response) => {
        valor = response.data;
        valor.map((dado) => setPaci(dado));
      })
      .catch((err) => {
        console.log(err.message);
      });

    setModalShow(true);
  };

  // console.log(ac);
  // useEffect(()=>{

  // },[ac])
  return (
    <Container>
      <h3 className="titulo_danger">Pacientes em Acompanhamento</h3>
      <TableContainer componet={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className="cabecalho_danger">
              <TableCell>id</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Pontuação</TableCell>
              {/* <TableCell align="right">Temperatura</TableCell>
              <TableCell align="right">Saturação</TableCell>
              <TableCell align="right">Cardíaca</TableCell>
              <TableCell align="right">Respiração</TableCell>
              <TableCell align="right">Arterial</TableCell> */}
              <TableCell align="center">Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="body_danger">
            {paciente_acompanhado.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.nome}</TableCell>
                <TableCell align="right">{row.estado}</TableCell>
                <TableCell align="right">{row.pontuacao}</TableCell>
                {/* <TableCell align="right">{row.valortemperatura}</TableCell>
                <TableCell align="right">{row.valorsaturacao}</TableCell>
                <TableCell align="right">{row.valorcardiaca}</TableCell>
                <TableCell align="right">{row.valorrespiracao}</TableCell>
                <TableCell align="right">{row.valorarterial}</TableCell> */}
                <TableCell
                  align="right

"
                >
                  <Btn>
                    <button
                      className="verificar_btn"
                      variant="primary"
                      onClick={() => handle(row)}
                    >
                      Verificar
                    </button>
                    <button onClick={() => remove(row)} className="remove_btn">
                      Remover
                    </button>
                  </Btn>
                </TableCell>
              </TableRow>
            ))}
            <ModalComponent
              show={modalShow}
              onHide={() => setModalShow(false)}
              dado={paci}
            />
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 49%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 8px 5px 5px #e5e7e9;
  padding: 10px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e5e7e9;

  .titulo_danger {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 25px;
  }
  .cabecalho_danger {
    background-color: #fff;
    > th {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
  }

  .body_danger {
    background-color: #fff;
  }
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;

  .verificar_btn {
    margin: 3px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    border: none;
    height: 25px;
    width: 90px;

    border-radius: 5px;
    background-color: #58d68d;
  }
  .verificar_btn:hover {
    background-color: #28b463;
    color: #fff;
    cursor: pointer;
  }

  .remove_btn {
    margin: 3px;
    font-family: "Roboto", sans-serif;
    font-weight: 300;

    border: none;
    height: 25px;
    width: 90px;

    border-radius: 5px;
    background-color: #cd6155;
  }

  .remove_btn:hover {
    background-color: #c0392b;
    color: #fff;
  }
`;

export default TableDanger;
