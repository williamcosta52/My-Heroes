import { useContext } from 'react';
import { CardStyle } from './cardsPageStyle';
import heroesContext from '../../context/heroes.context';

export default function Card({ hero }) {
  let { firstHero, secondHero, setFirstHero, setSecondHero, setOpenBattle } =
    useContext(heroesContext);
  const isSelected = firstHero === hero || secondHero === hero;

  function selectHero(e, selectedHero) {
    if (isSelected) {
      if (firstHero === selectedHero) {
        setFirstHero(null);
      } else if (secondHero === selectedHero) {
        setSecondHero(null);
        setOpenBattle(false);
      }
    } else {
      if (!firstHero) {
        setFirstHero(selectedHero);
      } else if (!secondHero) {
        setSecondHero(selectedHero);
        setOpenBattle(true);
      }
    }
    e.preventDefault();
  }
  const cardClassName = isSelected ? 'selected' : 'unselected';
  return (
    <CardStyle className={cardClassName} onClick={(e) => selectHero(e, hero)}>
      <img src={hero.images.lg} />
      <h2>{hero.name}</h2>
    </CardStyle>
  );
}
