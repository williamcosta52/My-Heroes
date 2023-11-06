import Sidebar from '../../constants/sidebar/Sidebar';
import { Container } from './cardsPageStyle';
import Card from './Card';
import { useContext, useState } from 'react';
import heroesContext from '../../context/heroes.context';
import Combat from '../combat/Combat';

export default function CardsPage() {
  const { heroes, openBattle } = useContext(heroesContext);
  const [search, setSearch] = useState('');
  return (
    <>
      {openBattle && <Combat />}
      <Container>
        <Sidebar />
        <div>
          {search
            ? heroes
                .filter((hero) =>
                  hero.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((hero, i) => <Card hero={hero} key={i} />)
            : heroes.map((hero, i) => <Card hero={hero} key={i} />)}
        </div>
        <div>
          <label>
            Herói
            <input
              type='text'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </label>
        </div>
      </Container>
    </>
  );
}
