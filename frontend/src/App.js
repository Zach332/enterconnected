import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme.scss";
import IntroPage from "./IntroPage"
import Home from './Home';
import AddActivityAvailability from './AddActivityAvailability';

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={IntroPage} />
                <Route path="/addActivityAvailability" exact component={AddActivityAvailability} />
                <Route component={Home} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;
