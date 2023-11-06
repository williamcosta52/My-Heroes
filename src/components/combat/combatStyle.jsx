import { styled } from 'styled-components';

export const BackgroundBlur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;
export const Container = styled.div`
  width: 40%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #060000;
  border: 4px solid rgba(255, 255, 255, 0.25);
  border-radius: 5px;
`;
export const FirstHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #fff;
    text-align: right;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    border-radius: 20px;
    border: 1px solid #f00;
    background: #8c7f7f;
    box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
  }
`;
export const Statistics = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #02f237;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h1 {
    color: #fff;
    font-family: Inter;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;
export const SecondHero = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex-wrap: nowrap;
  h2 {
    color: #fff;
    text-align: right;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  img {
    border-radius: 20px;
    border: 1px solid #f00;
    background: #8c7f7f;
    box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
  }
`;
export const FirstHeroStats = styled.ul`
  li {
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  li:nth-child(1) {
    color: ${(props) =>
      Number(props.heroOne.intelligence) > Number(props.heroTwo.intelligence)
        ? 'green'
        : 'red'};
  }
  li:nth-child(2) {
    color: ${(props) =>
      Number(props.heroOne.strength) > Number(props.heroTwo.strength)
        ? 'green'
        : 'red'};
  }
  li:nth-child(3) {
    color: ${(props) =>
      Number(props.heroOne.speed) > Number(props.heroTwo.speed)
        ? 'green'
        : 'red'};
  }
  li:nth-child(4) {
    color: ${(props) =>
      Number(props.heroOne.durability) > Number(props.heroTwo.durability)
        ? 'green'
        : 'red'};
  }
  li:nth-child(5) {
    color: ${(props) =>
      Number(props.heroOne.power) > Number(props.heroTwo.power)
        ? 'green'
        : 'red'};
  }
  li:nth-child(6) {
    color: ${(props) =>
      Number(props.heroOne.combat) > Number(props.heroTwo.combat)
        ? 'green'
        : 'red'};
  }
`;
export const SecondHeroStats = styled.ul`
  li {
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  li:nth-child(1) {
    color: ${(props) =>
      Number(props.heroTwo.intelligence) > Number(props.heroOne.intelligence)
        ? 'green'
        : 'red'};
  }
  li:nth-child(2) {
    color: ${(props) =>
      Number(props.heroTwo.strength) > Number(props.heroOne.strength)
        ? 'green'
        : 'red'};
  }
  li:nth-child(3) {
    color: ${(props) =>
      Number(props.heroTwo.speed) > Number(props.heroOne.speed)
        ? 'green'
        : 'red'};
  }
  li:nth-child(4) {
    color: ${(props) =>
      Number(props.heroTwo.durability) > Number(props.heroOne.durability)
        ? 'green'
        : 'red'};
  }
  li:nth-child(5) {
    color: ${(props) =>
      Number(props.heroTwo.power) > Number(props.heroOne.power)
        ? 'green'
        : 'red'};
  }
  li:nth-child(6) {
    color: ${(props) =>
      Number(props.heroTwo.combat) > Number(props.heroOne.combat)
        ? 'green'
        : 'red'};
  }
`;
export const DescriptionBattle = styled.ul`
  li {
    color: #fff;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    font-family: Inter;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
