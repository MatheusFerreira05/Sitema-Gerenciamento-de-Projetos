import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import NovoProjeto from './components/pages/NovoProjeto';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/empresa'>Empresa</Link>
        <Link to='/contato'>Contato</Link>
        <Link to='/novoprojeto'>Novo Projeto</Link>
      </ul>

      <Routes>
        <Route path='/' element={<Container customClass='min_height'><Home /></Container>} />
        <Route path='/empresa' element={<Container><Empresa /></Container>} />
        <Route path='/contato' element={<Container><Contato /></Container>} />
        <Route path='/novoprojeto' element={<Container><NovoProjeto /></Container>} />
      </Routes>

      <footer>footer</footer>
    </Router>
  );
}

export default App;
