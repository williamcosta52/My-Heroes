import Button from '@mui/material/Button';
import { SidebarStyle } from './sidebarStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Sidebar({ profileName, profileImage }) {
  const navigate = useNavigate();
  const [name, setName] = useState(profileName);
  const [image, setImage] = useState(profileImage);
  useEffect(() => {
    if (localStorage.getItem('name')) {
      setName(localStorage.getItem('name'));
    }
    const localImage = localStorage.getItem('image');
    if (localImage) {
      setImage(localImage);
    }
  }, [profileImage]);
  return (
    <SidebarStyle>
      <div>
        <img src={image} />
        <h2>{profileName ? profileName : name}</h2>
        <Button
          variant='contained'
          onClick={(e) => {
            navigate('/cards');
            e.preventDefault();
          }}
        >
          Cartas
        </Button>
        <Button
          variant='contained'
          onClick={(e) => {
            navigate('/');
            e.preventDefault();
          }}
        >
          Editar Perfil
        </Button>
      </div>
    </SidebarStyle>
  );
}
