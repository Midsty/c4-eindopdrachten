import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./routes/Home";
import Persoon from "./routes/Persoon";
import OpdrachtB  from "./routes/OpdrachtB";

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
              <Link to="user/OpdrachtB">Inleveropdracht B</Link>
            </li>
        </nav>
        <Routes>
          <Route index element={<Home />} />
          <Route path="user/Form" element={<Persoon />} />
          <Route path="user/OpdrachtB" element={<OpdrachtB/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
