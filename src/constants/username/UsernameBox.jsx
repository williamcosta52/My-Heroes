import Button from '@mui/material/Button';
import { Container } from './usernameBoxStyle';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef } from 'react';

export default function UsernameBox({ setName, setProfileName }) {
  const name = useRef(null);
  function changeName(e) {
    e.preventDefault();
    localStorage.setItem('name', name.current.value);
    setProfileName(name.current.value);
    setName(false);
  }
  return (
    <Container>
      <div>
        <AiOutlineClose
          style={{ marginLeft: '90%', cursor: 'pointer' }}
          onClick={() => setName(false)}
        />
        <form onSubmit={changeName}>
          <p>Novo Nome:</p>
          <input type='text' ref={name} required />
          <Button variant='contained' type='submit'>
            Alterar Nome
          </Button>
        </form>
      </div>
    </Container>
  );
}
