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
      <Plans>
        <Plan>
          <Img src="/images/icon-arcade.svg" alt="Icone arcade" />
          <TypePlan>Arcade</TypePlan>
          <Price>R$9,00/mês</Price>
        </Plan>
        <Plan>
          <Img src="/images/icon-advanced.svg" alt="Icone advanced" />
          <TypePlan>Advanced</TypePlan>
          <Price>R$12,00/mês</Price>
        </Plan>
        <Plan>
          <Img src="/images/icon-pro.svg" alt="Icone pro" />
          <TypePlan>Pro</TypePlan>
          <Price>R$15,00/mês</Price>
        </Plan>
      </Plans>
      <button onClick={handleNextStep}>Próxima etapa</button>
    </PlanContainer>
  );
};

const PlanContainer = styled.div`
  border: 1px red solid;
  width: 25rem;
`;

const Plans = styled.div`
  display: flex;
  justify-content: center;
`;

const Plan = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 10px;
  padding: 5px;
  width: 30%;
  cursor: pointer;
  border: 1px solid hsl(231, 11%, 63%);
  border-radius: 10px;
`;

const Img = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;

const TypePlan = styled.span`
  font-weight: 500;
`;

const Price = styled.span`
  margin-top: 5px;
  font-size: 14px;
`;

export default SelectYourPlan;
