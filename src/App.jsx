import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import CardsPage from './components/cards/CardsPage';
import heroesContext from './context/heroes.context';
import { useState } from 'react';

function App() {
  const [heroes, setHeroes] = useState([]);
  const infos = { heroes, setHeroes };
  return (
    <heroesContext.Provider value={infos}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cards' element={<CardsPage />} />
        </Routes>
      </BrowserRouter>
    </heroesContext.Provider>
  );
}

export default App;
