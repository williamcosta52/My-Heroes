import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8c7f7f;
    width: 16%;
    height: 15%;
    border-radius: 2%;
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      input {
        border: none;
        border-radius: 2%;
        outline: none;
        width: 50%;
        margin-bottom: 5%;
      }
      p {
        margin-bottom: 5%;
      }
    }
  }
`;
