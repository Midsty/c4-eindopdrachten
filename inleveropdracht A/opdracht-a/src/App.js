import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Form from './components/Formulier';
import Home from './components/Home';

 
function App() {
  return (
    <div className="App">
      <h1>C4 React Angular</h1>
 
      <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="user/form">Inleveropdracht A </Link>
          </li>
          <li>
            <Link to="/">Inleveropdracht B</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="user/Form" element={<Form />} />
      </Routes>
      </BrowserRouter>
    </div>  
  );
}
 
export default App;