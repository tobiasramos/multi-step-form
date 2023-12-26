import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import PersonalInfo from "../components/personalInfo/personal-info";
import SelectYourPlan from "../components/selectYourPlan/select-your-plan";
import PickAddOns from "../components/pickAddOns/pick-add-ons";
import FinishingUp from "../components/finishingUp/finishing-up";
import Timeline from "../components/timeline/timeline";
import ThankYou from "../components/thank-you/thank-you";

const Home = () => {
  return (
    <Router>
      <DivContainer>
        <ImgContainer>
          <TimelineContainer>
            <Timeline />
          </TimelineContainer>
        </ImgContainer>
        <Switch>
          <Route path="/" exact component={PersonalInfo} />
          <Route path="/select-your-plan" component={SelectYourPlan} />
          <Route path="/pick-add-ons" component={PickAddOns} />
          <Route path="/finishing-up" component={FinishingUp} />
          <Route path="/thank-you" component={ThankYou} />
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

  @media (max-width: 818px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  margin-right: 35px;

  width: 350px;
  height: 90vh;
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-size: cover;
  background-position: center;

  @media (max-width: 818px) {
    width: 100%;
    height: 35vh;
    margin-right: 0px;
  }
`;

const TimelineContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

export default Home;