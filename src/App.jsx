import Button from '@mui/material/Button';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
