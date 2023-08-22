import { styled } from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import NextButton from "../buttons/next-button";
import BackButton from "../buttons/back-button";

const PickAddOns = () => {
  const location = useLocation();
  const selectedPlan = location.state?.selectedPlan || null;

  const history = useHistory();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleNextStep = () => {
    if (selectedOptions.length > 0) {
      const totalAddonPrice = selectedOptions.reduce(
        (total, option) => total + option.price,
        0
      );
      const totalPrice = selectedPlan.price + totalAddonPrice;

      history.push({
        pathname: "/finishing-up",
        state: { selectedPlan, selectedOptions, totalPrice },
      });
    } else {
      alert("Selecione pelo menos uma opção");
    }
  };

  const handleOptionToggle = (option, price) => {
    const existingOption = selectedOptions.find((item) => item.name === option);
    if (existingOption) {
      setSelectedOptions(
        selectedOptions.filter((item) => item.name !== option)
      );
    } else {
      setSelectedOptions([...selectedOptions, { name: option, price }]);
    }
  };

  return (
    <AddOnsContainer>
      <h1>Escolher complemento</h1>
      <p>Complementos ajudam a aprimorar sua experiência de jogo.</p>

      <TypeAddOns>
        <AddOns>
          <input
            type="checkbox"
            onChange={() => handleOptionToggle("onlineService", 1)}
          />
          <Div>
            <span>Serviço on-line</span>
            <span>Acesso a jogos multiplayer</span>
          </Div>
          <Price>+R$1,00/mês</Price>
        </AddOns>

        <AddOns>
          <input
            type="checkbox"
            onChange={() => handleOptionToggle("extraStorage", 2)}
          />
          <Div>
            <span>Armazenamento maiore</span>
            <span>1 TB extra de armazenamento na nuvem</span>
          </Div>
          <Price>+R$2,00/mês</Price>
        </AddOns>

        <AddOns>
          <input
            type="checkbox"
            onChange={() => handleOptionToggle("customProfile", 2)}
          />
          <Div>
            <span>Perfil personalizável</span>
            <span>Tema personalizado em seu perfil</span>
          </Div>
          <Price>+R$2,00/mês</Price>
        </AddOns>
      </TypeAddOns>
      <Btns>
        <BackButton to="/select-your-plan" />
        <NextButton onClick={handleNextStep} />
      </Btns>
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

const Btns = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default PickAddOns;
