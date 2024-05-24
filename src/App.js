import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from "../src/components/Home.page"
import { SuperherosPage } from "./components/Superheros.page"
import { RQSuperHerosPage} from "./components/RQSuperHeros.page"
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes' >RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperherosPage />}/>
          <Route path='/rq-super-heroes' element={<RQSuperHerosPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
