import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BackButton = ({ to }) => {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Link to={to} style={linkStyles}>
      Voltar
    </Link>
  );
};

export default BackButton;
