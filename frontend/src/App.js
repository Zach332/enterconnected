import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme.scss";
import IntroPage from "./IntroPage"
import Home from './Home';
import AddNewActivityType from './AddNewActivityType';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={IntroPage} />
                <Route path="/newActivityType" exact component={AddNewActivityType} />
                <Route component={Home} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
