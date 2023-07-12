import { styled } from "styled-components";
import { useHistory } from "react-router-dom";

const SelectYourPlan = () => {
  const history = useHistory();

  const handleNextStep = () => {
    history.push("/pick-add-ons");
  };
  return (
    <PlanContainer>
      <h1>Selecione o seu plano</h1>
      <p>Você tem a opção de cobrança anual.</p>
      <div>
        <Plan>
          <Img src="/images/icon-arcade.svg" alt="Icone arcade" />
          <spn>Arcade</spn>
          <span>$9/mo</span>
        </Plan>
        <Plan>
          <Img src="/images/icon-advanced.svg" alt="Icone advanced" />
          <spn>Advanced</spn>
          <span>$12/mo</span>
        </Plan>
        <Plan>
          <Img src="/images/icon-pro.svg" alt="Icone pro" />
          <span>Pro</span>
          <span>$15/mo</span>
        </Plan>
      </div>
      <button onClick={handleNextStep}>Próxima etapa</button>
    </PlanContainer>
  );
};

const PlanContainer = styled.div``;

const Plan = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(231, 11%, 63%);
`;

const Img = styled.img`
  width: 50px;
`;

export default SelectYourPlan;
