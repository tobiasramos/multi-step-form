import { Link } from 'react-router-dom';

const FinishingUp = ({ location }) => {
  const selectedPlan = location.state?.selectedPlan || null;
  const selectedOptions = location.state?.selectedOptions || [];

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
      <Link to="/pick-add-ons">Voltar</Link>
    </div>
  );
};

export default FinishingUp;
