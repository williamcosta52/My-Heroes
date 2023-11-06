import { useContext } from 'react';
import {
  BackgroundBlur,
  FirstHero,
  SecondHero,
  Statistics,
  Container,
  FirstHeroStats,
  SecondHeroStats,
  DescriptionBattle,
} from './combatStyle';
import heroesContext from '../../context/heroes.context';
import combatResults from '../../utils/combatResult';

export default function Combat() {
  const { firstHero, secondHero, setOpenBattle, setFirstHero, setSecondHero } =
    useContext(heroesContext);
  const winner = combatResults(firstHero, secondHero);
  const heroOne = firstHero.powerstats;
  const heroTwo = secondHero.powerstats;
  return (
    <BackgroundBlur
      onClick={(e) => {
        e.preventDefault();
        setOpenBattle(false);
        setFirstHero(null);
        setSecondHero(null);
      }}
    >
      <Container>
        <FirstHero>
          <img src={firstHero && firstHero.images.sm} />
          <h2>{firstHero && firstHero.name}</h2>
        </FirstHero>
        <Statistics>
          <h1>
            <span>WINNER</span> {winner}
          </h1>
          <div>
            <FirstHeroStats
              winner={winner}
              firstHero={firstHero.name}
              heroOne={heroOne}
              heroTwo={heroTwo}
            >
              <li>{heroOne.intelligence}</li>
              <li>{heroOne.strength}</li>
              <li>{heroOne.speed}</li>
              <li>{heroOne.durability}</li>
              <li>{heroOne.power}</li>
              <li>{heroOne.combat}</li>
            </FirstHeroStats>
            <DescriptionBattle>
              <li>Intelligence</li>
              <li>Strength</li>
              <li>Speed</li>
              <li>Durability</li>
              <li>Power</li>
              <li>Combat</li>
            </DescriptionBattle>
            <SecondHeroStats
              winner={winner}
              secondHero={secondHero.name}
              heroTwo={heroTwo}
              heroOne={heroOne}
            >
              <li>{heroTwo.intelligence}</li>
              <li>{heroTwo.strength}</li>
              <li>{heroTwo.speed}</li>
              <li>{heroTwo.durability}</li>
              <li>{heroTwo.power}</li>
              <li>{heroTwo.combat}</li>
            </SecondHeroStats>
          </div>
        </Statistics>
        <SecondHero>
          <img src={secondHero && secondHero.images.sm} />
          <h2>{secondHero && secondHero.name}</h2>
        </SecondHero>
      </Container>
    </BackgroundBlur>
  );
}
