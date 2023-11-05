import { styled } from 'styled-components';
import { BsPencilSquare } from 'react-icons/bs';

export const Container = styled.div`
  background: #060000;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-bottom: 13%;
    img {
      width: 20%;
      height: 15%;
      fill: #d9d9d9;
      border-radius: 100%;
      box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
      margin-bottom: 3%;
      @media (max-width: 450px) {
        height: 25%;
        width: 37%;
      }
    }
    h2 {
      margin: auto;
      color: #fff;
      text-align: center;
      font-family: Inter;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      @media (max-width: 450px) {
        font-size: 20px;
      }
    }
    button {
      border-radius: 10px;
      background: #f00;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      width: 35%;
      margin-top: 3%;
      @media (max-width: 450px) {
        width: 80%;
      }
      &:hover {
        background-color: #132bab;
      }
    }
  }
`;
export const EditNameIcon = styled(BsPencilSquare)`
  width: 15%;
  height: 100%;
  cursor: pointer;
`;
