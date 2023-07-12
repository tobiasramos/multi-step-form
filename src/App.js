import "./App.css";
import Home from "./page/home";
import SelectYourPlan from "./components/selectYourPlan/select-your-plan";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/select-your-plan" component={SelectYourPlan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
