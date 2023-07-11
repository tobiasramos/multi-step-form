import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <Form>
      <h1>Informação pessoal</h1>
      <p>Por favor, forneça seu nome, email e número de telefone.</p>
      <CampInput>
        <label>Nome:</label>
        <input type="text" />
      </CampInput>
      <CampInput>
        <label>Email:</label>
        <input type="email" />
      </CampInput>
      <CampInput>
        <label>Numero de telefone:</label>
        <input type="text" />
      </CampInput>
      <button>Próxima etapa</button>
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
`;
