import { styled } from "styled-components";
import PropTypes from "prop-types";

const NextButton = ({ onClick }) => {
  return <Button onClick={onClick}>Próxima etapa</Button>;
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const Button = styled.button`
  padding: 5px;
  height: 8vh;
  border: none;
  cursor: pointer;
  color: #fff;
  background-color: hsl(243, 100%, 62%);
  border-radius: 10px;
}`;

export default NextButton;
