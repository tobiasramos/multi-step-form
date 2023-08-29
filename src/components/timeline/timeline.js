import { NavLink, useLocation } from "react-router-dom";
import styled, { StyleSheetManager } from "styled-components";

const Timeline = () => {
  const timelineSteps = [
    { path: "/", label: "Informações pessoais" },
    { path: "/select-your-plan", label: "Selecionar um plano" },
    { path: "/pick-add-ons", label: "Escolher complemento" },
    { path: "/finishing-up", label: "Terminando" },
  ];

  const location = useLocation();

  const handleClick = (event, isActive) => {
    if (!isActive) {
      event.preventDefault();
    }
  };

  return (
    <TimelineContainer>
      {timelineSteps.map((step, index) => (
        <TimelineStep key={index} isActive={location.pathname === step.path}>
          <NavLink
            to={step.path}
            activeClassName="active"
            onClick={(event) =>
              handleClick(event, location.pathname === step.path)
            }
          >
            <StepNumber isActive={location.pathname === step.path}>
              {index + 1}
            </StepNumber>
            {step.label}
          </NavLink>
        </TimelineStep>
      ))}
    </TimelineContainer>
  );
};

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  padding: 10px;
`;

const TimelineStep = styled.div`
  width: 15rem;
  flex: 1;
  text-align: center;
  margin: 6px;

  a {
    cursor: auto;
    color: #333;
    text-decoration: none;
    display: flex; /* Align items horizontally */
    align-items: center; /* Vertically center items */
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ isActive }) => (isActive ? "#007bff" : "#f5f5f5")};
    color: ${({ isActive }) => (isActive ? "white" : "#333")};
  }
`;

const StepNumber = styled.span`
  margin-right: 8px;
  font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
`;

function App() {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "isActive"}>
      <Timeline />
    </StyleSheetManager>
  );
}

export default App;
