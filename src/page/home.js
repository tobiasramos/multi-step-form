import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PersonalInfo from "../components/personalInfo/personal-info";
import SelectYourPlan from "../components/selectYourPlan/select-your-plan";
import PickAddOns from "../components/pickAddOns/pick-add-ons";
import FinishingUp from "../components/finishingUp/finishing-up";

const Home = () => {
  return (
    <Router>
      <DivContainer>
        <img src="/images/bg-sidebar-desktop.svg" alt="Fundo" />
        <Switch>
          <Route path="/" exact component={PersonalInfo} />
          <Route path="/select-your-plan" component={SelectYourPlan} />
          <Route path="/pick-add-ons" component={PickAddOns} />
          <Route path="/finishing-up" component={FinishingUp} />
        </Switch>
      </DivContainer>
    </Router>
  );
};

export default Home;

const DivContainer = styled.div`
  width: 80%;
  margin: auto auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);

  img {
    margin-right: 20px;
  }
`;
