import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme.scss";
import Navbar from './Navbar';
import IntroPage from "./IntroPage"

function App() {
  return (
    <Router>
        <div className="App">
            <IntroPage />
        </div>
    </Router>
  );
}

export default App;
