import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Timeline = () => {
  const timelineSteps = [
    { path: "/", label: "Informações pessoais" },
    { path: "/select-your-plan", label: "Selecionar um plano" },
    { path: "/pick-add-ons", label: "Escolher complemento" },
    { path: "/finishing-up", label: "Terminando" },
  ];

  const location = useLocation();

  return (
    <TimelineContainer>
      {timelineSteps.map((step, index) => (
        <TimelineStep key={index} isActive={location.pathname === step.path}>
          <NavLink to={step.path} activeClassName="active">
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
    color: #333;
    text-decoration: none;
    display: block;
    padding: 5px;
    border-radius: 5px;
    background-color: ${({ isActive }) => (isActive ? "#007bff" : "#f5f5f5")};
    color: ${({ isActive }) => (isActive ? "white" : "#333")};
  }
`;

export default Timeline;
