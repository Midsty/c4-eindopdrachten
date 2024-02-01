import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Persoon from "./routes/Persoon";

function App() {
  return (
    <div className="App">
      <h1>C4 React Angular</h1>

      <BrowserRouter>
        <nav>
            <li>
              <Link to="user/form">Inleveropdracht A </Link>
            </li>
            <li>
              <Link to="/">Inleveropdracht B</Link>
            </li>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="user/Form" element={<Persoon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
