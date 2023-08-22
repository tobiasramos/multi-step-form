import { styled } from "styled-components";

const ThankYou = () => {
  return (
    <Container>
      <img src="/images/icon-thank-you.svg" alt="Icone" />
      <h1> Obrigado!</h1>
      <p>
        Obrigado por confirmar sua inscrição! Esperamos que você se divirta
        usando nossa plataforma. Se você precisar de suporte, sinta-se à vontade
        para nos enviar um e-mail em support@loremgaming.com.
      </p>
    </Container>
  );
};

const Container = styled.div`
  width: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: auto auto;

  p {
    padding: 5px;
    font-size: 18px;
  }
`;

export default ThankYou;
