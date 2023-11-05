import Sidebar from '../../constants/sidebar/Sidebar';
import { Container } from './cardsPageStyle';
import Card from './Card';
import { useContext, useState } from 'react';
import heroesContext from '../../context/heroes.context';

export default function CardsPage() {
  const { heroes } = useContext(heroesContext);
  const [search, setSearch] = useState('');
  return (
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
        <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
    </Container>
  );
}
