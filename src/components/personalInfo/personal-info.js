import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const PersonalInfo = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleNextStep = () => {
    if (name && email && number) {
      history.push("/select-your-plan");
    } else {
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!number) setNumberError(true);
    }
  };

  const handleInputChange = (e, inputType) => {
    if (inputType === "name") {
      setName(e.target.value);
      setNameError(false);
    } else if (inputType === "email") {
      setEmail(e.target.value);
      setEmailError(false);
    } else if (inputType === "number") {
      setNumber(e.target.value);
      setNumberError(false);
    }
  };

  return (
    <Form onSubmit={handleNextStep}>
      <h1>Informação pessoal</h1>
      <p>Por favor, forneça seu nome, email e número de telefone.</p>
      <CampInput error={nameError}>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        />
         {nameError && <ErrorMessage>Por favor, preencha o nome.</ErrorMessage>}
      </CampInput>
      <CampInput error={nameError}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {emailError && <ErrorMessage>Por favor, preencha o email.</ErrorMessage>}
      </CampInput>
      <CampInput error={nameError}>
        <label>Numero de telefone:</label>
        <input
          type="text"
          value={number}
          onChange={(e) => handleInputChange(e, "number")}
        />
         {numberError && <ErrorMessage>Por favor, preencha o número de telefone.</ErrorMessage>}
      </CampInput>
      <button type="submit">Próxima etapa</button>
    </Form>
  );
};

export default PersonalInfo;

const Form = styled.form`
  margin-left: 30px;
`;

const CampInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  input {
    border: 1px solid ${props => props.error ? 'red' : 'gray'};
  }
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;