import { styled } from "styled-components";
import { useHistory } from "react-router-dom";

const PickAddOns = () => {
  const history = useHistory();

  const handleNextStep = () => {
    history.push("/finishing-up");
  };

  return (
    <AddOnsContainer>
      <h1>Escolher complemento</h1>
      <p>Complementos ajudam a aprimorar sua experiência de jogo.</p>

      <TypeAddOns>
        <AddOns>
          <input type="checkbox" />
          <Div>
            <span>Serviço on-line</span>
            <span>Acesso a jogos multiplayer</span>
          </Div>
          <Price>+R$1,00/mês</Price>
        </AddOns>

        <AddOns>
          <input type="checkbox" />
          <Div>
            <span>Armazenamento maiore</span>
            <span>1 TB extra de armazenamento na nuvem</span>
          </Div>
          <Price>+R$2,00/mês</Price>
        </AddOns>

        <AddOns>
          <input type="checkbox" />
          <Div>
            <span>Perfil personalizável</span>
            <span>Tema personalizado em seu perfil</span>
          </Div>
          <Price>+R$2,00/mês</Price>
        </AddOns>
      </TypeAddOns>
      <button onClick={handleNextStep}>Próxima etapa</button>
    </AddOnsContainer>
  );
};

const AddOnsContainer = styled.div`
  font-size: 14px;
`;

const TypeAddOns = styled.div``;

const AddOns = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid hsl(231, 11%, 63%);
  height: 50px;
  padding: 5px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
`;

const Price = styled.span`
  display: flex;
  right: 22px;
`;

export default PickAddOns;
