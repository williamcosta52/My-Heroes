import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #060000;
  display: flex;
  justify-content: flex-end;
  div:nth-child(2) {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 70%;
    height: 100%;
    overflow: hidden;
  }
  div:nth-child(3) {
    label {
      color: white;
      input {
        border-radius: 5%;
        border: none;
        margin-top: 10%;
        margin-left: 5%;
        width: 70%;
        outline: none;
      }
    }
  }
`;
export const CardStyle = styled.div`
  width: 239px !important;
  height: 308px !important;
  border-radius: 20px;
  background: linear-gradient(180deg, #cf0e0e 0%, rgba(207, 14, 14, 0) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start !important;
  margin-top: 3%;
  &.selected {
    border: 2px solid green;
  }
  &.unselected {
    border: none;
  }
  img {
    width: 187px;
    height: 223px;
    border-radius: 0px 0px 10px 10px;
    border: 1px solid #f33;
    background: #000;
    cursor: pointer;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    margin-top: 5%;
  }
`;
