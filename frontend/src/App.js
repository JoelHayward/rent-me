import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Rentals from "./pages/Rentals.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
