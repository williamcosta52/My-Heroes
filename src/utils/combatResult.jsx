export default function combatResults(firstHero, secondHero) {
  const hero1 = firstHero.powerstats;
  const hero2 = secondHero.powerstats;
  let hero1SuperiorCount = 0;
  let hero2SuperiorCount = 0;
  let winner = '';
  if (hero1.combat > hero2.combat) {
    hero1SuperiorCount++;
  } else if (hero2.combat > hero1.combat) {
    hero2SuperiorCount++;
  }
  if (hero1.durability > hero2.durability) {
    hero1SuperiorCount++;
  } else if (hero2.durability > hero1.durability) {
    hero2SuperiorCount++;
  }
  if (hero1.intelligence > hero2.intelligence) {
    hero1SuperiorCount++;
  } else if (hero2.intelligence > hero1.intelligence) {
    hero2SuperiorCount++;
  }
  if (hero1.power > hero2.power) {
    hero1SuperiorCount++;
  } else if (hero2.power > hero1.power) {
    hero2SuperiorCount++;
  }
  if (hero1.speed > hero2.speed) {
    hero1SuperiorCount++;
  } else if (hero2.speed > hero1.speed) {
    hero2SuperiorCount++;
  }
  if (hero1.strength > hero2.strength) {
    hero1SuperiorCount++;
  } else if (hero2.strength > hero1.strength) {
    hero2SuperiorCount++;
  }
  if (hero1SuperiorCount > hero2SuperiorCount) {
    winner = firstHero.name;
  } else if (hero2SuperiorCount > hero1SuperiorCount) {
    winner = secondHero.name;
  } else {
    winner = 'Empate';
  }
  return winner;
}
