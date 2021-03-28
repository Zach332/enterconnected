import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme.scss";
import IntroPage from "./IntroPage"
import Home from './Home';
import AddActivityAvailability from './AddActivityAvailability';
import ScheduledActivites from "./ScheduledActivities"
import About from "./About"

function App() {
  return (
    <Router>
        <div className="App">
            <Switch>
                <Route path="/" exact component={IntroPage} />
                <Route path="/addActivityAvailability" exact component={AddActivityAvailability} />
                <Route path="/scheduled" exact component={ScheduledActivites} />
                <Route path="/about" exact component={About} />
                <Route component={Home} />
            </Switch>
            <div className="p-3"></div>
        </div>
    </Router>
  );
}

export default App;
