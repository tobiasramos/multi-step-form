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

      <AddOns>
        <div>
          <input type="checkbox" />
          <span>Serviço on-line</span>
          <span>Acesso a jogos multiplayer</span>
        </div>
      </AddOns>

      <AddOns>
        <div>
          <input type="checkbox" />
          <span>Armazenamento maiore</span>
          <span>1 TB extra de armazenamento na nuvem</span>
        </div>
      </AddOns>

      <AddOns>
        <div>
          <input type="checkbox" />
          <span>Perfil personalizável</span>
          <span>Tema personalizado em seu perfil</span>
        </div>
      </AddOns>
      <button onClick={handleNextStep}>Próxima etapa</button>
    </AddOnsContainer>
  );
};

const AddOnsContainer = styled.div``;

const AddOns = styled.div`
  display: flex;
  border: 1px solid hsl(231, 11%, 63%);
`;

export default PickAddOns;
