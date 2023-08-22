import { styled } from "styled-components";
import BackButton from "../buttons/back-button";
import NextButton from "../buttons/next-button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const FinishingUp = ({ location }) => {
  const history = useHistory();
  const selectedPlan = location.state?.selectedPlan || null;
  const selectedOptions = location.state?.selectedOptions || [];

  const handleNextStep = () => {
    history.push({
      pathname: "/thank-you",
    });
  };

  return (
    <div>
      <h1>Terminando</h1>
      <p>Verifique se tudo está OK antes de confirmar</p>
      {selectedPlan && (
        <div>
          <p>Plano Selecionado: {selectedPlan.name}</p>
          <p>Valor do Plano: R$ {selectedPlan.price.toFixed(2)}</p>
        </div>
      )}
      <p>Complementos Selecionados:</p>
      <ul>
        {selectedOptions.map((option) => (
          <li key={option.name}>
            {option.name} - R$ {option.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <Btns>
        <BackButton to="/pick-add-ons" />
        <NextButton onClick={handleNextStep} />
      </Btns>
    </div>
  );
};

const Btns = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default FinishingUp;
