import React from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

function ModalComponent(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Paciente {props.dado.nome}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Info>
          <label>Temperatura: </label>
          <strong>{props.dado.valortemperatura}</strong>
        </Info>
        <Info>
          <label>Saturacao</label>
          <strong>{props.dado.valorsaturacao}</strong>
        </Info>
        <Info>
          <label>Cardiaca</label>
          <strong>{props.dado.valorcardiaca}</strong>
        </Info>
        <Info>
          <label>Respiração</label>
          <strong>{props.dado.valorsaturacao}</strong>
        </Info>
        <Info>
          <label>Arterial</label>
          <strong>{props.dado.valorsaturacao}</strong>
        </Info>
      </Modal.Body>
      <Modal.Footer>
        <Close_Btn onClick={props.onHide}>Close</Close_Btn>
      </Modal.Footer>
    </Modal>
  );
}
const Info = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px;
`;

const Close_Btn = styled.button`
margin:3px;
font-family: 'Roboto',sans-serif;
font-weight: 300;

border: none;
height:25px;
width:90px;

border-radius: 5px;
background-color:  #f1c40f  ;

&:hover{
  background-color:  #d4ac0d   ;
  color:#fff;
}

`;

export default ModalComponent;
