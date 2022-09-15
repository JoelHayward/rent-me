import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Rentals from "./pages/Rentals.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/rentals">
          <Rentals />
        </Route>
      </Router>
    </div>
  );
}

export default App;
