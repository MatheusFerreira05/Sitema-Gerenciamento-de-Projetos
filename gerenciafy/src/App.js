import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import NovoProjeto from './components/pages/NovoProjeto';
import Projetos from './components/pages/Projetos';

import Container from './components/layout/Container';
import BarraNavegacao from './components/layout/BarraNavegacao';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <BarraNavegacao/>

      <Routes>
        <Route path='/' element={<Container customClass='min_height'><Home /></Container>} />
        <Route path='/projetos' element={<Container><Projetos /></Container>} />
        <Route path='/empresa' element={<Container><Empresa /></Container>} />
        <Route path='/contato' element={<Container><Contato /></Container>} />
        <Route path='/novoprojeto' element={<Container><NovoProjeto /></Container>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;