import { styled } from "styled-components";

const SelectYourPlan = () => {
  return (
    <div>
      <h1>Selecione o seu plano</h1>
      <PlanContainer>
        <Plan></Plan>
        <Plan></Plan>
        <Plan></Plan>
      </PlanContainer>
    </div>
  );
};

const PlanContainer = styled.div`
display: flex:
`;

const Plan = styled.div``;

export default SelectYourPlan;
