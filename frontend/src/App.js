import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./theme.scss";
import Navbar from './Navbar';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            HooHacks
        </div>
    </Router>
  );
}

export default App;
