import { useContext } from 'react';
import { CardStyle } from './cardsPageStyle';

export default function Card({ hero }) {
  return (
    <CardStyle>
      <img src={hero.images.lg} />
      <h2>{hero.name}</h2>
    </CardStyle>
  );
}
