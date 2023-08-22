import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PersonalInfo from "../components/personalInfo/personal-info";
import SelectYourPlan from "../components/selectYourPlan/select-your-plan";
import PickAddOns from "../components/pickAddOns/pick-add-ons";
import FinishingUp from "../components/finishingUp/finishing-up";
import Timeline from "../components/timeline/timeline";

const Home = () => {
  return (
    <Router>
      <DivContainer>
        <ImgContainer>
          <img src="/images/bg-sidebar-desktop.svg" alt="Fundo" />
          <TimelineContainer>
            <Timeline />
          </TimelineContainer>
        </ImgContainer>
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

const DivContainer = styled.div`
  width: 80%;
  margin: auto auto;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;

const ImgContainer = styled.div`
  position: relative;
  margin-right: 35px;
`;

const TimelineContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

export default Home;