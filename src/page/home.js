import PersonalInfo from "../components/personalInfo/personal-info";
import styled from "styled-components";

const Home = () => {
  return (
    <DivConainer>
      <img src="/images/bg-sidebar-desktop.svg" alt="Fundo" />
      <PersonalInfo />
    </DivConainer>
  );
};

export default Home;

const DivConainer = styled.div`
  width: 80%;
  margin: auto auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;
