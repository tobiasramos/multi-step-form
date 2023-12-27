import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import NextButton from "../buttons/next-button";
import { validateEmail, validatePhoneNumber } from "./validations";

const PersonalInfo = () => {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errorInputs, setErrorInputs] = useState({
    nameError: "",
    emailError: "",
    phoneNumberError: "",
  });

  const handleNextStep = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(inputs.email);
    const isPhoneNumberValid = validatePhoneNumber(inputs.phoneNumber);

    let newErrors = {};

    if (!inputs.name) {
      newErrors = {
        ...newErrors,
        nameError: "Por favor, preencha o nome.",
      };
    }

    if (!isEmailValid) {
      newErrors = {
        ...newErrors,
        emailError: "Por favor, insira um email válido.",
      };
    }

    if (!isPhoneNumberValid) {
      newErrors = {
        ...newErrors,
        phoneNumberError: "Por favor, insira um número de telefone válido.",
      };
    }

    setErrorInputs({
      ...errorInputs,
      ...newErrors,
    });

    if (inputs.name && isEmailValid && isPhoneNumberValid) {
      history.push("/select-your-plan");
    }
  };

  const handleInputChange = (e, inputType) => {
    const { value } = e.target;

    setInputs({
      ...inputs,
      [inputType]: value,
    });

    setErrorInputs({
      ...errorInputs,
      [`${inputType}Error`]: "",
    });
  };

  return (
    <Form onSubmit={handleNextStep}>
      <Title>Informação pessoal</Title>
      <SubTitle>
        Por favor, forneça seu nome, email e número de telefone.
      </SubTitle>
      <CampInput>
        <Label>Nome:</Label>
        <Input
          type="text"
          placeholder="ex: Tobias"
          value={inputs.name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        {errorInputs.nameError ? (
          <ErrorMessage>{errorInputs.nameError}</ErrorMessage>
        ) : (
          ""
        )}
      </CampInput>
      <CampInput>
        <Label>Email:</Label>
        <Input
          type="email"
          placeholder="ex: tobias@gmail.com"
          value={inputs.email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {errorInputs.emailError ? (
          <ErrorMessage>{errorInputs.emailError}</ErrorMessage>
        ) : (
          ""
        )}
      </CampInput>
      <CampInput>
        <Label>Numero de telefone:</Label>
        <Input
          type="text"
          placeholder="ex: (99)999999999"
          minLength={11}
          maxLength={11}
          value={inputs.phoneNumber}
          onChange={(e) => handleInputChange(e, "phoneNumber")}
        />
        {errorInputs.phoneNumberError ? (
          <ErrorMessage>{errorInputs.phoneNumberError}</ErrorMessage>
        ) : (
          ""
        )}
      </CampInput>
      <NextButton onClick={handleNextStep} />
    </Form>
  );
};

const Form = styled.form`
  width: 25rem;
  padding: 5px;

  @media (max-width: 540px) {
    width: 90%;
  }
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
  width: 80%;
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
