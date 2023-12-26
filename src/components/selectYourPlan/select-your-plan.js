import { styled } from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import NextButton from "../buttons/next-button";
import BackButton from "../buttons/back-button";

const SelectYourPlan = () => {
  const history = useHistory();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleNextStep = () => {
    if (selectedPlan) {
      history.push({
        pathname: "/pick-add-ons",
        state: { selectedPlan },
      });
    } else {
      alert("Selecione um plano");
    }
  };

  const handlePlanClick = (plan, price) => {
    setSelectedPlan({ name: plan, price: price });
  };

  const [checked, setChecked] = useState(false);

  const handleSwitchChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <PlanContainer>
      <h1>Selecione o seu plano</h1>
      <p>Você tem a opção de cobrança anual.</p>
      <Plans>
        <Plan
          onClick={() => handlePlanClick("arcade", checked ? 90 : 9)}
          selected={selectedPlan && selectedPlan.name === "arcade"}
        >
          <Img src="/images/icon-arcade.svg" alt="Icone arcade" />
          {checked ? (
            <Description>
              <TypePlan>Arcade</TypePlan>
              <Price>R$90,00/ano</Price>
              <Free>2 meses grátis</Free>
            </Description>
          ) : (
            <Description>
              <TypePlan>Arcade</TypePlan>
              <Price>R$9,00/mês</Price>
            </Description>
          )}
        </Plan>
        <Plan
          onClick={() => handlePlanClick("advanced", checked ? 120 : 12)}
          selected={selectedPlan && selectedPlan.name === "advanced"}
        >
          <Img src="/images/icon-advanced.svg" alt="Icone advanced" />
          {checked ? (
            <Description>
              <TypePlan>Advanced</TypePlan>
              <Price>R$120,00/ano</Price>
              <Free>2 meses grátis</Free>
            </Description>
          ) : (
            <Description>
              <TypePlan>Advanced</TypePlan>
              <Price>R$12,00/mês</Price>
            </Description>
          )}
        </Plan>
        <Plan
          onClick={() => handlePlanClick("pro", checked ? 150 : 15)}
          selected={selectedPlan && selectedPlan.name === "pro"}
        >
          <Img src="/images/icon-pro.svg" alt="Icone pro" />
          {checked ? (
            <Description>
              <TypePlan>Pro</TypePlan>
              <Price>R$150,00/ano</Price>
              <Free>2 meses grátis</Free>
            </Description>
          ) : (
            <Description>
              <TypePlan>Pro</TypePlan>
              <Price>R$15,00/mês</Price>
            </Description>
          )}
        </Plan>
      </Plans>
      <SwitchContainer>
        <span className={checked ? "inactive" : "active"}>Mensal</span>
        <Switch>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleSwitchChange}
          />
          <span></span>
        </Switch>
        <span className={checked ? "active" : "inactive"}>Anual</span>
      </SwitchContainer>
      <Btns>
        <BackButton to="/" />
        <NextButton onClick={handleNextStep} />
      </Btns>
    </PlanContainer>
  );
};

const PlanContainer = styled.div`
  width: 25rem;
  padding: 10px;

  @media (max-width: 540px) {
    width: 100%;
    height: 50%;;
    text-align: center;
  }
`;

const Plans = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
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

  ${(props) =>
    props.selected &&
    `
    border-color: blue;
  `}

  @media (max-width: 540px) {
    margin-top: 10px;
  }
`;

const Img = styled.img`
  width: 50px;
  margin-bottom: 30px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypePlan = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

const Price = styled.span`
  margin-top: 5px;
  font-size: 16px;
`;

const Free = styled.span`
  font-size: 14px;
  color: hsl(243, 100%, 62%);
`;

const SwitchContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span.active {
    color: hsl(213, 96%, 18%);
  }

  span.inactive {
    color: hsl(231, 11%, 63%);
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  span {
    position: absolute;
    cursor: pointer;
    border-radius: 34px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(213, 96%, 18%);
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  span:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + span {
    background-color: hsl(213, 96%, 18%);
  }

  input:focus + span {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + span:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;

const Btns = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 540px) {
    width: 20rem;
    margin: 10px auto;
  }
`;

export default SelectYourPlan;
