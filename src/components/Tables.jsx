import React from "react";
import styled from "styled-components";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useDispatch } from "react-redux";
import { addAcompanha } from "../store/action/acompanhaAction";
const TableComponent = (dados) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h3 className="titulo_all">Todos os Pacientes</h3>
      <TableContainer componet={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead >
            <TableRow className="cabecalho_all">
              <TableCell align="right">id</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Estado</TableCell>
              <TableCell align="right">Pontuação</TableCell>
              <TableCell align="right">Temperatura</TableCell>
              <TableCell align="right">Saturação</TableCell>
              <TableCell align="right">Cardíaca</TableCell>
              <TableCell align="right">Respiração</TableCell>
              <TableCell align="right">Arterial</TableCell>
              <TableCell align="right">Acompanhar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="body_all">
            {dados.dados.map((row) => (
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
                <TableCell align="right">{row.valortemperatura}</TableCell>
                <TableCell align="right">{row.valorsaturacao}</TableCell>
                <TableCell align="right">{row.valorcardiaca}</TableCell>
                <TableCell align="right">{row.valorrespiracao}</TableCell>
                <TableCell align="right">{row.valorarterial}</TableCell>
                <TableCell align="right">
                  <Btn onClick={() => dispatch(addAcompanha(row))}>
                    Acompanhar
                  </Btn>
                </TableCell>
              </TableRow>
            ))}
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

  .titulo_all {
    font-family: "Poppins", sans-serif;
    font-size: 25px;
    font-weight: 600;
  }

  .cabecalho_all {
    background-color: #fff;
    > th {
      font-family: "Poppins", sans-serif;
      font-weight: 600;
    }
  }

  .body_all {
    background-color: #fff;
  }
`;

const Btn = styled.button`
  margin:3px;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;

  border: none;
  height:25px;
  width:90px;

  border-radius: 5px;
  background-color:   #73c6b6  ;

  &:hover{
    background-color: #1abc9c ;
    color:#fff;
  }
`
export default TableComponent;
