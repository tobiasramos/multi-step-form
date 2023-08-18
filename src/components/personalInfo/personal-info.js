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

  const handleNextStep = (e) => {
    e.preventDefault();

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
      <Title>Informação pessoal</Title>
      <SubTitle>
        Por favor, forneça seu nome, email e número de telefone.
      </SubTitle>
      <CampInput error={nameError}>
        <Label>Nome:</Label>
        <Input
          type="text"
          placeholder="ex: Tobias"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        {nameError && <ErrorMessage>Por favor, preencha o nome.</ErrorMessage>}
      </CampInput>
      <CampInput error={emailError}>
        <Label>Email:</Label>
        <Input
          type="email"
          placeholder="ex: tobias@gmail.com"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {emailError && (
          <ErrorMessage>Por favor, preencha o email.</ErrorMessage>
        )}
      </CampInput>
      <CampInput error={numberError}>
        <Label>Numero de telefone:</Label>
        <Input
          type="text"
          placeholder="ex: (99)999999999"
          minLength={11}
          maxLength={11}
          value={number}
          onChange={(e) => handleInputChange(e, "number")}
        />
         {numberError && (
          <ErrorMessage>
            Por favor, preencha o número de telefone.
          </ErrorMessage>
        )}
      </CampInput>
      <button type="submit">Próxima etapa</button>
    </Form>
  );
};

const Form = styled.form`
  width: 25rem;
  padding: 5px;
`;

const Title = styled.h1`
  font-weight: 700;
`;

const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const CampInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  Input {
    border: 1px solid
      ${(props) => (props.error ? "hsl(354, 84%, 57%)" : "gray")};
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 85%;
  height: 25px;
  padding: 5px;
  border-radius: 10px;
`;

const ErrorMessage = styled.span`
  margin-top: 3px;
  font-size: 14px;
  font-weight: 700;
  color: hsl(354, 84%, 57%);
`;

export default PersonalInfo;
