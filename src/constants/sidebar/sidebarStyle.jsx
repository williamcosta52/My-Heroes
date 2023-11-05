import { styled } from 'styled-components';

export const SidebarStyle = styled.div`
  width: 20%;
  height: 100vh;
  @media (max-width: 450px) {
    width: 40%;
  }
  background: linear-gradient(180deg, #be0000 0%, rgba(34, 0, 0, 0.22) 100%);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30%;
    img {
      width: 30%;
      height: 35%;
      fill: #d9d9d9;
      border-radius: 100%;
      box-shadow: 0px 4px 4px 0px rgba(255, 255, 255, 0.25);
      margin: auto;
      margin-top: 3%;
      @media (max-width: 450px) {
        height: 25%;
        width: 60%;
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
      width: 50%;
      margin: auto;
      @media (max-width: 450px) {
        width: 80%;
      }
    }
  }
`;
